import { model, Schema } from 'mongoose';

import { CONSTANTS } from '@constants';
import { ICategory } from '../interfaces';

const categoriesSchema: Schema = new Schema(
    {
        name: {
            type: Schema.Types.String,
            required: true,
            unique: true,
        },
    },
    {
        collection: CONSTANTS.DATABASE_COLLECTIONS.CATEGORY,
        timestamps: {
            createdAt: CONSTANTS.CREATED_AT,
            updatedAt: CONSTANTS.UPDATED_AT,
        },
    },
);

export const categoryModel = model<ICategory>('categoryModel', categoriesSchema);
