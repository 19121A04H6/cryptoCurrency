import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currList: {}, isLoading: true}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      ' https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      currencyLogo: eachData.currency_logo,
    }))

    this.setState({currList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, currList} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="list-conatiner">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              className="curr-image"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <ul>
              <li className="items-container">
                <p className="currency">Coin Type</p>
                <div className="logo-currency-container">
                  <p className="currency">USD</p>
                  <p className="currency">EURO</p>
                </div>
              </li>
              {currList.map(eachItem => (
                <CryptocurrencyItem key={eachItem.id} itemDetails={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
