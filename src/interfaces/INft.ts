import { IUser } from "./IUser";

export interface INft {
  id: string | number;
  name: string;
  imageUrl: string;
  price: number;
  create?: Object;
  owner?: IUser;
  user?: string;
}
