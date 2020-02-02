import { Document, Schema } from 'mongoose';

export interface ICategory extends Document {
    _id: Schema.Types.ObjectId;
    title: string;
}

export interface IProduct extends Document {
    _id: Schema.Types.ObjectId;
    categoryId: Schema.Types.ObjectId;
}

export interface IUserRole extends Document {
    _id: Schema.Types.ObjectId;
    role: string;
    userId: Schema.Types.ObjectId;
}

export interface IUser extends Document {
    _id: Schema.Types.ObjectId;
    firstName: string;
    lastName: string;
}
