const initialData = {
    list:[]
}
const ReLogReducer = (state=initialData , action) =>{
    switch(action.type){
        case "ADD_REG":
        const {Id,Name,Email,Password,Address}=action.payload;
        return {
            ...state,
            list:[
                ...state.list,
                {
                    Id:Id,
                    Name:Name,
                    Email:Email,
                    Password:Password,
                    Address:Address
                }
            ]
        }
        default:return state
   }

}
export default ReLogReducer