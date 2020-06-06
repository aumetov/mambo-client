import { Sizes } from "../consts/sizes";
import { Gender } from "../consts/gender";
import { Colors } from "../consts/colors";

export interface CreateProductDto {
    title: string;
    categories: any[];
    status: string;
    price: number;
    salePrice: number;
    colors: Colors[];
    sizes: Sizes[];
    description: string;
    collection: string;
    productImages: File[];
    sex: Gender;
    shopId: string;
    productThumbnail: string;
}