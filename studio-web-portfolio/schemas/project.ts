export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    { name: "title", title: "Project Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    {
      name: "image",
      title: "Project Image",
      type: "image",
      options: { hotspot: true },
    },
    { name: "url", title: "Project URL", type: "url" },
  ],
};
