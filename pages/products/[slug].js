import { createClient } from 'contentful'
import Image from 'next/image'
import Link  from 'next/link'
import Head  from 'next/head'
import { Button } from '@mui/material'


const client = createClient({
    space:process.env.SPACE,
   accessToken:process.env.KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "products"
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "products",
    'fields.slug': params.slug
  }) 

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { product: items[0] },
    revalidate: 1
  }
}

export default function ProductCard ({product}){
  if (!product) return  <div> not found</div>
  const {title,price,images}= product.fields

    return(


      <main className="container">
  <Head><title>{title}</title></Head>
      <div className="left-column rounded">
      <Image  className="img rounded " src={'https:' + images.fields.file.url}
           width ='500px'    
           height ='500px' alt='product'   ></Image>
      </div>
      
      <div className="right-column">
        <div className="product-description"> 
          <h1 className='text-danger'>{title}</h1>
          <p>Pariatur ad cillum voluptate tempor quis sit commodo minim. Consectetur dolor voluptate sunt proident eiusmod anim minim commodo sint. Nulla proident Lorem nisi labore anim ullamco quis aliqua minim dolor ex.</p>
        </div>
        <div className="product-price ">
          <h3 className='text-success'> Price ${price}</h3> <br/>
          <Link  href="/products" passHref ><Button variant="contained"> Go Back</Button></Link>
        </div>
      </div>
  <style>
    {`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 15px;
      display: flex;
    }
    .left-column {
      width: 65%;
      position: relative;
    
    }
    
    .right-column {
      width: 35%;
      margin-top: 60px;
    }
    
    
  
    .left-column .img {
      width: 85%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 1;
      transition: all 0.3s ease;
    }
    .product-description {
      border-bottom: 1px solid #E1E8EE;
      margin-bottom: 20px;
    }
    .product-description span {
      font-size: 12px;
      color: #358ED7;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-decoration: none;
    }
    .product-description h1 {
      font-weight: 300;
      font-size: 52px;
      color: #43484D;
      letter-spacing: -2px;
    }
    .product-description p {
      font-size: 16px;
      font-weight: 300;
      color: #86939E;
      line-height: 24px;
    }
    .product-price {
      display: flex;
      align-items: center;
    }
    
    .product-price span {
      font-size: 26px;
      font-weight: 300;
      color: #43474D;
      margin-right: 20px;
    } 
    .btn {
      display: inline-block;
      background-color: #7DC855;
      border-radius: 6px;
      font-size: 16px;
      color: #FFFFFF;
      text-decoration: none;
      padding: 12px 30px;
      transition: all .5s;
    }
    .cart-btn:hover {
      background-color: #64af3d;
    }
    @media (max-width: 940px) {
      .container {
        flex-direction: column;
        margin-top: 60px;
      }
    .left-column,
      .right-column {
        width: 100%;
        
      }
    
      .left-column .img {
        width: 200px;
        right: 100px;
        top: -65px;
        left: initial;
          border-style: dotted;
          padding:20px;
       
      }
    }
    
    @media (max-width: 535px) {
      .left-column .img {
        width: 20px;
        top: -85px;
       
      }
    }
    
    `}
  </style>
  </main>
    );
}