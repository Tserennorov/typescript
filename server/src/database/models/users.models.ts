import { Model, Schema, model, models } from "mongoose";

export type UsersModelType = {
  _id: Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

const UserSchema = new Schema<UsersModelType>({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: { type: String, required: false },
  createdAt: { type: Date, default: Date.now, required: true, immutable: true },
  updatedAt: { type: Date, default: Date.now, required: true },
});

export const UsersModel: Model<UsersModelType> =
  models["Users"] || model<UsersModelType>("Users", UserSchema);
