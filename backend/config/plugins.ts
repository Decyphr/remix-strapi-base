module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        page: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
});
