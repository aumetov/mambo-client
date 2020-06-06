import { Sizes } from "../constants/sizes";
import { Gender } from "../constants/gender";
import { Colors } from "../constants/colors";

export interface CreateProductDto {
    title: string;
    categories: number[];
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