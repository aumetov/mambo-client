export interface CreateProductDto {
    title: string;
    category: string;
    status: string;
    price: number;
    salePrice: number;
    colors: number[];
    sizes: string[];
    description: string;
    collection: string;
    productImages: string[];
}