import Link from "next/link";
import { allBlogs } from "content-collections";
import CustomMarkdown from "@/components/CustomMarkdown";

//export const dynamic = "error";
export async function generateStaticParams() {
  const params = allBlogs.map((blog) => ({ slug: blog.slug }));
  return params;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const blog = allBlogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  return (
    <article className="">
      <div className="py-2">
        <Link href="/blogs" className="text-lg text-blue-600 hover:underline">
          ← Go Back to Blogs
        </Link>
      </div>
      <div className="flex justify-between py-2">
        <div className="text-4xl p-2">{blog.title}</div>
        <div>
          <div className="text-xl">
            Date: {blog.date.toLocaleDateString("ja-JP")}
          </div>
          <div className="text-gray-500">
            Last updated: {blog.lastModified.toLocaleString("ja-JP")}
          </div>
        </div>
      </div>
      <hr className="pb-4" />
      <div className="p-2">
        <CustomMarkdown
          className="custom-prose"
          content={blog.content}
        />
      </div>
    </article>
  );
}
