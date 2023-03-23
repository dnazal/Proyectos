const KoaRouter = require('koa-router');
const router = new KoaRouter();
const {isAuthenticated} = require('../middlewares/auth');

// router.use(isAuthenticated);

router.post('/', async (ctx) => {
    // const current_user = ctx.orm.Usuario.findByPk(ctx.session.currentUserId)
    console.log(ctx.state.currentUser);
    const tipo  = ctx.request.body;
    console.log("tipo", tipo);
    console.log("USER_ID: ", ctx.session.currentUserId);
    const jugada = ctx.orm.Jugadas.build(ctx.session.currentUserId, ctx.request.body);
    try {
        await jugada.save({ fields: ['id_jugador', 'tipo'] });
        ctx.body = jugada;
        ctx.status = 201;
    } catch (error) {
                                    
    }
    ctx.body = tipo;
    ctx.status = 201;
  }
);

module.exports = router;