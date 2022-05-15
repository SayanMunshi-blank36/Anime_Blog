import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedPostCard = () => (
  <Link href="/blogpost/vagabond">
    <div className="relative h-72">
      <div
        className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
        style={{
          backgroundImage: `url('https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/Vagabond-Featured-And-Social-media-Image.jpg.jpg')`,
        }}
      />
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
        <p className="text-white mb-4 text-shadow font-semibold text-xs">
          May 12, 2022
        </p>
        <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
          Vagabond
        </p>
        <div className="flex items-center absolute bottom-5 w-full justify-center">
          <p className="inline align-middle text-white text-shadow ml-2 font-medium">
            Blank36
          </p>
        </div>
      </div>
    </div>
  </Link>
);

export default FeaturedPostCard;