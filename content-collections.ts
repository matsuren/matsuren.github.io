import { defineCollection, defineConfig } from "@content-collections/core";

const researchCategories = defineCollection({
  name: "researchCategories",
  directory: "content/research/categories",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    sortOrder: z.number().default(100),
  }),
  transform: async (doc, context) => {
    const slug = doc._meta.path;
    const works = context
      .documents(researchWorks)
      .filter((a) => a.category === slug);
    return {
      ...doc,
      slug,
      works,
    };
  },
});

const researchWorks = defineCollection({
  name: "researchWorks",
  directory: "content/research/works",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    category: z.union([
      z.literal("robotics-for-constructions"),
      z.literal(
        "3d-scene-reconstruction-using-multiple-fisheye-cameras-for-robot-teleoperation",
      ),
      z.literal("robotics-for-nuclear-application"),
    ]),
    sortOrder: z.number().default(100),
    images: z
      .array(
        z.object({
          url: z.string(),
          caption: z.string(),
        }),
      )
      .optional(),
  }),
});

const selectedWorks = defineCollection({
  name: "selectedWorks",
  directory: "content/research/selected-works",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    tag: z.string(),
    imageUrl: z.string(),
    sortOrder: z.number().default(100),
  }),
});

export default defineConfig({
  collections: [researchCategories, researchWorks, selectedWorks],
});
