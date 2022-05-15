import React from "react";
import Link from "next/link";

const FeaturedPostCard = () => {
  return (
    <div className="relative h-screen cursor-pointer hover:opacity-90">
      <div
        className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-screen"
        style={{
          backgroundImage: `url('https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/Vagabond-Featured-And-Social-media-Image.jpg.jpg')`,
        }}
      />
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-screen" />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
        <p className="text-white mb-4 text-shadow font-semibold text-xl cursor-text">
          May 12, 2022
        </p>
        <p className="text-white mb-4 text-shadow font-bangers font-semibold tracking-widest text-5xl text-center cursor-pointer hover:underline">
          VAGABOND
        </p>
        <p className="text-white mb-4 mx-8 text-shadow font-montserrat text-sm md:text-xl text-center cursor-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam aperiam
          explicabo magni nihil temporibus? Mollitia maiores soluta aliquid
          consectetur obcaecati voluptatem, recusandae quos veniam libero
          reiciendis error numquam eos illo?
        </p>

        <div className="flex items-center absolute bottom-5 w-full justify-center">
          <Link href="/">
            <a>
              <p className="inline align-middle text-white text-shadow ml-2 font-xl font-montserrat cursor-pointer">
                By Blank36
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
