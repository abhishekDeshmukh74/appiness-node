import { IUserRole } from './../interfaces';
import { model, Schema } from 'mongoose';

import { CONSTANTS } from '@constants';
import { userModel } from './users.model';

const userRoleSchema: Schema = new Schema(
    {
        role: {
            type: Schema.Types.String,
            required: true,
            enum: [CONSTANTS.USER_ROLE.ADMIN, CONSTANTS.USER_ROLE.USER]
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: userModel,
            required: true,
        },
    },
    {
        collection: CONSTANTS.DATABASE_COLLECTIONS.USER_ROLE,
        timestamps: {
            createdAt: CONSTANTS.CREATED_AT,
            updatedAt: CONSTANTS.UPDATED_AT,
        },
    },
);

export const userRoleModel = model<IUserRole>('userRoleModel', userRoleSchema);
