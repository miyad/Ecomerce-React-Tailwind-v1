export const Reducer = (state, action) => {
  const { type, id } = action;
  let { totalCount, cart } = state;
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
    default:
      console.log("this is default case");
      console.log("lets see the state = ", state);
      return state;
  }
};
