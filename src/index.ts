import { HistogramController } from './histogramController';
import { Request, Response } from 'express';
import express from 'express';

const app = express();
const port = 8080;

app.get( '/:fieldName/histogram', function (request: Request, response: Response) {
	 new HistogramController().histogram(request.params.fieldName, response);
} );


app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});