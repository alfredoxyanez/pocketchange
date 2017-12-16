import React, {
  Component
} from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
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
    var coinName = this.props.coin2;
    console.log("thissss" + this.props.coin2);
    let IconA = Icon[coinName + "Alt"];
    if (IconA == null) {
      console.log("FN");
      IconA = Icon["Btc"];

    }
    //{/* <Icon. size={60} style={{position:"absolute", left: "45%"}}/> */}
    if (parseFloat(this.props.params.USD.CHANGEPCT24HOUR) > 5) {
      return (
        <div>
          <Card body outline color="success" onClick={this.removeCard} onMouseEnter={this.flipCard} >
            <CardHeader style={{backgroundColor: '#def0de'}} >
              <div className="clearfix" >
                <div className="float-left" >{this.props.coin}</div>
                <div className="float-right" >{this.props.params.USD.PRICE}</div>
              </div>
            </CardHeader>
            <CardBody>
              <IconA size={60} style={{position:"absolute", left: "45%"}} />
              <div className="clearfix" >
                <div className="float-left" >
                  <p>HIGHDAY</p>
                  <p>LOWDAY</p>
                </div>
                <div className="float-right" >
                  <p>{this.props.params.USD.HIGHDAY}</p>
                  <p>{this.props.params.USD.LOWDAY}</p>
                </div>
              </div>
            </CardBody>
            <small>{this.props.params.USD.LASTUPDATE}</small>
          </Card>
        </div>
      );

    } else if (parseFloat(this.props.params.USD.CHANGEPCT24HOUR) > 0) {
      return (
        <div>
          <Card body outline body onClick={this.removeCard} onMouseEnter={this.flipCard} >
            <CardHeader style={ {backgroundColor: '#e0e0e0'}}>
              <div className="clearfix" >
                <div className="float-left" >{this.props.coin}</div>
                <div className="float-right" >{this.props.params.USD.PRICE}</div>
              </div>
            </CardHeader>
            <CardBody>
              <IconA size={60} style={{position:"absolute", left: "45%"}} />
              <div className="clearfix" >
                <div className="float-left" >
                  <p>HIGHDAY</p>
                  <p>LOWDAY</p>
                </div>
                <div className="float-right" >
                  <p>{this.props.params.USD.HIGHDAY}</p>
                  <p>{this.props.params.USD.LOWDAY}</p>
                </div>
              </div>
            </CardBody>
            <small>{this.props.params.USD.LASTUPDATE}</small>
          </Card>
        </div>
      );

    } else if (parseFloat(this.props.params.USD.CHANGEPCT24HOUR) > -5) {
      return (
        <div>
          <Card body outline color="warning" onClick={this.removeCard} onMouseEnter={this.flipCard} >
            <CardHeader style={{backgroundColor: '#fff2cd'}}>
              <div className="clearfix" >
                <div className="float-left" >{this.props.coin}</div>
                <div className="float-right" >{this.props.params.USD.PRICE}</div>
              </div>
            </CardHeader>
            <CardBody>
              <IconA size={60} style={{position:"absolute", left: "45%"}} />
              <div className="clearfix" >
                <div className="float-left" >
                  <p>HIGHDAY</p>
                  <p>LOWDAY</p>
                </div>
                <div className="float-right" >
                  <p>{this.props.params.USD.HIGHDAY}</p>
                  <p>{this.props.params.USD.LOWDAY}</p>
                </div>
              </div>
            </CardBody>
            <small>{this.props.params.USD.LASTUPDATE}</small>
          </Card>
        </div>
      );

    } else {
      return (
        <div>
          <Card body outline color="danger" onClick={this.removeCard} onMouseEnter={this.flipCard} >
            <CardHeader style={{backgroundColor: '#f7dcdb'}}>
              <div className="clearfix" >
                <div className="float-left" >{this.props.coin}</div>
                <div className="float-right" >{this.props.params.USD.PRICE}</div>
              </div>
            </CardHeader>
            <CardBody>
              <IconA size={60} style={{position:"absolute", left: "45%"}} />
              <div className="clearfix" >
                <div className="float-left" >
                  <p>HIGHDAY</p>
                  <p>LOWDAY</p>
                </div>
                <div className="float-right" >
                  <p>{this.props.params.USD.HIGHDAY}</p>
                  <p>{this.props.params.USD.LOWDAY}</p>
                </div>
              </div>
            </CardBody>
            <small>{this.props.params.USD.LASTUPDATE}</small>
          </Card>
        </div>
      );

    }

  }

}

export default CoinCard;