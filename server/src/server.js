import express from 'express';
import path from 'path';
import router from './routes/api.routes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve('../../client/public/')));
app.use('/api', router);

app.get('*', (req, res) => res.sendFile( path.resolve('../../client/public/404.html') ));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));