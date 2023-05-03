if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})

app.post('/', (req, res) => {
    let query = req.body.cityName
    const apiKey = process.env.API_KEY
    let unit = 'metric'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&id=524901&units=${unit}&appid=${apiKey}`
    https.get(url, (response) => {
        response.on('data', (data) => {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = `https://openweathermap.org/img/wn/${icon}@2x.png`
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(`<link rel="stylesheet" href="/style.css">`)
            res.write(`<div class="write"><h1 class="headingW">The temp in ${query} is ${temp} degrees Celcius.</h1> `)
            res.write(`<p class="p-text">The weather is currently ${weatherDescription}.</p>`)
            res.write(`<img src="${imageURL}">`)
            res.write(`<form action="/"><button class="btn2" type="submit"><a href=""></a>Select another city</button></form></div>`)
            res.send()
        })
    })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})