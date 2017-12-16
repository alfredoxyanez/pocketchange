import axios from 'axios';
const InitialLoad2 = (coinList) => {
  return function(dispatch) {
    console.log("IN IL2");
    console.log(coinList);
    var url_string = ''
    for (var i = 0; i < coinList.length; i++) {
      url_string += coinList[i] + ','
    }
    console.log(url_string);
    axios.get(window.location.href + '/coins/' + url_string)
      .catch(err => {
        alert('There was an error trying to do the initial fetch')
      })
      .then(response => {
        console.log(response.data);
        dispatch({
          type: 'INIT_PRICES',
          payload: {
            prices: response.data,
          }
        })
      })
  }
}
export default InitialLoad2;