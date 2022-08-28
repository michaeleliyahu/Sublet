import {configureStore} from "@reduxjs/toolkit"
import wishlistreducer from "./WishLIstRedux"
export default configureStore({
    reducer:{
        wishlist:wishlistreducer,
    },
});
