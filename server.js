var express = require('express');
var moment = require('moment');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/*', function (req, res) {
    
    // Get the url, eliminate the leading /, add spaces
    var input = req.url.substring(1).replace(/%20/g, ' ');
    var result = {
        unix: null,
        natural: null
    };
    
    if (isNaN(input)) {
        var date = new Date(input);
        if (date != 'Invalid Date') {
            result.unix = date.getTime();
            result.natural = moment(date).format('MMMM DD, YYYY');
        }
    } else {
        result.unix = +input;
        result.natural = moment(new Date(0).setUTCSeconds(+input)).format('MMMM DD, YYYY');
    }
    res.end(JSON.stringify(result));
});

app.listen(app.get('port'));
