"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const product_model_1 = require("./product.model");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [];
    }
    create(title, desc, price) {
        const id = Math.floor(Math.random() * 1000).toString();
        const newProduct = new product_model_1.Product(id, title, desc, price);
        this.products.push(newProduct);
        return id;
    }
    all() {
        return [...this.products];
    }
    get(id) {
        const [product, _] = this.find(id);
        return Object.assign({}, product);
    }
    update(id, title, desc, price) {
        const [product, index] = this.find(id);
        const updatedProduct = Object.assign({}, product);
        updatedProduct.title = title ? title : updatedProduct.title;
        updatedProduct.description = desc ? desc : updatedProduct.description;
        updatedProduct.price = price ? price : updatedProduct.price;
        this.products[index] = updatedProduct;
    }
    destroy(id) {
        const [_, index] = this.find(id);
        this.products.splice(index, 1);
    }
    find(id) {
        const index = this.products.findIndex(product => product.id === id);
        const product = this.products[index];
        if (!product) {
            throw new common_1.NotFoundException('Could not find product');
        }
        return [product, index];
    }
};
ProductsService = __decorate([
    common_1.Injectable()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map