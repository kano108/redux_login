const initialData = {
    list:[]
};
 console.log("list",initialData.list)

const ReLogReducer = (state = initialData , action) =>{
    switch(action.type){
        case "ADD_REG":
        const {Id,Name ,Email,Password , Address}=action.payload;// id,name,email,password object banavo tene jagaye data laye to pan chale 
        return {
            ...state,
            list:[
                ...state.list,
                {
                    Id,
                    Name,
                    Email,
                    Password,
                    Address
                }
            ]
        }
        default:return state
   }

}
export default ReLogReducer