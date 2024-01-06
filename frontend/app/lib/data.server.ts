import strapi from "~/lib/strapi.server";

import type { Homepage, Page, StrapiResponseMeta } from "~/types";

export function flattenAttributes(data: any): any {
  // Base case for recursion
  if (!data) return null;

  // Handling array data
  if (Array.isArray(data)) {
    return data.map(flattenAttributes);
  }

  let flattened: { [key: string]: any } = {};

  // Handling attributes
  if (data.attributes) {
    for (let key in data.attributes) {
      if (
        typeof data.attributes[key] === "object" &&
        data.attributes[key] !== null &&
        "data" in data.attributes[key]
      ) {
        flattened[key] = flattenAttributes(data.attributes[key].data);
      } else {
        flattened[key] = data.attributes[key];
      }
    }
  }

  // Copying non-attributes and non-data properties
  for (let key in data) {
    if (key !== "attributes" && key !== "data") {
      flattened[key] = data[key];
    }
  }

  // Handling nested data
  if (data.data) {
    flattened = { ...flattened, ...flattenAttributes(data.data) };
  }

  return flattened;
}

export async function getEntryBySlug(
  contentType: "page",
  slug: string
): Promise<{
  entry: Page;
  meta: StrapiResponseMeta;
}> {
  const { data } = await strapi.get(
    `/api/slugify/slugs/${contentType}/${slug}`
  );

  const entry = flattenAttributes(data.data);

  return {
    entry,
    meta: data.meta,
  };
}

export async function getHomepage(query?: string): Promise<Homepage> {
  const q = query ?? "";

  const { data } = await strapi.get(`/api/homepage?${q}`);

  const homepage = flattenAttributes(data);

  return homepage;
}
