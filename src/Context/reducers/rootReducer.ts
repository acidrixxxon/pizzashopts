import { IAction, IInitialState } from "../context_types";
import { cartReducer } from "./cartReducer";
import { customerDataReducer } from "./customerData";
import { productDetailsReducer } from "./productDetailsReducer";
import { sortReducer } from "./sortReducer";
import { viewReducer } from "./viewReducer";




export const rootReducer = ({ cart,sort,customerData,productDetails,view }: IInitialState,action: IAction) => ({
    cart: cartReducer(cart,action),
    sort: sortReducer(sort,action),
    customerData: customerDataReducer(customerData,action),
    productDetails: productDetailsReducer(productDetails,action),
    view: viewReducer(view,action)
})