import { ResearchWork } from "content-collections";
import ExportedImage from "next-image-export-optimizer";
import Markdown from "react-markdown";

export default function ResearchWorkCard({ work }: { work: ResearchWork }) {
  return (
    <div className="p-2">
      <h1 className="text-xl">{work.title}</h1>
      {work.images &&
        work.images.map((image) => (
          <div key={image.url}>
            <ExportedImage
              src={image.url}
              alt={image.caption}
              width={300}
              height={300}
            />
            <p>{image.caption}</p>
          </div>
        ))}
      {work.content && <Markdown>{work.content}</Markdown>}
    </div>
  );
}
