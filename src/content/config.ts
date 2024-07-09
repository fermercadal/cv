import { defineCollection, z } from "astro:content";

const experience = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),
		location: z.string(),
		company: z.string(),
		image: z.string().optional(),
	}),
});

export const collections = { experience };
