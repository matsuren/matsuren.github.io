import { ResearchCategory } from "content-collections";
import ResearchWorkCard from "./ResearchWorkCard";
import { MainSection } from "./MainSection";
import CustomMarkdown from "./CustomMarkdown";

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
      {category.content && (
        <CustomMarkdown className="p-2 custom-prose-xl" content={category.content} />
      )}
      {sortedWorks.map((work) => (
        <ResearchWorkCard work={work} key={work._meta.path} />
      ))}
    </MainSection>
  );
}
