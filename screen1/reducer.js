import { createReducer } from "@reduxjs/toolkit";
import { addItem, removeItem } from "./action";
// khoi tao trang thai
const initState = {items: []};
// tao reducer(khi click se goi den)
const cartReducer = createReducer(initState, builder => {

    builder.addCase(addItem, (state,action) => {
        // xu ly khi da ton tai san pham trong gio hang
        const tonTaiItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
        );
        // xu ly khi chua co san pham trong gio hang
        if(tonTaiItemIndex !== -1){
            state.items[tonTaiItemIndex].quantity++;
        }else{
            state.items.push({...action.payload, quantity: 1});
        }
    })
    .addCase(removeItem, (state,action) => {
        const tonTaiItemIndex = state.items.findIndex(
            item => item.id === action.payload.id
        );

        if(tonTaiItemIndex !== -1){
            state.items[tonTaiItemIndex].quantity--;
        }
        // so luong bang 0 thi xoa khoi gio hang
        if(state.items[tonTaiItemIndex].quantity == 0){
            state.items.splice(tonTaiItemIndex,1)
        }
    });
});

export default cartReducer;