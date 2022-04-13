import Head from 'next/head'
import Image from 'next/image'

function Services (){
    return(
        <>
    <div className='container col-lg mx-auto   ' >
    <Head>
        <title>Services</title>
      </Head>
    <div className="hd">What We Offer</div>
    <p><small className="text-white">Labore est non elit voluptate reprehenderit voluptate deserunt velit sint duis sint. Anim cillum in aute aliquip dolore cillum aliqua occaecat</small></p>
    <div className="row   mx-auto" >
        <div className="card m-2 ">
            <div className="card-content">
                <div className="card-body"> <Image className="img" src="https://via.placeholder.com/150C/O https://placeholder.com/"  alt='placeholder' width={500} height={500}/>
                    <div className="shadow"></div>
                    <div className="card-title text-black"> Parties Trays</div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">Pariatur aliquip labore ullamco est ex non in veniam duis est consectetur labore. Duis fugiat sit voluptate mollit qui incididunt exercitation laboris anim adipisicing. Eu et ea nisi in id. Officia officia id pariatur est fugiat magna. Duis tempor eu excepteur quis aute. Velit dolore tempor aliqua veniam sit eu.</small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card m-2 ">
            <div className="card-content">
                <div className="card-body"> <Image className="img" src="https://via.placeholder.com/150C/O https://placeholder.com/" alt='placeholder' width={500} height={500} />
                    <div className="card-title text-black"> Delivery </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted"> Consequat tempor proident elit velit ut velit culpa incididunt ea voluptate ullamco nostrud ea ullamco. Exercitation irure dolor mollit ex aute Lorem excepteur in id nulla occaecat et sint. Occaecat eiusmod ad mollit ea dolor. Ad aliqua exercitation fugiat consequat. </small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card m-2">
            <div className="card-content">
                <div className="card-body"> <Image className="img rck" src='https://via.placeholder.com/150C/O https://placeholder.com/' alt='placeholder' width={500} height={500} />
                    <div className="card-title text-black"> Ad nostrud mollit </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">Nulla culpa qui deserunt pariatur occaecat dolore consectetur ad excepteur. Pariatur esse sit ut labore. Occaecat quis culpa dolor mollit est. Mollit commodo id elit commodo ad tempor sunt magna </small> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
 <style >
{`
.card {
    cursor: pointer;
    width:500px;
}
@media only screen and (min-width: 900px ){
    .card{
        width:410px;
    }
}
.hd {
    font-size: 25px;
    font-weight: 550;
}
.card.hover,
.card:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, .2);
}
.img {
    margin-bottom: 35px;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);
}
.card-title {
    font-weight: 600;
}
button.focus,
button:focus {
    outline: 0;
    box-shadow: none !important;
}
.ft {
    margin-top: 25px;
}
.chk {
    margin-bottom: 5px;
}
.rck {
    margin-top: 20px;
    padding-bottom: 15px;
}
`}
 </style>
        </>
    )
}
export default Services ;