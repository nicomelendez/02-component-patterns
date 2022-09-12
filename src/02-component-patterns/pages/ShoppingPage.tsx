import {useState} from 'react'
import { ProductCard,ProductImage,ProductTitle,ProductButtons} from "../components"
import { Product } from "../interfaces/interfaces"
import '../styles/custom-styles.css'

const product1 = {
    id:'1',
    title:'Coffee Mug',
    img:'./coffee-mug.png'
}

const product2 = {
    id:'2',
    title:'Coffee Meme',
    img:'./coffee-mug2.png'
}

const products:Product[] = [product1,product2]

interface ProductInCart extends Product{
    count:number
}

export const ShoppingPage = () => {

    const [ shoopingCart, setShoppingCart ] = useState<{ [key:string]:ProductInCart }>({});
    
    const onProductCountChange = ({count, product}: {count:number, product:Product}) => {
        
        setShoppingCart(oldShoppingCard=>{

            if(count === 0){
                
                const { [product.id]: toDelete, ...rest } = oldShoppingCard;
                return rest;
            }

            return {
                ...oldShoppingCard,
                [product.id]:{...product, count}
            }
        })
        
        console.log(shoopingCart)
    }

    return (
        <div>
            <h2>ShoppingPage</h2>
            <hr></hr>
            <div style={{
                display:'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent:'center'
            }}>
                
                {
                    products.map( product=> (
                        <ProductCard 
                            key={product.id}
                            onChange={onProductCountChange}
                            product={product}
                            className="bg-dark text-white" 
                            style={{
                                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                            }}
                        >
                            
                            <ProductImage className="custom-image"/>
                            <ProductTitle  className="text-bold" />
                            <ProductButtons className="custom-buttons"/>
                            
                        </ProductCard> 
                    ))
                }

            
            </div>

            <div className="shooping-cart">
                <h2>Carrito</h2>
                <ProductCard 
                    product={product1}
                    className="bg-dark text-white" 
                    style={{
                    width:'100px'
                    }}
                >
                    <ProductImage className="custom-image"/>
                    <ProductButtons 
                        className="custom-buttons"
                        style={
                            {
                                display:'flex',
                                justifyContent:'center'
                            }
                        }
                    />
                    
                </ProductCard> 
                <ProductCard 
                    product={product2}
                    className="bg-dark text-white" 
                    style={{
                    width:'100px'
                    }}
                >
                    <ProductImage className="custom-image"/>
                    <ProductButtons 
                        className="custom-buttons"
                        style={
                            {
                                display:'flex',
                                justifyContent:'center'
                            }
                        }
                    />
                    
                </ProductCard> 
            </div>

            <div>
                <code>
                    {JSON.stringify(shoopingCart, null, 5)}
                </code>
            </div>
        </div>
    )
}
