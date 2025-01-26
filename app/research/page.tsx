import React from "react";
import { allResearchCategories } from "content-collections";
import ResearchCategoryWithWorks from "@/components/ResearchCategoryWithWorks";

export default async function Research() {
  const sortedResearchCategories = allResearchCategories.toSorted(
    (a, b) => a.sortOrder - b.sortOrder,
  );

  return (
    <>
      {sortedResearchCategories.map((category) => (
        <ResearchCategoryWithWorks category={category} />
      ))}
    </>
  );
}
