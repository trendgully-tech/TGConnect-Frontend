import {Link} from "react-router-dom";
import './index.css'

const Header = () => {
  return (
    <>
    <div className='nav-bar'>
            
            <Link to="/"><img src="../Logo.png" alt='Logo' className="logo"/></Link>
            <div className='search-container'>
                <input type="search" className="search-box"/>
            </div>
            
                <ul className="linkk">
                    <li><button className='sell-your-work-button' title='Sell your work'><p>Sell your work</p></button></li>
                    <Link to='/connections'><li><i class="fa-solid fa-user-group"></i>
                    <span class="d-none d-sm-block">Connections</span>
                    </li></Link>
                    <li> <i class="fa-solid fa-bell"></i>
                    
                    <span class="d-none d-sm-block">Notifications</span>
                    </li>
                    <li><img src="../User (1).png" alt="user" className='profile-pic'/>
                    <p>Me<i class="fa-solid fa-caret-down"></i></p></li>
                   
                </ul>
                
    </div>
<div className='nav-bar small-nav'>
    <input type="search" className="search-box"/>
</div>
</>
  )
}
 export default Header