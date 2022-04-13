import Image from 'next/image'
import Link from "next/link"
function ProductsCard({product}){
    const {title,price,images,id,size,slug}= product.fields
    return(
        <article className="product">
        <div className="img-container">
        
           <Image  className="img-fluid shadow-2-strong" src={'https:' + images.fields.file.url}
           width ='500px'    
           height ='500px' alt='product'   ></Image>
       <a href={'/products/' + slug}> <button className="bag-btn" >
            <i className="fas fa-info"></i>
            More info
          </button></a>
        </div>
          <h3>{title}</h3>
        <h4>$9999</h4>
    <style jsx>{`
  .product{
    
    color:red;
    weight:bold;
  
  }
            
  .products-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    
    
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 1.5rem;
    grid-row-gap: 2rem;
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .bag-btn {
    position: absolute;
    top: 70%;
    right: 0;
    background: var(--primaryColor);
    border: none;
    text-transform: uppercase;
    padding: 0.5rem 0.75rem;
    letter-spacing: var(--mainSpacing);
    font-weight: bold;
    transition: var(--mainTransition);
    transform: translateX(101%);
    cursor: pointer;
  }
  .bag-btn:hover {
    color: var(--mainWhite);
  }
  .fa-shopping-cart {
    margin-right: 0.5rem;
  }
  .img-container:hover .bag-btn {
    transform: translateX(0);
  }
  .product-img {
    display: block;
    width: 100%;
    min-height: 12rem;
    transition: var(--mainTransition);
  }
  .img-container:hover .product-img {
    opacity: 0.5;
  }
  
  .product h3 {
    text-transform: capitalize;
    font-size: 1.1rem;
    margin-top: 1rem;
    letter-spacing: var(--mainSpacing);
    text-align: center;
  }
  
  .product h4 {
    margin-top: 0.7rem;
    letter-spacing: var(--mainSpacing);
    color: var(--primaryColor);
    text-align: center;
  }
    `}

    </style>
  </article> 
    )
}
export default ProductsCard ;