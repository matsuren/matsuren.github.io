import { ResearchWork } from "content-collections";
import ExportedImage from "next-image-export-optimizer";
import Markdown from "react-markdown";

export default function ResearchWorkCard({ work }: { work: ResearchWork }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <div className="p-2">
      <h1 className="text-xl md:text-2xl p-y-2 italic">{work.title}</h1>
      <div className="flex justify-center items-center gap-x-16">
        {work.images &&
          work.images.map((image) => (
            <div key={image.url} className="p-2">
              <ExportedImage
                src={image.url}
                alt={image.caption}
                width={300}
                height={300}
                basePath={basePath}
                className="object-contain w-96 mx-auto"
              />
              <p className="text-center p-2">{image.caption}</p>
            </div>
          ))}
      </div>
      {work.content && <Markdown className="p-2 md:text-lg">{work.content}</Markdown>}
    </div>
  );
}
