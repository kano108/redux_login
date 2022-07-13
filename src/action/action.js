import { type } from "@testing-library/user-event/dist/type";

export const addRegData =(e) =>{
    return{
        type : "ADD_REG",
        payload :{
            Id:new Date().getTime().toString(),
            Name:e.name,
            Email:e.email,
            Password:e.password,
            Address:e.address

        }
    }
}