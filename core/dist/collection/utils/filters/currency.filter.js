export function currency(value, locale) {
    switch (locale) {
        case 'pt-br':
            return currencyPtBr(value);
        default:
            return value;
    }
}
function currencyPtBr(value) {
    if (typeof value === 'string') {
        return `R$ ${Number(value).toFixed(2).replace('.', ',')}`;
    }
    if (typeof value === 'number') {
        return `R$ ${value.toFixed(2).replace('.', ',')}`;
    }
}
//# sourceMappingURL=currency.filter.js.map
