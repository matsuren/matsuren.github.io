import {
  type Context,
  defineCollection,
  defineConfig,
  type Document,
} from "@content-collections/core";
import { exec as cpExec } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";

const exec = promisify(cpExec);

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

async function lastModificationDate(ctx: Context, document: Document) {
  return ctx.cache(
    // TODO: this is a dirty hack to avoid cache key conflicts
    // we should find a way which handles this automatically
    { key: "_git_last_modified", ...document },
    async (document) => {
      const filePath = path.join(
        ctx.collection.directory,
        document._meta.filePath,
      );

      const { stdout } = await exec(`git log -1 --format=%ai -- ${filePath}`);
      if (stdout) {
        return new Date(stdout.trim());
      }
      return new Date();
    },
  );
}

const blogs = defineCollection({
  name: "blogs",
  directory: "content/blogs",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
  }),
  transform: async (doc, ctx) => {
    const lastModified = await lastModificationDate(ctx, doc);
    const slug = doc._meta.path;
    return {
      ...doc,
      lastModified,
      slug,
    };
  },
});

export default defineConfig({
  collections: [researchCategories, researchWorks, selectedWorks, blogs],
});
