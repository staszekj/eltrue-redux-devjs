"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const user_actions_ctrl_1 = require("./controllers/user-actions.ctrl");

class Routes {
  constructor(app) {
    this.userActionsCtrl = new user_actions_ctrl_1.default();
    app.route("/api/user-actions").get(this.userActionsCtrl.getUserActions);
  }
}

exports.default = Routes;
//# sourceMappingURL=routes.js.map
