import React, { useState, useEffect } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebaseConfig";

function NewMember() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let profileImage = "";
    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Handle progress if needed
        },
        (error) => {
          console.error("Error uploading image:", error);
        },
        async () => {
          profileImage = await getDownloadURL(uploadTask.snapshot.ref);
          await addDoc(collection(db, "team"), {
            name: name,
            service: service,
            image: profileImage,
            createdAt: Timestamp.now(),
          });
          setName("");
          setService("");
          setImage(null);
          alert("Member added successfully");
        }
      );
    } else {
      await addDoc(collection(db, "team"), {
        name: name,
        service: service,
        createdAt: Timestamp.now(),
      });
      setName("");
      setService("");
      setImage(null);
      alert("Member added successfully");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const url = URL.createObjectURL(file);
      setImagePreviewUrl(url);
    }
  };

  useEffect(() => {
    // Cleanup function to revoke the object URL
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
    };
  }, [imagePreviewUrl]);

  return (
    <div className="min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-4/4 md:w-3/4 mx-auto py-24 px-5"
      >
        <div className="text-3xl ">เพิ่มทีมแพทย์</div>
        <div className="form-control">
          <label className="label" htmlFor="title">
            ชื่อ
          </label>
          <input
            id="title"
            type="text"
            className="input input-bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-control mt-4">
          <label className="label" htmlFor="content">
            บริการ
          </label>
          <input
            id="title"
            type="text"
            className="input input-bordered"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          />
        </div>
        <div className="form-control mt-4">
          <label className="label" htmlFor="image">
            รูปภาพ
          </label>
          <input
            id="image"
            type="file"
            className="file-input w-full max-w-xs"
            onChange={handleImageChange}
          />
        </div>
        {imagePreviewUrl && (
          <img src={imagePreviewUrl} alt="Preview" className="mt-4" />
        )}
        <div className="form-control mt-4">
          <button type="submit" className="btn btn-neutral">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewMember;
