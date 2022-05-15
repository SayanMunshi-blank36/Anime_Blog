import React from "react";
import Image from "next/image";
import Link from "next/link";

const RightSideBlog = () => {
  return (
    <div className="md:px-4 flex flex-col items-center justify-center my-8">
      <Image
        className="cursor-pointer hover:opacity-90"
        src="/393055.png"
        width={300}
        height={200}
      />
      <div className="mt-2 px-2 border-primary border-l-4 cursor-pointer hover:text-primary transition-all w-fit">
        <Link href="/category/manga">
          <a>Manga</a>
        </Link>
      </div>
      <h3 className="font-bangers my-1 tracking-wider text-xl text-white cursor-pointer hover:underline">
        Berserk: Manga Review (Spoliers)
      </h3>
      <p className="text-sm text-primary-focus cursor-text">40 Minutes Ago</p>
    </div>
  );
};

export default RightSideBlog;
