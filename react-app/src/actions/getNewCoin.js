import axios from 'axios';
const GetNewCoin = (newCoin, allCoins) => {
  return function(dispatch) {
    var newList = allCoins;
    newList.push(newCoin)
    console.log(newList);
    dispatch({
      type: 'INIT_LIST',
      payload: {
        coins: newList,
      }
    })
  }
}

export default GetNewCoin;