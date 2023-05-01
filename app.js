const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/monster-admin-angular'));
console.log(__dirname);

app.get('/*', function(req,res) {
    
res.sendFile('index.html', {root: 'dist/monster-admin-angular/'});
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);