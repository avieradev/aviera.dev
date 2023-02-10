import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    preview: z.string(),
    author: z.string().default("Aviera"),
    language: z.enum(["en", "es"]),
    tags: z.array(z.string()),
    // Convert a standard date-string into a `Date` object
    publishDate: z.date()
    // Advanced: Validate that the string is also an email
  }),
});

export const collections = {
  blog: blogCollection,
};
