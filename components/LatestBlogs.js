import React from "react";
import EachBlog from "./EachBlog";

const LatestBlogs = () => {
  return (
    <div className="my-8">
      <h2 className="text-3xl font-bangers text-neutral-content border-b-4 border-error w-fit tracking-wider mb-4">
        Latest
      </h2>
      <EachBlog />
    </div>
  );
};

export default LatestBlogs;
