import { createContext, useState } from "react";

import { calcBrand, calcPlan, formatMoney, getYearDiff } from "../helpers";

const QuoterContext = createContext()

const QuoterProvider = ({children}) => {

    const [quotation, setQuotation] = useState({
        brand: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [result, setResult] = useState(0)
    const [loading, setLoading] = useState(false)

    const handleChangeQuotation = e => {
        setQuotation({
            ...quotation,
            [e.target.name]: e.target.value
        })
    }

    const quoteInsurance = () => {
        setLoading(true)
        const {brand, year, plan} = quotation
        //base
        let result = 2000
        //year => diff 3% every year
        let diff = getYearDiff(year)
        result -= ((diff * 3) * result) / 100
        //brand => american 15%, european 30%, asian 50%
        result *= calcBrand(brand)
        //plan => basic 20%, complete 50%
        result *= calcPlan(plan)

        result = formatMoney(result)

        setResult(result)
        setTimeout(()=> {
            setLoading(false)
        },2000)
    }

    return (
        <QuoterContext.Provider
            value={{
                quotation,
                error,
                result,
                loading,
                setError,
                handleChangeQuotation,
                quoteInsurance
            }}
        >
            {children}
        </QuoterContext.Provider>
    )
}

export {
    QuoterProvider
}

export default QuoterContext