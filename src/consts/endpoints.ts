import { configuration } from "./configurations";

const base = (rest: string) => `${configuration.remoteApi}/${rest}/`;

export default class Endpoints {
    static Product = class {
        static getAll = base('product');
    }

    static Categories = class {
        static categories = base('categories')
    }
}