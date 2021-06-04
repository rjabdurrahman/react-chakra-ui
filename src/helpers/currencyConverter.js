function currencyConverter(val) {
    return (Number(val)).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}

export default currencyConverter;