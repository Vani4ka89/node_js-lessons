import { model, Schema, Types } from "mongoose";

import { EActionTokenTypes } from "../enums/action-token-type";
import { User } from "./User.mode";

const actionSchema = new Schema({
  actionToken: {
    type: String,
    required: true,
  },
  tokenType: {
    type: String,
    required: true,
    enum: EActionTokenTypes,
  },
  _userId: {
    type: Types.ObjectId,
    required: true,
    ref: User,
  },
});

export const Action = model("action", actionSchema);
