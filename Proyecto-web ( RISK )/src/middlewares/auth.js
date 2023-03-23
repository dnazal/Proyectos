// funcion para validar validez de cookie
const isAuthenticated = async (ctx, next) => {
  console.log("Sesion: ", ctx.session.currentUserId);
  if (ctx.session.currentUserId) {
    ctx.state.currentUser = await ctx.orm.Jugador.findByPk(ctx.session.currentUserId);
    await next();
  } else {
    const error = 'User is not logged in';
    ctx.body = error;
    ctx.status = 401;
  }
};

module.exports = { isAuthenticated };