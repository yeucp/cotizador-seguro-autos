import useQuoter from "../hooks/useQuoter";
import { BRANDS, PLANS } from '../constants'
import { useMemo, useRef } from "react";

const Result = () => {

    const {result, quotation} = useQuoter()

    const {brand, year, plan} = quotation

    const currentBrand = useMemo(() => 
        BRANDS.find(item => item.id == Number(brand))
    , [result])

    const currentPlan = useMemo(()=> 
        PLANS.find(item => item.id == Number(plan))
    , [result])

    const yearRef = useRef(year)

    if(result === 0){
        return null
    }

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gary-600 font-black text-3xl">Resumen</h2>
            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {currentBrand.name}
            </p> 
            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {currentPlan.name}
            </p> 
            <p className="my-2">
                <span className="font-bold">Año del auto: </span>
                {yearRef.current}
            </p>

            <p className="my-2 text-2xl">
                <span className="font-bold">Total: </span>
                {result}
            </p>
        </div>
    );
};

export default Result;