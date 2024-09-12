import Image from "next/image";
import React from "react";

interface CustomSideBarProps {
  icon: any;
  image?: boolean;
  imageSrc?: string;
  title: string;
  dropDown?: boolean;
  dropdownIcon?: any;
}

const CustomSidebarComponentWithIcon: React.FC<CustomSideBarProps> = ({
  image,
  icon,
  title,
  dropDown,
  imageSrc,
  dropdownIcon,
}) => {
  return (
    <div className="w-full flex items-center  justify-between hover:cursor-pointer transition-all hover:bg-[#5A5A5D]   px-5 py-3  rounded-md   ">
      <div className="flex items-center gap-2">
        {image && (
          <Image
            src={imageSrc && imageSrc}
            alt={imageSrc && imageSrc}
            height={500}
            width={500}
            className="h-10 w-10"
          />
        )}
        {!image && icon}
        <p className="text-white text-sm">{title}</p>
      </div>

      {dropDown && dropdownIcon}
    </div>
  );
};

export default CustomSidebarComponentWithIcon;
