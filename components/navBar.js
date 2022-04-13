import Link from 'next/link'
import navStyles from '../styles/Navbar.module.css'
function Navbar(){
return(
    <nav className={navStyles.navbar}>
 
     <div className={navStyles.logo}>GIGI&apos;S SHOPPP</div>

     <ul className={navStyles.links}>
       <input className={navStyles.input} type="checkbox" id="checkbox_toggle" />
       <label htmlFor='checkbox_toggle' className={navStyles.hamburger}>&#9776;</label>
       <div className={navStyles.menu}>
      <Link href="/"><a><li>Home</li></a></Link>
      <Link href="/gallery"><a><li>Gallery</li></a></Link>
       
        <Link href="/services"><a><li>Services</li></a></Link>
         <Link href="/products"><a><li>Products</li></a></Link>
         <Link href="/contact"><a><li>Contact</li></a></Link>
       </div>
     </ul>
   </nav>
)
}
export default Navbar;