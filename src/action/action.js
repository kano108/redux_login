
export const addRegData = (data) => {
  return {
    type: "ADD_REG",
      payload: {
            Id: new Date().getTime().toString(),
            Name:data.name,
            Email:data.email,
            Password:data.password,
            Address:data.address
            
            // Email:data.email,
            // Password:data.password,
            // Address:data.address
        },
    
  };
}