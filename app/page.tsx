import { allResearchCategories } from "content-collections";
export default function Home() {
  return (
    <div>
      <main>
        {allResearchCategories.map((category) => (
          <h1 className="text-lg p-4" id={category.slug} key={category.slug}>
            {category.title}
          </h1>
        ))}
      </main>
      <footer>footer</footer>
    </div>
  );
}
