//==========
// port
//==========
process.env.PORT = process.env.PORT || 3000;

//==========
// Entorno
//==========

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==========
// Entorno 60x60x24x30 = mes
//==========
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//==========
// SEED de autenticacion
//==========
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';
//==========
// DB
//==========

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

//==========
// GOOGLE CLIENT ID
//==========
process.env.CLIENT_ID = process.env.CLIENT_ID || '1017106502399-c2aqbd4dosnir8alabujhkrm4sarlloo.apps.googleusercontent.com';