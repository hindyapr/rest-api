const jwt = require('jsonwebtoken');

module.exports = {
    authentication: function(req, res, next) {
        try {
            let decoded = jwt.verify(req.headers.token, process.env.SECRET)
            req.dataUser = decoded;
            next()
        } catch (err) {
            res
                .status(401)
                .json({
                    message: 'silakan login terlebih dahulu'
                });
        }
    },
    authorizationAdmin: function(req, res, next) {

        if (req.dataUser.role === "Admin") {
            next()
        } else {
            res
                .status(401)
                .json({
                    message: 'anda tidak mempunyai otoritas untuk melakukan hal ini'
                });
        }

    },
    authorizationAdminOrAuthenticUser: function(req, res, next) {
        console.log(req.dataUser)
        if (req.dataUser.role === "Admin") {
            next();
        } else if (req.params.id && Number(req.params.id) === req.dataUser.id) {
            next();
        } else {
            res
                .status(401)
                .json({
                    message: 'anda tidak mempunyai otoritas untuk melakukan hal ini'
                });
        }

    }
}