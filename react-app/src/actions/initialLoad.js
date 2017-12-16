import axios from 'axios';
const InitialLoad = () => {
  return function(dispatch) {
    axios.get(window.location.href + '/coins')
      .catch(err => {
        alert('There was an error trying to do the initial fetch')
      })
      .then(response => {
        var coins = []
        for (var i = 0; i < response.data.length; i++) {
          coins.push(response.data[i].symbol)
        }
        console.log(coins);
        dispatch({
          type: 'INIT_LIST',
          payload: {
            coins: coins,
          }
        })
      })
  }
}

export default InitialLoad;