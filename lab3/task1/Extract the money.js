function extractCurrencyValue (str) {
    return +str.slice(1);
}
extractCurrencyValue("$120");