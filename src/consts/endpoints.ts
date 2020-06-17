import { configuration } from "./configurations";

const base = (rest: string) => `${configuration.remoteApi}/${rest}/`;

export default class Endpoints {
    static Product = class {
        static getAll = base('product');
    }

    static Categories = class {
        static categories = base('categories')
    }

    static Users = class {
        static register = base('user/register')
    }

    static Auth = class {
        static login = base('auth/login')
    }
}