import { ResearchWork } from "content-collections";

export default function ResearchWorkCard({ work }: { work: ResearchWork }) {
  return (
    <div>
      <h1>{work.title}</h1>
      {work.content && <p className="text-gray-600 text-lg">{work.content}</p>}
    </div>
  );
}
