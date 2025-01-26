import React from "react";
import { allResearchCategories } from "content-collections";
import ResearchCategoryWithWorks from "@/components/ResearchCategoryWithWorks";

export default function Research() {
  const sortedResearchCategories = allResearchCategories.toSorted(
    (a, b) => a.sortOrder - b.sortOrder,
  );

  return (
    <div>
      {sortedResearchCategories.map((category) => (
        <ResearchCategoryWithWorks category={category} key={category.slug}/>
      ))}
    </div>
  );
}
