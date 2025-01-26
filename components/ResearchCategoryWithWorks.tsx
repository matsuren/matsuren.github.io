import { ResearchCategory } from "content-collections";
import ResearchWorkCard from "./ResearchWorkCard";
import Markdown from "react-markdown";

export default function ResearchCategoryWithWorks({
  category,
}: {
  category: ResearchCategory;
}) {
  const sortedWorks = category.works.toSorted(
    (a, b) => a.sortOrder - b.sortOrder,
  );
  return (
    <article>
      <h1 className="text-2xl p-3" id={category.slug}>
        {category.title}
      </h1>
      {category.content && <Markdown>{category.content}</Markdown>}
      {sortedWorks.map((work) => (
        <ResearchWorkCard work={work} key={work._meta.path}/>
      ))}
    </article>
  );
}
