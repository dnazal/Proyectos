const KoaRouter = require('koa-router');
const zona = require('../models/zona');

const router = new KoaRouter();

router.get('/', async (ctx) => {
    const zonas = await ctx.orm.Zona.findAll();
    try {
        ctx.body = zonas;
        ctx.status = 200;
    } catch (error) {

    }
});

router.get('/:id_jugador', async (ctx) => {
    const id_jugador = ctx.params.id_jugador;
    const zonas = await ctx.orm.Zona.findAll({ where: { JugadorId: id_jugador}});
    try {
        ctx.body = zonas;
        ctx.status = 200;
    } catch (error) {

    }
});

router.post('/', async (ctx) => {
    const zona = ctx.orm.Zona(ctx.request.body);
    try {
        await zona.save({ fields: ['xp_ataque', 'xp_defensa', 'ubicacion', 'id_jugador'] });
        ctx.body = zona;
        ctx.status = 201;
    } catch (error) {
        
    }
});


router.put('/', async (ctx) => {
    console.log("ACAA");
    var tipo = ctx.request.body.tipo;
    

    if (tipo == "preparacion") {
        console.log("ACAA222");
        var idzona = parseInt(ctx.request.body.id);
        var xpataque = parseInt(ctx.request.body.xp_ataque);
        var xpdefensa = parseInt(ctx.request.body.xp_defensa);
        var idjugador = parseInt(ctx.request.body.id_jugador);
        const zona = await ctx.orm.Zona.findOne({ where: { id: idzona , JugadorId: idjugador} });
        console.log("XPXPXPXPX: ", typeof zona.xp_ataque);
        zona.xp_ataque += xpataque;
        zona.xp_defensa += xpdefensa;
        await zona.save();
        ctx.body = zona
        ctx.status = 201;
    } else {
        var zonaataque = parseInt(ctx.request.body.id_zona_atacante);
        var zonadefensa = parseInt(ctx.request.body.id_zona_defender);
        var idjugador = parseInt(ctx.request.body.id_jugador);

        console.log(zonaataque, zonadefensa);

        const zona_ataque = await ctx.orm.Zona.findOne({ where: { id: zonaataque } });

        const zona_defensa = await ctx.orm.Zona.findOne({ where: { id: zonadefensa} });
    
        var numero = Math.floor(Math.random() * 2);

        if (numero) {
            var resultado = "Ganaste el Ataque!"
        } else {
            var resultado = "Perdiste el Ataque :("
        }
        
        if (numero) {
               zona_defensa.xp_defensa -= 10;
               await zona_defensa.save();
        }
        else {
            zona_ataque.xp_ataque -= 10;
            await zona_ataque.save();
        }

        var ejemplo = { 
            "resultado": resultado,  
        }

        if (zona_defensa.xp_defensa < 0) {
            console.log("antes", zona_defensa.JugadorId);
            zona_defensa.JugadorId = zona_ataque.JugadorId;
            console.log("despues", zona_defensa.JugadorId);
            zona_defensa.xp_defensa = 0;
            await zona_defensa.save();
        }

        if (zona_ataque.xp_ataque < 0) {
            zona_ataque.JugadorId = zona_defensa.JugadorId;
            zona_ataque.xp_ataque = 0;
            await zona_ataque.save();
        }

        ctx.body = ejemplo;
        ctx.status = 201;
     }
    
    // try {
    //     await zona.save({ fields: ['xp_ataque', 'xp_defensa', 'ubicacion', 'id_jugador'] });
    //     ctx.body = zona;
    //     ctx.status = 201;
    // } catch (error) {
    //     
    // }
});

router.delete('/:id', async (ctx) => {
    const zonaid = ctx.params.id;
    try {
        const zona = await ctx.orm.Zona.findOne({ where: { id: zonaid }});
        await zona.destroy();
        ctx.status = 200;
    } catch (ValidationError) {
        ctx.throw(400);
        ctx.body = ValidationError;
    }
})

module.exports = router;
