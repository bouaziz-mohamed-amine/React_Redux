
import './../App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector } from 'react-redux';

     const navstyle={color : 'white',textDecoration: 'none'}
     

const Nav = () => {
    
  
  const nbr = useSelector(state => state.favorites); 
  const nbrc = useSelector(state => state.counter); 
  const fav={padding:'0px 5px',backgroundColor:'gray',borderRadius:'5px'}
  return (
     
    <nav>
      <ul className="nav-links">
        <li><Link to="/" style={navstyle}>home</Link></li>
        <li><Link to="/about" style={navstyle}>counter <b style={fav} >{nbrc}</b></Link></li>
        <li><Link to="/favorites" style={navstyle}>favorites <b style={fav}>{nbr.length}</b> </Link></li>  
        <li><Link to="/book/2" style={navstyle}>book</Link></li>  
      </ul>
    </nav> );
}
 
export default Nav;