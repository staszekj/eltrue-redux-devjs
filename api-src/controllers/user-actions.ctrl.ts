import {NextFunction, Request, Response} from 'express';

export default class UserActionsCtrl {

    constructor() {
    }

    getUserActions(req: Request, res: Response, next: NextFunction) {
        res.json({status: 'OK'});
    }

}
