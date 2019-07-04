import { Product } from './product.model';
export declare class ProductsService {
    private products;
    create(title: string, desc: string, price: number): string;
    all(): Product[];
    get(id: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    update(id: string, title: string, desc: string, price: number): void;
    destroy(id: string): void;
    private find;
}
