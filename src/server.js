// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.static(__dirname + '/dist/fundonotes'));
// app.get('/*', function(req,res) {
// res.sendFile(path.join(__dirname+
// '/dist/fundonotes/src/index.html'));});
//  app.listen(process.env.PORT || 8080);
// // app.listen(process.env.PORT || 3000,);

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/fundonotes'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/fundonotes/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);