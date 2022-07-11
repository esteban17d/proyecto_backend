const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send('Bienvenido a el sistema de mantenimiento SMAO')
});

router.get("/login", (req, res) => {
    res.send(`<html>
    <head>
        <title>Login</title>
    </head>
    <body>
        <form method="POST" action="/auth">
            Nombre <input type="text" name="text">
            Contraseña <input type="password" name="password">
            <input type="submit" value="Iniciar Sesión">
        </form>
    </body>
    </html>`)
});

router.post("/auth",  (req, res) => {
    const {username, password} = res.body;
    if (username == "admin" && password == "1234") {
        const admin = {username: username}
        const accessToken = generateAccessToken(admin)
    }
    if (username == "personal" && password == "qwert") {
        const personal = {username: username}
        const accessToken = generateAccessToken(personal)
    }
})

module.exports = router;
