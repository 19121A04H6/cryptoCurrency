import './index.css'

const CryptocurrencyItem = props => {
  const {itemDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = itemDetails

  return (
    <li className="items-container">
      <div className="logo-currency-container">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="currency">{currencyName}</p>
      </div>
      <div className="logo-currency-container">
        <p className="currency">{usdValue}</p>
        <p className="currency">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
