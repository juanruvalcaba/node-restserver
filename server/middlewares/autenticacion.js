const jwt = require('jsonwebtoken');
//================
// Verificar Token
//=================

let verificaToken = (req, resp, next) => {
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return resp.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            })
        }
        req.usuario = decoded.usuario;
        next();
    })
};

//================
// Verificar AdminRole
//=================

let verificaAdmin_Role = (req, resp, next) => {
    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return resp.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        })

    }
};


module.exports = {
    verificaToken,
    verificaAdmin_Role
}