import { model, Schema } from 'mongoose';

import { CONSTANTS } from '@constants';
import { IUser } from './../interfaces';

const userSchema: Schema = new Schema(
    {
        firstName: {
            type: Schema.Types.String,
            required: true,
        },
        lastName: {
            type: Schema.Types.String,
            required: true,
        },
    },
    {
        collection: CONSTANTS.DATABASE_COLLECTIONS.USER,
        timestamps: {
            createdAt: CONSTANTS.CREATED_AT,
            updatedAt: CONSTANTS.UPDATED_AT,
        },
    },
);

export const userModel = model<IUser>('userModel', userSchema);
