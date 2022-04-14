import {FaTiktok,FaFacebookF,FaInstagram,FaMapMarker} from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { autocompleteClasses } from '@mui/material';
const Contact = () => {
  const [state, handleSubmit] = useForm("mwkyvbyd");
  if (state.succeeded) {
      return (
      <div className="jumbotron center jumbotron-fluid text-center " > 
      <div className="container-lg">  
          <h2 className="display-4"> 
          Ex consequat nulla mollit minim magna in laboris deserunt qui nulla ea.  <i className="fas fa-check-circle"></i> </h2>
      <p className="lead">Exercitation id magna occaecat qui officia. </p>
   
      <Link className="btn btn-success" href='/'>Go Back</Link>
      </div>
      </div>)
  }
    return (  

   <Box   sx={{ p: 2, width: 600, margin:'auto'}}>
<div className='container'>
  <div className="row">   
    <div className="col-md-">
      <div className="card ">
        <div className="card-body text-white">
          <div className="container">
            <section className="section ">
              <h2 className="font-weight-bold text-center h1 my-5">Contact us</h2>
              <p className="text-center grey-text mb-5 mx-auto w-responsive">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Fugit, error amet numquam iure provident voluptate
                esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>
              <div className="row pt-5">
                <div className="col-md-8 col-xl-9">
                  <form name='contact' action="https://formspree.io/f/mwkyvbyd" method="POST" onSubmit={handleSubmit} className="form"  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="md-form">
                          <label hrmlfor="contact-name" className="name">Your name</label>
                          <TextField type="text" required fullWidth 
                          id="contact-name" name='name'
                       className="form-control"/>
                        
                        </div>
                      </div>
           
                      <div className="col-md-6">
                        <div className="md-form">
                          <label htmlFor="contact-email" className="" name='email'>Your email</label>
                          <TextField type="email" required id="contact-email" className="form-control" fullWidth >
                        
                        </TextField>
              <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
                      </div>
          
                    </div>
                </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form">
                          <label htmlFor="contact-Subject">Subject</label>
                          <TextField type="text" required  fullWidth
                          name='Subject' id="subject" className="form-control" />
                         <ValidationError 
        prefix="Subject" 
        field="subject"
        errors={state.errors}
      />
                        </div>
                      </div>
                    </div>
             
                    <div className="row">

                      <div className="col-md-12">

                        <div className="md-form">
                          <label htmlFor="contact-message" >Your message</label>
                          <TextField type="text" required fullWidth
                          name='massage'  id="contact-message" className="md-textarea form-control" rows="3"></TextField>
                            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
                        </div>

                      </div>
                    </div>              <div className="text-center text-md-left my-4">
                      <button className="btn btn-primary submitBtn " type="submit" disabled={state.submitting} >Send</button>
                    </div>
                  </form>
              
                  
                </div>
          
                <div className="col-md-4 col-xl-3">
                  <ul className=" text-center list-unstyled">
                    <li>
                    <FaMapMarker/>
                      <p>Located in USA</p>
                    </li>

                    <li>
                    <p>Social Media</p>
       <div  className="medias d-flex  justify-content-evenly">
       <Link  className="btn btn-danger" href="https://www.instagram.com/gigis_shoppp/"  passHref target='_blank'><FaInstagram/></Link>
     <Link className="btn btn-primary" href="https://www.facebook.com/gigis_shoppp-102649194937712/"  passHref target='_blank'><FaFacebookF/></Link>
    <Link className="btn btn-dark" href="https://www.tiktok.com/@gigis_shoppp"  passHref target='_blank'><FaTiktok/></Link>
         </div>             
    
         
                    </li>
                  </ul>
                </div>
              </div>
            </section>

          </div>
        </div>

      </div>

    </div>


  </div>

</div>
<style>
    {`
    .center{
      color:black;
    }
    main{
        color:black;
    }
  
    .card-body{
      background-color:	#006400;
    
    }
    `}
</style>

</Box>
    )

}
 
export default Contact;