import React, {
  Component
} from 'react';
import {
  Input,
  InputGroup,
  InputGroupButton,
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardSubtitle,
  Button
} from 'reactstrap';
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux'
import "bootstrap/dist/css/bootstrap.css";
import GetNewCoin from '../actions/getNewCoin'

class ExtraCoinCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  getNewCoin = () => {
    console.log(this.state.value);
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }


  render() {
    return (
      <div>
        <Card body outline color="primary">
          <CardHeader>Add Coin</CardHeader>
          <CardBody>
            <InputGroup>
              <Input placeholder="coin name" value={this.state.value} onChange={this.handleChange} />
              <InputGroupButton><Button color="primary" onClick={this.getNewCoin}> ADD</Button></InputGroupButton>
            </InputGroup>
          </CardBody>
        </Card>
      </div>
    );
  }

}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getNewCoin: GetNewCoin,
  }, dispatch)
}

export default connect(matchDispatchToProps)(ExtraCoinCard);