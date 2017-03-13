const ob = require('express');
app = ob();
port = process.env.PORT || 8080;

router = require('./app/router.js');

app.use(router);

app.listen(port, ()=>{
	console.log(`Listening on port: ${port}`);
});