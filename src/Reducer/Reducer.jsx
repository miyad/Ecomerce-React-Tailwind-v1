export const Reducer = (state, action) => {
  const { type, id } = action;
  const {data} = action
  let { totalCount, cart } = state;

  const getTotalCount = ()=>{
    let sum =0;
    cart.map(e=>sum+=Number(e.amount));
    return sum;
  }

  switch (type) {
    case "add":
      cart.find((obj) => obj.id === id)
        ? (cart.find((obj) => obj.id === id).amount+=1)
        : cart.push({id,amount:1});
        console.log("see the cart = ",cart);
      return { totalCount: totalCount + 1, cart };
    case "delete":
        if(cart.find(obj=>obj.id === id).amount===1)
            return {totalCount:totalCount-1,cart:cart.filter(obj=>obj.id != id)}
        cart.find(obj=>obj.id === id).amount -= 1;
        console.log("deleted cart = ",cart);
        return {totalCount:totalCount-1,cart};
    case "removeItem":
      console.log("this is remove item");
         return {totalCount:totalCount-data.amount,cart:cart.filter(e=>e.id!=data.id)}
    case "set":
      cart.find((obj) => obj.id === data.id)
        ? (cart.find((obj) => obj.id === data.id).amount=data.amount)
        : cart.push({id,amount:data.amount});
        console.log("see the cart = ",cart);
      return { totalCount: getTotalCount(), cart };
    case "reset":
      return {totalCount:0,cart:[]}
    default:
      console.log("this is default case");
      console.log("lets see the state = ", state);
      return state;
  }
};
