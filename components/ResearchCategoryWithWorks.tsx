import { ResearchCategory } from "content-collections";
import ResearchWorkCard from "./ResearchWorkCard";

export default function ResearchCategoryWithWorks({
  category,
}: {
  category: ResearchCategory;
}) {
  const sortedWorks = category.works.toSorted(
    (a, b) => a.sortOrder - b.sortOrder,
  );
  return (
    <div>
      <h1>{category.title}</h1>

      {category.content && <p className="text-gray-600 text-lg">{category.content}</p>}
      {sortedWorks.map((work) => (
        <ResearchWorkCard work={work} />
      ))}
    </div>
  );
}
