export default {
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "string" },
    {
      name: "image",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
