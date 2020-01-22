import { Router } from 'express';
import fetch from 'node-fetch';
const router = Router();

router.get('/:layer/:z/:x/:y', (req, res) => {
  fetch(`https://maps.owm.io/map/${req.params.layer}/${req.params.z}/${req.params.x}/${req.params.y}.png?appid=${process.env.WAPI}`)
    .then((response) => {
      return response.json();
    }).then((data) => {
      res.send(data);
    })
})
export default router;