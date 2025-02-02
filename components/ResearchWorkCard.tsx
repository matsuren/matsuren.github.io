import { ResearchWork } from "content-collections";
import ExportedImage from "next-image-export-optimizer";
import CustomMarkdown from "./CustomMarkdown";

export default function ResearchWorkCard({ work }: { work: ResearchWork }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <div className="p-2 md:p-4">
      <h1 className="text-xl md:text-2xl md:py-2 italic">{work.title}</h1>
      <div className="flex justify-center gap-x-1 md:gap-x-16">
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
              <p className="text-center p-1 md:p-2 text-sm">{image.caption}</p>
            </div>
          ))}
      </div>
      {work.content && (
        <CustomMarkdown
          className="custom-prose md:prose-lg"
          content={work.content}
        />
      )}
    </div>
  );
}
