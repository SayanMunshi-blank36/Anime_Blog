import React from "react";
import Image from "next/image";

const RightSideBlog = () => {
  return (
    <div className="px-4 my-8">
      <Image
        className="cursor-pointer hover:opacity-90"
        src="/393055.png"
        width={300}
        height={200}
      />
      <div className="mt-2 px-2 border-primary border-l-4 cursor-pointer hover:text-primary transition-all w-fit">
        Manga
      </div>
      <h3 className="font-bangers my-1 tracking-wider text-xl text-white cursor-pointer hover:underline">
        Berserk: Manga Review (Spoliers)
      </h3>
      <p className="text-sm text-primary-focus">40 Minutes Ago</p>
    </div>
  );
};

export default RightSideBlog;
