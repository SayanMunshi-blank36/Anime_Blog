import React from "react";
import Image from "next/image";
import styles from "../styles/EachBlog.module.css";

const EachBlog = () => {
  return (
    <div
      className={`${styles.eachBlogTemp} pb-6 mb-6 border-b-2 border-b-gray-700`}
    >
      <Image
        className="cursor-pointer hover:opacity-90"
        src="/393055.png"
        width={350}
        height={250}
      />
      <div className="right_latest-blog flex flex-col">
        <div className="right_latest_internal mb-8">
          <div className="cursor-pointer bg-error w-fit p-0.5 text-sm rounded-sm font-montserrat">
            Manga
          </div>
          <h3 className="font-bangers my-1 tracking-wider text-3xl text-white cursor-pointer hover:underline">
            Berserk: Manga Review (Spoliers)
          </h3>
          <p className="font-montserrat text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde nobis
            veritatis quia consectetur praesentium, cumque quo mollitia labore,
            libero odio illo voluptas consequatur, reprehenderit iure ullam
            voluptate numquam vero repellendus.
          </p>
        </div>
        <div className="each_blog_bottom flex">
          <p className="cursor-pointer text-sm text-primary mr-4">By Blank36</p>
          <p className="text-sm text-primary-focus">40 Minutes Ago</p>
        </div>
      </div>
    </div>
  );
};

export default EachBlog;
