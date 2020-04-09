import IRead from '../interfaces/Read';
import IWrite = require("../interfaces/Write");
import { Document, Model, Types } from "mongoose";

class DaoBase<T extends Document> implements IRead<T>, IWrite<T> {

    protected _model: Model<T>;

    constructor(schemaModel: Model<T>) {
        this._model = schemaModel;
    }

    create(item: T, callback: (error: Error, result: any) => void): void {
        this._model.create(item, callback);
    }

    retrieve(callback: (error: Error, result: Document[]) => void): void {
        this._model.find({}, callback);
    }

    update(_id: string, item: T, callback: (error: Error, result: any) => void): void {
        this._model.findByIdAndUpdate({ _id: Types.ObjectId(_id) }, { $set: item }, { new: true }, callback);
    }

    delete(_id: string, callback: (error: Error, result: any) => void): void {
        this._model.findByIdAndRemove({ _id: Types.ObjectId(_id) }, (err: any) => callback(err, null));
    }

    findById(_id: string, callback: (error: Error, result: T) => void): void {
        this._model.findById(_id, callback);
    }
}

export = DaoBase;
