const initialData = {
    list:[]
};

const ReLogReducer = (state = initialData , action) =>{
    switch(action.type){
        case "ADD_REG":
        console.log("action.payload",action.payload);
        console.log("state",state);
        const {Id,Name ,Email,Password, Address}=action.payload;// id,name,email,password object banavo tene jagaye data laye to pan chale 
        return {
            ...state,
            list:[
                state.list,
                 //...state.list,
                {
                    Id,
                    Name,
                    Email,
                    Password,
                    Address
                }
            ]
        }
        // case "ADD_LOGIN":
        //     const data1= action.payload
        //     console.log("action.payload",action.payload);
        //     const login_sub = initialData.list.find((elem)=>elem.Email ===  data1.email && elem.Password === data1.password)
        //     console.log("login_sub",login_sub)  
            
        //     return{

        // }
        default:return state
   }

}
export default ReLogReducer