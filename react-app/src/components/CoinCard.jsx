import React, {
  Component
} from 'react';
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import * as Icon from 'react-cryptocoins';
import "bootstrap/dist/css/bootstrap.css";


class CoinCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const coin_1 = this.props;
    console.log(coin_1);
    if (parseFloat(this.props.params.USD.CHANGEPCT24HOUR) > 5) {
      return (
        <div>
          <Card body outline color="success">
            <CardHeader> {this.props.coin}</CardHeader>
            <CardBody>
              <CardSubtitle>{this.props.params.USD.PRICE}</CardSubtitle>
              <CardText>{this.props.params.USD.MARKET}  </CardText>
            </CardBody>
          </Card>
        </div>
      );

    } else if (parseFloat(this.props.params.USD.CHANGEPCT24HOUR) > 0) {
      return (
        <div>
          <Card body outline body >
            <CardHeader>{this.props.coin}</CardHeader>
            <CardBody>
              <CardSubtitle>{this.props.params.USD.PRICE}</CardSubtitle>
              <CardText>{this.props.params.USD.MARKET}  </CardText>
            </CardBody>
          </Card>
        </div>
      );

    } else if (parseFloat(this.props.params.USD.CHANGEPCT24HOUR) > -5) {
      return (
        <div>
          <Card body outline color="warning">
            <CardHeader>{this.props.coin}</CardHeader>
            <CardBody>
              <CardSubtitle>{this.props.params.USD.PRICE}</CardSubtitle>
              <CardText>{this.props.params.USD.MARKET}  </CardText>
            </CardBody>
          </Card>
        </div>
      );

    } else {
      return (
        <div>
          <Card body outline color="danger">
            <CardHeader>{this.props.coin}</CardHeader>
            <CardBody>
              <CardSubtitle>{this.props.params.USD.PRICE}</CardSubtitle>
              <CardText>{this.props.params.USD.MARKET}  </CardText>
            </CardBody>
          </Card>
        </div>
      );

    }

  }

}

export default CoinCard;