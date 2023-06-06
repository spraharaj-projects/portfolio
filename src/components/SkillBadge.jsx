import React from "react";

const SkillBadge = ({ image, title }) => {
  return (
    <div className="flex items-center">
      <div className="bg-white h-[24px] w-[24px] p-1 rounded-l-md text-center">
        <img className="h-[15px]" src={image} alt="Azure" />
      </div>
      <div className="py-1 h-[24px] px-2 text-sm bg-sky-950 rounded-r-md flex items-center justify-center">
        {title}
      </div>
    </div>
  );
};

export default SkillBadge;
