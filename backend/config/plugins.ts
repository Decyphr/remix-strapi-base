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
        article: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::page.page",
          modelName: "page",
          fuzzysortOptions: {
            keys: [
              {
                name: "title",
                weight: 100,
              },
            ],
          },
        },
        {
          uid: "api::article.article",
          modelName: "article",
          fuzzysortOptions: {
            keys: [
              {
                name: "title",
                weight: 100,
              },
            ],
          },
        },
      ],
    },
  },
});
