//==========
// port
//==========
process.env.PORT = process.env.PORT || 3000;

//==========
// Entorno
//==========

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==========
// DB
//==========

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://jruvalcaba:kJdi23yXbPAoJtOS@cluster0-ajlsr.mongodb.net/cafe';
}

process.env.URLDB = urlDB;