export const Reducer = (state,action)=>{
    const {products} = action;
    switch(action.type){
        case "initialize": //whenever products changes this will update the state 
            return {products}
        case "add":
            console.log("this is add");
            return;//or break
        case "delete":
            console.log("this is delete");
            return;//or break
        default:
            console.log("this is default case");
            console.log("lets see the state = ",state);
            return state;
    }
}