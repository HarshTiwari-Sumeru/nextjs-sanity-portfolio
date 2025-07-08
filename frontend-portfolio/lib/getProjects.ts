export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
};

import { sanity } from "./sanityClient";

export const getProjects = async (): Promise<Project[]> => {
  return await sanity.fetch(`*[_type == "project"]{
    title,
    description,
    "imageUrl": image.asset->url,
    url
  }`);
};
