import { model, Schema } from 'mongoose';

import { CONSTANTS } from '@constants';
import { ICategory } from '../interfaces';
import { categoryModel } from './categories.model';

const productsSchema: Schema = new Schema(
    {
        name: {
            type: Schema.Types.String,
            required: true,
            unique: true,
        },
        categoryId: {
            type: Schema.Types.ObjectId,
            ref: categoryModel,
            required: true,
        },
    },
    {
        collection: CONSTANTS.DATABASE_COLLECTIONS.PRODUCT,
        timestamps: {
            createdAt: CONSTANTS.CREATED_AT,
            updatedAt: CONSTANTS.UPDATED_AT,
        },
    },
);

export const productModel = model<ICategory>('productModel', productsSchema);
