const { update } = require("strapi-connector-bookshelf/lib/relations");

module.exports = {
      async myProducts(ctx){
            let user_id =  ctx.params.user_id
            return strapi.query('product').find({users_permissions_user: user_id});
      },
      
      async getProductById(ctx){
            let {user_id, product_id} =  ctx.params
            return strapi.query('product').findOne({users_permissions_user: user_id, id: product_id});
      },
      async getProductBySlug(ctx){
            let {product_slug} =  ctx.params
            return strapi.query('product').findOne({slug: product_slug});
      },

      async update(ctx){
            try {
                  let {id} =  ctx.params
                  let slug = ctx.request.body.name.toLowerCase().replace(/ /g,'-');
                  ctx.request.body.slug = slug
                  return strapi.query('product').update({id: id}, ctx.request.body);
            } catch (error) {
                 return ctx.error; 
            }
            
      }
};
