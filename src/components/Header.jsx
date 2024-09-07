import React, {useEffect, useState} from "react";
import Menu from "../elements/Menu";
import { useParams } from "react-router-dom";

function Header({page}) {
  const [currentPage, setCurrentPage] = useState("หน้าแรก");
  useEffect(() => {
    if(page){
      setCurrentPage(page);
    }
  }
  , [page]);
  const links = [
    {
      name: "หน้าแรก",
      url: "/",
    },
    { name: "โปรโมชั่น", url: "/promotions" },
    {
      name: "บริการ",
      url: "/services",
    },
    {
      name: "บทความ",
      url: "/articles",
    },
    {
      name: "เกี่ยวกับเรา",
      url: "/about",
    },
    {
      name: "ติดต่อเรา",
      url: "/contact",
    },
  ];
  return (
    <div className="navbar  h-20 bg-stone-100 shadow-lg gap-20 justify-between">
      <div className="gap-2">
        <img src="/logo_transparent_background.png" className="w-10" alt="" />
        <a
          href="/"
          className="flex flex-col justify-center items-center text-sky-500"
        >
          <h1 className="text-xl">The Cloud</h1>
          <p className="text-xs">Dental Studio</p>
        </a>
      </div>
      <div className="">
        <ul className="hidden md:flex gap-6 ">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.url} className={`text-sky-400 link-hover ${(link.name == currentPage)? "font-bold":""}`}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block">
        <a href="/login" className="btn btn-outline btn-primary text-stone-100">
          นัดหมาย
        </a>
      </div>
      <div className="flex flex-none md:hidden gap-2">
        <Menu />
      </div>
    </div>
  );
}

export default Header;
