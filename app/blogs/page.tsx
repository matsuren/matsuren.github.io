import React from "react";
import { allBlogs } from "content-collections";
import Link from "next/link";
import { Blog } from "content-collections";

function BlogSummary({ blog }: { blog: Blog }) {
  return (
    <div className="p-4 m-4 border rounded-xl ">
      <div className="flex items-center justify-between">
        <div className="text-2xl">
          {blog.date.toLocaleDateString("ja-JP")}: {blog.title}
        </div>
        <div>Last updated: {blog.lastModified.toLocaleString("ja-JP")}</div>
      </div>
      <div className="text-xl p-4">{blog.summary}</div>
    </div>
  );
}

export default function Blogs() {
  const sortedBlogs = allBlogs.toSorted(
    (a, b) => b.date.getTime() - a.date.getTime(),
  );
  return (
    <div>
      <div className="text-4xl p-4">Blogs</div>
      {sortedBlogs.map((blog) => (
        <Link href={`blogs/${blog.slug}`} key={blog.slug}>
          <BlogSummary blog={blog} key={blog.title} />
        </Link>
      ))}
    </div>
  );
}
