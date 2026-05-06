"use client";
import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="flex justify-between bg-orange-90 2xl:h-14.5 lg:h-12 h-11.25 overflow-hidden border-2 border-color-gray rounded-lg text-gray-15 font-medium">
      <Image
        src="/imges/DesignTop1.png"
        alt="DesignTop1"
        width={224}
        height={58}
        className="max-md:w-12 max-lg:w-45"
      />
      <div className="flex items-center 2xl:gap-30.25 xl:gap-42.75 lg:gap-15  max-lg:relative ">
        <Image
          src="/imges/DesignTop2.png"
          alt="DesignTop2"
          width={72}
          height={45}
          className="2xl:h-11.25  2xl:-mt-2.5 2xl:w-18 lg:h-6.5 lg:w-12.5 lg:-mt-5 h-5.75 w-8 max-lg:absolute top-0 -left-30 max-md:-left-12"
        />
        <Link href="/admission" className="2xl:text-[20px] lg:text-[16px] max-md:text-[14px]">
          Admission is Open, Grab your seat now
          →
        </Link>
        <Image
          src="/imges/DesignTop3.png"
          alt="DesignTop3"
          width={39}
          height={29}
          className="2xl:h-7.25 2xl:-mb-8 lg:h-4.25  lg:-mb-7 h-5 w-8 max-lg:absolute bottom-0 -right-30 max-md:-right-15"
        />
      </div>
      <Image
        src="/imges/DesignTop4.png"
        alt="DesignTop4"
        width={224}
        height={58}
        className="max-md:w-10 max-lg:w-40"
      />
    </div>
  );
}