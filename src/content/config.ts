import { z, defineCollection } from "astro:content";
const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.object({ src: z.string(), alt: z.string() }),
  }),
});

export const collections = {
  news: newsCollection,
};
