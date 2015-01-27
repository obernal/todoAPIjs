var express = require('express');
var router = express.Router();

var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "myapp",
streams: [
{
  level: 'info',
  stream: process.stdout            // log INFO and above to stdout
},
{
  level: 'info',
  path: 'events.log'  // log ERROR and above to a file
}
]});

/* POST /events */
router.post('/', function(req, res, next) {
  log.info({req: bunyan.stdSerializers.req(req) , data: req.body}, "request");
  res.json({status:"ok"});
});

module.exports = router;
