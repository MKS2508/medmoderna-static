const express = require('express')
const helmet = require('helmet')

const app = express()

// add some security-related headers to the response
app.use(helmet())

app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send(`<style>video{width:100%;max-width:500px;}</style>
        <div class="videos">
            <video src="/videos/videohome3.mp4" controls></video>
        </div>`)
})

module.exports = app