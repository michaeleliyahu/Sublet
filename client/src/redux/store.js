import {configureStore} from "@reduxjs/toolkit"
import cartreducer from "./cartRedux"
import userReducer from "./userRedux"
import newUserRedux from "./newUserRedux"
import newProductRedux from "./addProductRedux"


export default configureStore({
    reducer:{
        cart:cartreducer,
        user:userReducer, 
        newUser:newUserRedux,
        newProduct:newProductRedux
    },
});
