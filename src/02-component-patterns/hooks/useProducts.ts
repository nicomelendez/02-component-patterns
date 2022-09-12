import { useEffect, useState } from "react";
import { Product, onChangeArgs} from "../interfaces/interfaces";

interface useProductsArgs{
    product:Product;
    onChange?: (args: onChangeArgs) => void;
    valueCard?:number;
}

export const useProducts = ( {onChange, product, valueCard = 0}:useProductsArgs) => {

    const [counter,setCounter] = useState(valueCard);
    
    const increaseBy = (value:number) => {
        
        const newValue = Math.max(counter + value, 0)
        
        setCounter( newValue );

        onChange && onChange({count: newValue, product});
    }
    
    useEffect(()=>{
        setCounter(valueCard)
    },[valueCard])

    return{
        counter,
        increaseBy
    }
}
