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
  removeCard = (event) => {
    console.log(this.props.coin);
  }
  flipCard = (event) => {
    console.log(this.props.coin);
  }

  render() {
    // const coin_1 = this.props;
    // console.log(coin_1);
    if (parseFloat(this.props.params.USD.CHANGEPCT24HOUR) > 5) {
      return (
        <div>
          <Card body outline color="success" onClick={this.removeCard} onMouseEnter={this.flipCard} >
            <CardHeader style={{backgroundColor: '#def0de'}} >
              <div className="clearfix" >
                <b className="float-left" >{this.props.coin}</b>
                <b className="float-right" >{this.props.params.USD.PRICE}</b>
              </div>

            </CardHeader>
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
          <Card body outline body onClick={this.removeCard} onMouseEnter={this.flipCard} >
            <CardHeader style={ {backgroundColor: '#e0e0e0'}}>
              <div className="clearfix" >
                <b className="float-left" >{this.props.coin}</b>
                <b className="float-right" >{this.props.params.USD.PRICE}</b>
              </div>
            </CardHeader>
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
          <Card body outline color="warning" onClick={this.removeCard} onMouseEnter={this.flipCard} >
            <CardHeader style={{backgroundColor: '#fff2cd'}}>
              <div className="clearfix" >
                <b className="float-left" >{this.props.coin}</b>
                <b className="float-right" >{this.props.params.USD.PRICE}</b>
              </div>
            </CardHeader>
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
          <Card body outline color="danger" onClick={this.removeCard} onMouseEnter={this.flipCard} >
            <CardHeader style={{backgroundColor: '#f7dcdb'}}>
              <div className="clearfix" >
                <b className="float-left" >{this.props.coin}</b>
                <b className="float-right" >{this.props.params.USD.PRICE}</b>
              </div>
            </CardHeader>
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