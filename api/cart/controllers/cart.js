module.exports = {
      async myCart(ctx){
            let user_id =  ctx.params.user_id
            return strapi.query('cart').find({users_permissions_user: user_id});
      }
};
