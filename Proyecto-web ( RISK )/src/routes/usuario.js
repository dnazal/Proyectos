const KoaRouter = require('koa-router');
const jugador = require('../models/jugador');
const {isAuthenticated} = require('../middlewares/auth');

const router = new KoaRouter();



router.get('/', async (ctx) => {
    const jugadors = await ctx.orm.Usuario.findAll();
    try {
        ctx.body = jugadors;
        ctx.status = 200;
    } catch (error) {
        
    }
});

//  HOLAAAA  //


router.post('/', async (ctx) => {
    const jugador = ctx.orm.Usuario.build(ctx.request.body);
    console.log("nombre",jugador.nombre);
    if (jugador.nombre == "" || jugador.password == ""){
        ctx.status = 404;
    }
    else{
        try {
            await jugador.save({ fields: ['nombre', 'password'] });
            ctx.body = jugador;
            ctx.status = 201;
        } catch (error) {
            
        }
    }
    
});

module.exports = router;