import Image from "next/image";
import LogoImage from "../src/images/logo.png";
import ProfileImage from "../src/images/img_avatar.png";
import { MdOutlineDashboard } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

import CustomBorder from "@/src/common/CustomBorder";
import CustomSidebarComponentWithIcon from "@/src/common/CustomSidebarComponentWithIcon";

export default function Home() {
  return (
    <div className="w-full h-screen flex p-5 gap-5">
      <div className="h-[95vh] w-1/5 bg-gradient-to-tr from-[#1D1D1E] to-[#404047] rounded-lg p-3 overflow-y-auto">
        <div className="flex items-center gap-2 p-5">
          <Image
            src={LogoImage}
            alt="logo"
            height={500}
            width={500}
            className="h-10 w-10"
          />
          <p className="text-white font-bold text-sm">Otis Admin PRO</p>
        </div>
        <CustomBorder />
        <div className="flex items-center justify-between hover:cursor-pointer transition-all hover:bg-[#5A5A5D] px-5 py-3 mt-5 mb-5 rounded-md">
          <div className="flex items-center gap-2">
            <Image
              src={ProfileImage}
              alt="Profile Image"
              height={500}
              width={500}
              className="h-10 w-10"
            />
            <p className="text-white font-bold text-sm">Otis Admin PRO</p>
          </div>

          <RiArrowDropDownLine
            color="#fff"
            size={32}
            className="text-[#9C9C9F] hover:cursor-pointer"
          />
        </div>
        <CustomBorder />
        <div className="w-full flex flex-col py-2">
          <CustomSidebarComponentWithIcon
            icon={
              <MdOutlineDashboard
                color="#fff"
                size={32}
                className="text-[#9C9C9F] hover:cursor-pointer"
              />
            }
            title={"Dashboard"}
            dropDown
            dropdownIcon={
              <RiArrowDropDownLine
                color="#fff"
                size={32}
                className="text-[#9C9C9F] hover:cursor-pointer"
              />
            }
          />
        </div>
      </div>

      <div className="w-4/5 overflow-y-auto p-4 bg-white rounded-lg shadow-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        deleniti fuga delectus soluta veniam porro modi possimus! Incidunt
        aperiam voluptas accusamus possimus iste, itaque, excepturi, laudantium
        quos sequi officiis omnis? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Necessitatibus deleniti fuga delectus soluta veniam
        porro modi possimus! Incidunt aperiam voluptas accusamus possimus iste,
        itaque, excepturi, laudantium quos sequi officiis omnis?
      </div>
    </div>
  );
}
