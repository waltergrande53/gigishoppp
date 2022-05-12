
import * as React from 'react';

import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
}
   from 'next-share';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function GalleryCard({product}){  
  const {title,price,images,id,size,slug}= product.fields
 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
      return(
        <article className="product">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Product"
        height="140"
        image={'https:' + images.fields.file.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      Proident fugiat et sunt nisi cupidatat ea elit quis quis nostrud in dolore id. Ut esse dolor laborum aute. Sunt ex eu nisi minim nostrud. Pariatur reprehenderit nisi ex dolore duis occaecat laborum mollit duis excepteur consequat laborum.

         </Typography>
      </CardContent>
      <CardActions>

        <Button variant="outlined" size='small' onClick={handleClickOpen}>
       Share
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {" Where would you like to share it?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <FacebookShareButton
  url={"https://gigishoppp.vercel.app/products/" + slug}

>
  <FacebookIcon size={32} round />
</FacebookShareButton>
<WhatsappShareButton
        url={"https://gigishoppp.vercel.app/products/" + slug}
          separator=":: "
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
<EmailShareButton
  url={"https://gigishoppp.vercel.app/products/" + slug}
  title={'Next Share'}
>
  <EmailIcon size={32} round />
</EmailShareButton>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel </Button>
        
        </DialogActions>
      </Dialog>
          

  

        <Link href={'/products/' + slug} underline="none">  <Button size="small">Learn More</Button></Link>
      
      </CardActions>
    </Card>
  </article> 
    )
}
export default GalleryCard ;