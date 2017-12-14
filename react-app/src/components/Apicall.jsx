import React, {
  Component,
} from 'react';



// Spinner loads when a user clicks on a country
class Apicall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }
  componentDidMount() {
    return fetch('/users')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          message: responseJson.user1
        });
      })
  }

  render() {
    return (
      <div>
        <b>{this.state.message}</b>
     </div>

    )
  }
}





export default Apicall;