import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface SEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string | null;
  metaRobots: string | null;
  structuredData: any | null;
  metaViewport: string | null;
  canonicalURL: string | null;
  /* "metaImage": {
    "data": null
  }, */
  metaSocial: MetaSocial[];
}

interface MetaSocial {
  id: number;
  socialNetwork: string;
  title: string;
  description: string;
}

export interface StrapiResponseMeta {
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

interface StrapiUploadFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

export interface StrapiUploadFile {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    [key: string]: StrapiUploadFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Homepage {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  seo: SEO | null;
}

export interface Page {
  id: number;
  title: string;
  slug: string;
  content: BlockContentComponent[];
  seo: SEO | null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: BlockContentComponent[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

/**
 ** Block Content Types
 */

export type BlockContentComponentTypes =
  | "content.rich-content"
  | "content.grid";

export interface BlockContentComponent {
  id: number;
  __component: BlockContentComponentTypes;
}

export interface RichContentBlock extends BlockContentComponent {
  __component: "content.rich-content";
  richContent: BlocksContent;
}

export interface GridContentBlock extends BlockContentComponent {
  __component: "content.grid";
  columns: "two" | "three" | "four";
}
