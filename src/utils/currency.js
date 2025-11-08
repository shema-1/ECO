// Exchange rate: 1 USD = ~1230 RWF (approximate)
const USD_TO_RWF = 1230;

export function convertToRWF(usdPrice) {
    return Math.round(usdPrice * USD_TO_RWF);
}

export function formatRWF(amount) {
    return new Intl.NumberFormat('rw-RW', {
        style: 'currency',
        currency: 'RWF',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}