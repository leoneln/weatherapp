import { Router } from 'express';
import fetch from 'node-fetch';
const router = Router();

const currentWeather = 'https://api.openweathermap.org/data/2.5/weather';
const fiveDayWeather = 'https://api.openweathermap.org/data/2.5/forecast';

router.get('/current/:cityId', (req, res) => {
  fetch(`${currentWeather}?id=${req.params.cityId}&appid=${process.env.WAPI}`)
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      res.send(data);
    });
});

router.get('/forecast/:cityId', (req, res) => {
  fetch(`${fiveDayWeather}?id=${req.params.cityId}&appid=${process.env.WAPI}`)
    .then((response) => {
      return response.json();
    }).then((data) => {
      res.send(data);
    })
})

export default router;