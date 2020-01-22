import { Router, response } from 'express';
import fetch from 'node-fetch';
const router = Router();

const currentWeather = 'https://api.openweathermap.org/data/2.5/weather';
const fiveDayWeather = 'https://api.openweathermap.org/data/2.5/forecast';
router.get('/current/:zip', (req, res) => {
  fetch(`${currentWeather}?zip=${req.params.zip},us&appid=${process.env.WAPI}`)
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      res.send(data);
    })
});
router.get('/forecast/:zip', (req, res) => {
  fetch(`${fiveDayWeather}?zip=${req.params.zip},us&appid${process.env.WAPI}`)
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      res.send(data);
    })
})


export default router;
