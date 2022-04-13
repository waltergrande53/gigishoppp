import  {createClient} from "contentful"

import productStyles from'../styles/Products.module.css'
import GalleryCard from "../components/GalleryCard"

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
function Gallery ({products}){

 return (
  <section className={productStyles.products} >
        <div className={productStyles.section_title}>
          <h2 id="products">Our Gallery</h2>
        
        </div>
       <div className={productStyles.products_center}>
          {products.map(product =>(

<GalleryCard key={product.sys.id} product={product}/>
          ))}
          </div>
      </section>

  )
}
export default Gallery;