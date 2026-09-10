export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspect?: "portrait" | "landscape" | "square";
  span?: "full" | "half";
  caption?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  clientStudio: string;
  category: "commissioned" | "personal" | "projects";
  subCategory: string; // e.g. "architecture", "interiors", "objects"
  location: string;
  area?: string;
  year?: string;
  description?: string;
  coverImage: string;
  gallery: GalleryImage[];
}

export interface NavSubLink {
  title: string;
  href: string;
}

export interface NavAccordionGroup {
  id: string;
  title: string;
  links: NavSubLink[];
  defaultOpen?: boolean;
}
