import { categoryModel } from './../models/categories.model';
import { productModel } from './../models/products.model';
import { userRoleModel } from './../models/user-roles.model';
import { ICategory, IUser, IUserRole } from './../interfaces';
import { userModel } from './../models/users.model';
import { Request, Response } from 'express';

import { CONSTANTS } from '@constants';
import { errorHandler } from '../../config/error/error-handler';

class TaskController {

    async task1(req: Request, res: Response) {
        try {

            // get the users in our user table
            const users: IUser[] = await userModel.find();

            const createdUser: IUser = await userModel.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            });

            // If no users are there in user table create user as an admin else create normal user
            let createdUserRole: IUserRole;
            if (users.length === 0) {
                createdUserRole = await userRoleModel.create({
                    role: CONSTANTS.USER_ROLE.ADMIN,
                    userId: createdUser._id,
                });
            } else {
                createdUserRole = await userRoleModel.create({
                    role: CONSTANTS.USER_ROLE.USER,
                    userId: createdUser._id,
                });
            }

            res.status(CONSTANTS.STATUS.OK).json({
                message: `user created of type ${createdUserRole.role}`,
                createdUserRole,
            });

        } catch (e) {
            errorHandler.handleException('task1', e, res);
        }
    }

    async task2(req: Request, res: Response) {
        try {

            // Delete products containing input category
            const productsToBeDeleted = await productModel.aggregate()
                .lookup({
                    from: 'category',
                    localField: 'categoryId',
                    foreignField: '_id',
                    as: 'category',
                })
                .unwind({
                    path: '$category',
                    preserveNullAndEmptyArrays: false
                })
                .match({
                    'category.name': req.body.category,
                });

            const chunkIds = productsToBeDeleted.map((chunk) => chunk._id);
            const deletedProducts = await productModel.remove({ _id: { '$in': chunkIds } });

            // Delete input category
            const deletedCategories = await categoryModel.deleteMany({
                name: req.body.category
            });

            res.status(CONSTANTS.STATUS.OK).json({
                message: 'Following category and products are deleted',
                deletedCategory: req.body.category,
                deletedProducts: productsToBeDeleted,
            });

        } catch (e) {
            errorHandler.handleException('task2', e, res);
        }
    }

    async task3(req: Request, res: Response) {
        try {

            const categories = await productModel.aggregate()
                .lookup({
                    from: 'category',
                    localField: 'categoryId',
                    foreignField: '_id',
                    as: 'category',
                })
                .unwind({
                    path: '$category',
                    preserveNullAndEmptyArrays: false
                })
                .group({
                    _id: '$category._id',
                    category: { '$first': '$name' },
                    count: { $sum: 1 }
                });

            res.status(CONSTANTS.STATUS.OK).json({
                message: 'category and products are listed below',
                categories,
            });

        } catch (e) {
            errorHandler.handleException('task3', e, res);
        }
    }
}

export const taskController = new TaskController();
