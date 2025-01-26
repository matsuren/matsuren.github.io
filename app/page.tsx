import { allResearchCategories } from "content-collections";
export default function Home() {
  return (
    <div>
      {allResearchCategories.map((category) => (
        <h1 className="text-lg p-4" id={category.slug}>
          {category.title}
        </h1>
      ))}
    </div>
  );
}
