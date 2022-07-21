export function getYearDiff(year){
    return new Date().getFullYear() - Number(year)
}

export function calcBrand(brand) {
    let increase
    switch (brand) {
        case '1':
            increase = 1.30
            break;
        case '2':
            increase = 1.15
            break;
            case '2':
        increase = 1.05
        break;
        default:
            break;
    }
    return increase
}

export function calcPlan(plan){
    return plan === '1' ? 1.20 : 1.5
}

export function formatMoney(amount){
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}