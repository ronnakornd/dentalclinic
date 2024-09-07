import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { convertTimestamp } from '../util/ConvertTime';

function Bulletin() {
  const [posts, setPosts] = useState([
  ]);

  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      setPosts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchPosts();
  }, []);

  return (
    <div className="bulletin-board p-4 md:px-10  md:min-h-auto w-full">
      <h2 className="text-4xl  text-center mb-4">บทความ</h2>
      <div className="bulletin-posts grid grid-cols-1 w-full md:grid-cols-2 gap-4">
        {posts.length > 0 &&
          <a href={`/post/${posts[0].id}`} key={posts[0].id} className="bulletin-post h-10/12 card card-body p-4 border rounded  bg-white hover:bg-slate-300 cursor-pointer">
            {posts[0].cover && (
              <img src={posts[0].cover} alt={posts[0].title} className="w-full h-3/4 object-cover mt-2" />
            )}
            <h3 className="text-lg md:text-xl font-semibold">{posts[0].title}</h3>
            <p className="text-gray-700">{posts[0].description}</p>
            <p className='text-sm self-end text-slate-400'>{convertTimestamp(posts[0].createdAt)}</p>
          </a>
        }
        <div>
        {posts.slice(1,4).map(post => (
          <a href={`/post/${post.id}`} key={post.id} className="flex h-48 p-4 border rounded  bg-white gap-3 hover:bg-slate-300 cursor-pointer">
            {post.cover && (
              <img src={post.cover} alt={post.title} className="w-4/12 md:w-1/4 h-3/4 object-cover mt-2 bg-black" />
            )}
            <div className='w-3/4'>
            <h3 className="text-sm md:text-xl font-semibold">{post.title}</h3>
            <p className="text-xs md:text-sm text-gray-700 break-words h-3/4 overflow-hidden">{post.description}</p>
            <p className='text-sm float-right text-slate-400'>{convertTimestamp(posts[0].createdAt)}</p>
            </div>
          </a>
        ))}
        </div>
      </div>
      <div className='p-5 mt-5 w-full flex justify-center items-center gap-2'>
        <a href="/bloglist" className='btn capitalize btn-neutral btn-outline'>เพิ่มเติม</a>
      </div>
    </div>
  );
}

export default Bulletin;
