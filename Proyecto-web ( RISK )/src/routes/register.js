const KoaRouter = require('koa-router');

const router = new KoaRouter();


// endpoint para crear usuario, register
router.post('/', async (ctx) => {
    const jugador = ctx.orm.Usuario.build(ctx.request.body);
    try {
        await jugador.save({ fields: ['nombre', 'password'] });
        ctx.body = jugador;
        ctx.status = 201;
    } catch (error) {
        
    }
});

module.exports = router;