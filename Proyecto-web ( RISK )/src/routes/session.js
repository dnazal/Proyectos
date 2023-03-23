const KoaRouter = require('koa-router');
const bcrypt = require('bcrypt');
const PASSWORD_SALT_ROUNDS = 10;
const router = new KoaRouter();


// endpoint para crear la sesión, login
router.post('session.create', '/', async (ctx) => {
  const { nombre, password } = ctx.request.body;
  const user = await ctx.orm.Usuario.findOne({ where: { nombre } });
  console.log(user.nombre);
  const authenticated = await bcrypt.compare(password, user.password);
  console.log(authenticated);
  console.log(await authenticated);
  console.log(user.password);
  console.log(password);
  if (authenticated) {
      console.log("entro a la wea")
      ctx.session.currentUserId = user.id;
      ctx.state.currentUser = user.id;

      ctx.status = 200;
  } else {
    const error = user ? 'Wrong password' : 'The username is not registered';
    ctx.body = error;
    ctx.status = 401;
  }
});

// endpoint para destruir la sesión, logout
router.delete('session.destroy', '/', async (ctx) => {
  ctx.session = null;
  ctx.status = 200;
});

module.exports = router;