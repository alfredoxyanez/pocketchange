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
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import ReactJson from 'react-json-view'
import InitialLoad from '../actions/initialLoad';
import InitialLoad2 from '../actions/initialLoad2';
import CoinCard from './CoinCard'
import ExtraCoinCard from './ExtraCoinCard'


// Spinner loads when a user clicks on a country
class Apicall extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  componentWillMount() {
    this.props.initialLoad2(this.props.initCoins);
  }
  componentDidMount() {
    this.interval = setInterval(() => this.props.initialLoad2(this.props.initCoins), 15000);
  }

  render() {
    // console.log(this.state.time);
    if (this.props.initPrices.length < 1) {
      return (
        <div>
          <ReactJson src={this.props.initCoins} />
        </div>
      )
    } else {
      const allPrices = this.props.initPrices;
      let coinCards = Object.keys(allPrices).map(function(name) {
        var key2 = name[0] + name.substring(1).toLowerCase()
        return (
          <Col key={name} sm="3">
            <CoinCard  coin={name} coin2 ={key2} params={allPrices[name]}></CoinCard>
          </Col>
        )
      })
      return (
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">Pocket Change</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="#">Nothing1</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Nothing2</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
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