var initialstate = {
  coins: ["BTC", "ETH", "LTC"],
}

export default function(state = initialstate, action) {
  switch (action.type) {
    case "INIT_LIST":
      return action.payload;
  }
  return state;
}