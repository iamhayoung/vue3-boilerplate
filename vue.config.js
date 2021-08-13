module.exports = {
  css: {
    loaderOptions: {
      // @/ is an alias to src/
      scss: {
        additionalData: `
          @import "~@/assets/scss/variables.scss";
          @import "~@/assets/scss/mixins.scss";
        `,
      },
    },
  },
};
