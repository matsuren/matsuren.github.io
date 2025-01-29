import { ResearchCategory } from "content-collections";
import ResearchWorkCard from "./ResearchWorkCard";
import Markdown from "react-markdown";
import { MainSection } from "./MainSection";

export default function ResearchCategoryWithWorks({
  category,
}: {
  category: ResearchCategory;
}) {
  const sortedWorks = category.works.toSorted(
    (a, b) => a.sortOrder - b.sortOrder,
  );
  return (
    <MainSection title={category.title} id={category.slug}>
      {category.content && <Markdown className="p-2">{category.content}</Markdown>}
      {sortedWorks.map((work) => (
        <ResearchWorkCard work={work} key={work._meta.path} />
      ))}
    </MainSection>
  );
}
