import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(["bot", "engine", "domain"]),
    kind: z.string(),
    year: z.number(),
    order: z.number(),
    status: z.string(),
    stack: z.array(z.string()),
    tests: z.string().optional(),
    repo: z.string(),
    caseUrl: z.url(),
    cover: z.string().optional(),
    coverType: z.enum(["phone", "wide"]).default("phone"),
    accent: z.enum(["signal", "blue", "green"]).default("signal"),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
