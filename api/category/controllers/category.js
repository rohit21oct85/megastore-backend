'use strict';

const { findOne } = require("strapi-connector-bookshelf/lib/relations");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
      async findBySlug(ctx){
            let slug =  ctx.params.slug;
            return strapi.query('category').findOne({slug: slug});
      }
};
