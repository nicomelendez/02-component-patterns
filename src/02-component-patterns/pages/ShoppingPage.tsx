import { ProductCard,ProductImage,ProductTitle,ProductButtons} from "../components"
import '../styles/custom-styles.css'

const product = {
    id:'1',
    title:'Coffee Mug',
    img:'./coffee-mug.png'
}

export const ShoppingPage = () => {
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

            <ProductCard 
                product={product}
            >
                
                <ProductCard.Image className="custom-image"/>
                <ProductCard.Title className="text-bold" />
                <ProductCard.Buttons />
                  
            </ProductCard>

            <ProductCard 
                product={product}
                className="bg-dark text-white"
            >
                
                <ProductImage className="custom-image"/>
                <ProductTitle  className="text-bold" />
                <ProductButtons className="custom-buttons"/>
                  
            </ProductCard> 

           
        </div>
    </div>
  )
}
