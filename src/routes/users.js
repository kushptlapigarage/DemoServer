/* @flow */

import { Router } from 'express';
import { users } from '../models';

const router = new Router();

router.get('/', (req, res) => {
  console.log('Getting ...');
  users
    .findAll()
    .then(out => {
      res.status(200).send(out);
    })
    .catch(e => {
      res.status(500).send(e);
    });
});

// Allows to fetch the last login error(s) (which is usefull for single-page apps)

export default router;
