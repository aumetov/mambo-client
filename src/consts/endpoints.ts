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
        static addItemToCart = (id) => base(`/${id}/delete-from-cart`)
        static deleteItemFromCart = (id, productId) => base(`/${id}/delete-from-cart/${productId}`)
    }

    static Auth = class {
        static login = base('auth/login')
    }
}