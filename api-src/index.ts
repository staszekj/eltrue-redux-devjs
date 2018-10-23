import * as express from "express";
import {Application} from "express";
import * as bodyParser from "body-parser";
import {unCoughtErrorHandler} from './handlers/errorHandler';
import Routes from "./routes";

//see https://github.com/nmanikiran/rest-api-node-typescript

const app: Application = express();

app.listen(9000, "localhost", function (err: any) {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(unCoughtErrorHandler);

    var routes: Routes = new Routes(app);
});
