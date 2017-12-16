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
import InitialLoad2 from '../actions/initialLoad2';

class ExtraCoinCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  getNewCoin = () => {
    this.props.getNewCoin(this.state.value, this.props.initCoins);
    this.props.initialLoad2(this.props.initCoins);
    this.setState({
      value: ''
    });
  }
  handleChange = (event) => {
    var newstr = event.target.value.replace(/ +?/g, '').toUpperCase();
    this.setState({
      value: newstr
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

function mapStateToProps(state) {
  return {
    initCoins: state.initData.coins
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getNewCoin: GetNewCoin,
    initialLoad2: InitialLoad2,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ExtraCoinCard);