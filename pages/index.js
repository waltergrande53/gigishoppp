import { createClient } from "contentful"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import productStyles from '../styles/products.module.css'
import ProductsCard from "../components/ProductCard"
import Head from "next/head"
import Contact from "./contact"
import  Link from "next/link";












const images = [
  {
    url: 'https://gigiweb.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwyaorns2fubd%2F1Wb5wzL2k0ErHAIgMXf5AM%2F53d773c90727c879917c8b755f0a0383%2F272083013_418976226638339_599324316727787874_n.jpg&w=640&q=75',
    title: 'See Our Products',
    width: "100%"
  
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 700,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 700,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}))


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

;
export default function Home ({products}){

 return (
   
    < div className='container my-5 b'>
      <Head>
        <title>Home</title>
      </Head>
  
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 700, width: '100%', height:700 }}>
      {images.map((image) => (
        <ImageButton
        
          focusRipple
          key={image.title}
          style={{
            
            width: image.width,
          }}
          href='#products'  passHref
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>







   <section className={productStyles.products} >
        <div className={productStyles.section_title}>
          <h2 id="products"> San Valentines Specials</h2>
        
        </div>
       <div className={productStyles.products_center}>
   { products.map(
     product=>{
  if ( product.metadata.tags[0].sys.id==="valentines") {
 return <ProductsCard key={product.sys.id} product={product}/>
     }
    }
   )
    
  
  }

         <Link href="/products"><div className="btn btn-success"> See All Our Product</div></Link>
          </div>
      </section>
      <Contact></Contact>
      <style>
    {`
   
      #products{
        color:red;
      }
      .card-body{
        background-color:#222;
        
      
      }
    `}
  </style>
  </div>
  )
}