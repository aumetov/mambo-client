export interface CreateProductDto {
    title: string;
    categories: number[];
    status: string;
    price: number;
    salePrice: number;
    colors: number[];
    sizes: string[];
    description: string;
    collection: string;
    productImages: File[];
    sex: string;
    shopId: string;
    productThumbnail: string;
}