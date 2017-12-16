var initialstate = {
  prices: {},
}

export default function(state = initialstate, action) {
  switch (action.type) {
    case "INIT_PRICES":
      return action.payload;
  }
  return state;

}