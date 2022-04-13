import { createClient } from "contentful"
import ProductsCard from "../components/productCard"
import productStyles from'../styles/Products.module.css'
import Head from 'next/head'
import { useState } from "react"

 export async function getStaticProps(){
     const client = createClient ({
        space:process.env.SPACE,
        accessToken:process.env.KEY,})
 
     const res =await client.getEntries({content_type: "products"})

     return {
      props: {
        products: res.items,
      },
      revalidate: 1
    }
  }
export default function Products ({products}){
 const [filter,setFilter] = useState('all')
 const Search = (e) =>{
   setFilter(e.target.value)
 }
 return (
    <>
    <Head>
      <title>Products</title>
    </Head>
  
  <section className={productStyles.products} >
        <div className={productStyles.section_title}>
          <h2 id="products">Our products</h2>
<form onClick={Search}>
  <label> Search By Season</label>
<select  name="cars" id="cars"  >
  <optgroup  label="Search by Season">
    <option value="all"> All</option>
    <option value="valentines">valentine</option>
    <option value="product">products</option>
    
    
  </optgroup>
 
</select>

</form>

        </div>
        <div className={productStyles.products_center}>
          {
       products.map(
        product=>{
          
     if ( product.metadata.tags[0].sys.id===filter) {
    return <ProductsCard key={product.sys.id} product={product}/>
        }else if( filter==="all"){
          return  <ProductsCard key={product.sys.id} product={product}/>
        }
       }
       
      )
      }
          </div>
      </section>
  </>
  )
}