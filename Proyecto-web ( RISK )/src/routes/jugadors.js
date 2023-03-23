const KoaRouter = require('koa-router');
const jugador = require('../models/jugador');
const {isAuthenticated} = require('../middlewares/auth');

const router = new KoaRouter();

// router.use(isAuthenticated);


router.get('/', async (ctx) => {
    const jugadors = await ctx.orm.Jugador.findAll();
    try {
        ctx.body = jugadors;
        ctx.status = 200;
    } catch (error) {
        
    }
});

router.post('/', async (ctx) => {
    const jugador = ctx.orm.Usuario.build(ctx.request.body);
    console.log("nombre",jugador);
    try {
        await jugador.save({ fields: ['nombre', 'password'] });
        ctx.body = jugador;
        ctx.status = 201;
    } catch (error) {
        
    }
});

router.delete('/:id', async (ctx) => {
    const jugadorid = ctx.params.id;
    try {
        const jugador = await ctx.orm.Jugador.findOne({ where: { id: jugadorid }});
        await jugador.destroy();
        ctx.status = 200;
    } catch (ValidationError) {
        ctx.throw(400);
        ctx.body = ValidationError;
    }
})

module.exports = router;