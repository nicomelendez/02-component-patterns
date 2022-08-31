import { ProductCard,ProductImage,ProductTitle,ProductButtons} from "../components"

const product = {
    id:'1',
    title:'Coffee Mug',
    img:'./coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr></hr>
        <div style={{
            display:'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent:'center'
        }}>

            <ProductCard product={product}>
                
                <ProductCard.Image />
                <ProductCard.Title />
                <ProductCard.Buttons />
                  
            </ProductCard>

            <ProductCard product={product}>
                
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
                  
            </ProductCard> 

           
        </div>
    </div>
  )
}
