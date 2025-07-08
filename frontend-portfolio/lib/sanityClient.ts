import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "s70y6l3m",       
  dataset: "production",
  apiVersion: "2023-07-05",
  useCdn: true,
});
