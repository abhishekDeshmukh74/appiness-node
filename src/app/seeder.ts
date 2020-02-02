import { categoryModel } from './models/categories.model';
import { productModel } from './models/products.model';

// This class is responsible to insert masterData in collections
export class SeedDB {

    constructor() {
        console.log('The seeder script has started!');
        this.seedData();
    }

    private async seedData() {
        const products = [
            {
                category: 'Appliances',
                product: 'Light bulb'
            },
            {
                category: 'Appliances',
                product: 'Oven'
            },
            {
                category: 'Furniture',
                product: 'Table'
            },
            {
                category: 'Furniture',
                product: 'chair'
            }
        ];
        const uniqueCategories = [...new Set(products.map((category) => category.category))];

        for (const category of uniqueCategories) {
            const createdCategory = await categoryModel.create({
                name: category
            });

            const productsUnderCurrentCategory =
                products.filter((products) => products.category === category)
                    .map((products) => products.product);

            for (const product of productsUnderCurrentCategory) {

                const createdProduct = await productModel.create({
                    name: product,
                    categoryId: createdCategory._id
                });
            }
        }

        console.log('Seeding finished');
    }
}
