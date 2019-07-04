import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    store(title: string, description: string, price: number): any;
    index(): import("./product.model").Product[];
    show(id: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    update(id: string, title: string, description: string, price: number): any;
    destroy(id: string): any;
}
