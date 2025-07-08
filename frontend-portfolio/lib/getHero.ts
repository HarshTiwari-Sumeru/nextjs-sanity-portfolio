import { sanity } from "./sanityClient";

export const getHero = async () => {
  return await sanity.fetch(`*[_type == "hero"][0]{
    title,
    subtitle,
    "imageUrl": image.asset->url
  }`);
};
