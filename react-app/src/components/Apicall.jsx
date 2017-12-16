import React, {
  Component,
} from 'react';
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import ReactJson from 'react-json-view'
import InitialLoad from '../actions/initialLoad';
import InitialLoad2 from '../actions/initialLoad2';
import CoinCard from './CoinCard'
import ExtraCoinCard from './ExtraCoinCard'


// Spinner loads when a user clicks on a country
class Apicall extends Component {
  componentWillMount() {
    //this.props.initialLoad();
    this.props.initialLoad2(this.props.initCoins);
  }
  // componentDidUpdate() {
  //   if (this.props.initPrices.length < 1) {
  //     console.log("<1");
  //     this.props.initialLoad2(this.props.initCoins);
  //   }
  // }

  render() {
    if (this.props.initPrices.length < 1) {
      return (
        <div>
          <ReactJson src={this.props.initCoins} />
        </div>
      )
    } else {
      const allPrices = this.props.initPrices;
      let coinCards = Object.keys(allPrices).map(function(key) {
        console.log(key);
        return (
          <Col sm="3">
            <CoinCard coin={key} params={allPrices[key]}></CoinCard>
          </Col>
        )
      })
      return (
        <div>
          <Container fluid>
            <Row>
              {coinCards}
              <Col sm="3"><ExtraCoinCard></ExtraCoinCard></Col>
            </Row>
          </Container>
        </div>

      )
    }

  }

}

function mapStateToProps(state) {
  return {
    initCoins: state.initData.coins,
    initPrices: state.initPrices.prices,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    initialLoad: InitialLoad,
    initialLoad2: InitialLoad2,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Apicall);