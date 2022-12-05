import { cartReducer } from "./cartReducer";
import { customerDataReducer } from "./customerData";
import { productDetailsReducer } from "./productDetailsReducer";
import { socketReducer } from "./socketReducer";
import { sortReducer } from "./sortReducer";
import { userReducer } from "./userReducer";
import { viewReducer } from "./viewReducer";

import { IAction, IInitialState } from "../context_types";




export const rootReducer = ({ cart,sort,customerData,productDetails,view,user,socket }: IInitialState,action: IAction) => ({
    cart: cartReducer(cart,action),
    sort: sortReducer(sort,action),
    customerData: customerDataReducer(customerData,action),
    productDetails: productDetailsReducer(productDetails,action),
    view: viewReducer(view,action),
    user: userReducer(user,action),
    socket: socketReducer(socket,action)
})