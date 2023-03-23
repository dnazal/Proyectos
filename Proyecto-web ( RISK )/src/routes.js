const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const zonas = require('./routes/zonas');
const jugadors = require('./routes/jugadors');
const sessions = require('./routes/session');
const usuarios = require('./routes/usuario');
const esperando = require('./routes/esperando');
const register = require('./routes/register')
const {isAuthenticated} = require('./middlewares/auth');

const router = new KoaRouter();

router.use('/', index.routes());
router.use('/hello', hello.routes());
router.use('/zonas', zonas.routes());
router.use('/jugadors', jugadors.routes());
router.use('/session', sessions.routes());
router.use('/register', register.routes());
router.use('/usuario', usuarios.routes());
router.use('/esperando', esperando.routes());
router.use(isAuthenticated);

module.exports = router;
