const express = require('express');
const app = express();
const port = 3003;
const routes = require('./routes/routes.js');

// routes
app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
