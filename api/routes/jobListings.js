var express = require('express');
var router = express.Router();

let jobs = {
    1: {
      id: '1',
      Title: 'Software Developer',
      Skills: 'problem solving, coding, computer literacy'
    },
    2: {
      id: '2',
      Title: 'Custodian',
      Skills: 'cleaning, property maintenace',
    },
    3: {
      id: '3',
      Title: 'Math Teacher',
      Skills: 'communication, math',  
    },
  };

router.get('/', function(req, res, next) {
    res.send(Object.values(jobs));
});
router.get('/:id', (req, res) => {
    res.send(jobs[req.params.id]);
  });
  

module.exports = router;
