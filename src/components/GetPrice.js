
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class GetPrice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prices: [],
			stocks : ['MSFT', 'FB', 'AAPL'], //query to database to find what stocks i have
			shares : [1, 10, 100], //query to database to find how many shares i have of each stock
			assets : []
    };

		
  }

  componentDidMount() {
		
		this.GetPrices();
		this.TotalPrice();

	}

	GetPrices = () => {
		this.state.stocks.forEach((id) => {

		    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+id+'&interval=1min&apikey=P77BVDEGXM42WOOL&datatype=json')
		      .then(res => {
		      	// console.log(res);
		      	// console.log(res["Meta Data"]);
		      	return res.json();
		      }).then((jsonres) => {
		      	// console.log(jsonres);
		      	// console.log(jsonres[Object.keys(jsonres)[0]]);
		      	// console.log(jsonres["Time Series (1min)"]);
		      	console.log(jsonres["Time Series (1min)"][Object.keys(jsonres["Time Series (1min)"])[0]]["4. close"]);
		      	// console.log(first(jsonres["Time Series (1min)"])["4. close"]);
						
						this.setState({prices: this.state.prices.concat([jsonres["Time Series (1min)"][Object.keys(jsonres["Time Series (1min)"])[0]]["4. close"]])});
		      	// this.setState({prices: jsonres["Time Series (1min)"][Object.keys(jsonres["Time Series (1min)"])[0]]["4. close"]});
		      });
		   
		
		});

		
			// this.state.stocks.forEach((id) => {
			// 	f(id);

			// });
	}
  
	TotalPrice = () => {
		for (var i = 0; i <= this.state.stocks.length - 1; i++) {
			console.log(this.state.shares[i], this.state.prices[i]);
			this.setState({assets: this.state.assets.concat(this.state.shares[i] * this.state.prices[i])});
		}
	}

  render() {
    return (
      <div>
				
				<div className="col-md-4 col-cm-6 col-xs-12">{this.state.prices}</div>
				<div className="col-md-4 col-cm-6 col-xs-12">{this.state.assets}</div>

      </div>
    );
  }
}


export default GetPrice;
// ReactDOM.render(
//   <GetPrice />,
//   document.getElementById('root')
// );