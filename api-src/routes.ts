import {Application} from "express";
import UserActionsCtrl from "./controllers/user-actions.ctrl";

export default class Routes {

    userActionsCtrl = new UserActionsCtrl();

    constructor(app: Application) {
        app.route("/api/user-actions").get(this.userActionsCtrl.getUserActions);
    }
}
