"use client";
import { NavLink } from "@/app/interface";
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const menuRef = useRef<HTMLDivElement | null>(null)
  const pathName = usePathname()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
  const navLinks: Array<NavLink> = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academic" },
    { name: "Admissions", path: "/admission" },
    { name: "Student Life", path: "/studentLife" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <div className={`text-gray-15 font-medium flex justify-between items-center 2xl:h-20 h-16.5 border-2 border-color-gray rounded-xl 2xl:mt-3.5 mt-3.5 pt-px ${open ? "" : " overflow-hidden"}`}>
      <div className="flex items-center w-fit gap-2.5 border-2 border-color-gray 2xl:py-5 py-4 2xl:px-6 px-5 bg-orange-65 rounded-l-xl ">
        <Image
          src="/imges/imgNavBar.png"
          alt="navLogo"
          width={40}
          height={40}
          className="max-2xl:h-8.5 max-2xl:w-8.5"
        />
        <Image
          src="/imges/textButtonNav.png"
          alt="navTwxtLogo"
          width={136}
          height={16}
          className="max-2xl:w-28.75 max-2xl:h-3.75"
        />
      </div>
      <div className="xl:flex hidden">
        {navLinks.map((item, index) => {
          const isActive = pathName === item.path
          if (index == navLinks.length - 1) {
            return (
              <Link
                key={index}
                href={item.path}
                className="2xl:py-6.5 2xl:px-8.5 py-5.25 px-7.5 2xl:text-[20px] text-[16px] rounded-r-xl bg-orange-75 border-2 border-gray-15 transform transition duration-300 hover:scale-105 hover:-translate-y-1"
              >
                {item.name}
              </Link>
            )
          } else {
            return (
              <Link
                key={index}
                href={item.path}
                className={`${isActive ? "bg-orange-95 overflow-hidden" : ""} 2xl:py-6.5 2xl:px-8.5 py-5.25 px-7.5 2xl:text-[20px] text-[16px] border-s-2  border-gray-15 transform transition duration-300 hover:scale-105 hover:-translate-y-1 `}
              >
                {item.name}
              </Link>
            )
          }
        })}
      </div>
      <button className="xl:hidden rounded-r-xl bg-orange-95 border-2 border-gray-15 py-5.25 px-7.5 relative" onClick={() => { setOpen(!open) }}>
        {!open && <Image
          src="/imges/logo.png"
          alt="logoNav"
          width={28}
          height={28}
        />}
        {open && <div ref={menuRef} className="flex flex-col absolute z-100 right-0 top-0 w-80 p-5 bg-orange-75 gap-3 items-center rounded-xl">
          {navLinks.map((item, index) => {
            const isActive = pathName === item.path
            return (
              <Link
                key={index}
                href={item.path}
                className={`${isActive ? "bg-orange-95 overflow-hidden" : ""} w-50 px-5 py-3 text-[16px] border-2  border-gray-15 rounded-lg`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>}
      </button>
    </div>
  )
}

export default Navbar
