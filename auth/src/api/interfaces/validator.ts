import express from 'express';

import { InjectableClass } from '../../core/modules/decorators';

export class Validator extends InjectableClass {
    validateToken: (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
    ) => express.Response | void;
}