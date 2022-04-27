function formatThaiCurrency(value) {
  return new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "THB",
    currencyDisplay: "narrowSymbol",
  }).format(value);
}

export { formatThaiCurrency };
