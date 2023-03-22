const express = require('express')
const helmet = require('helmet')
const path = require('path')

const app = express()

// add some security-related headers to the response
app.use(helmet())

// Configura el middleware para servir archivos estáticos
app.use('/videos', express.static(path.join(__dirname, 'public', 'videos')))

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send(`
        <style>video{width:100%;max-width:500px;}</style>
        <div class="videos">
            <video src="/videos/videohome3.mp4" controls></video>
        </div>
    `)
})

module.exports = app
