import { Link } from 'react-router'
import '../Componets/Header.css'

function Header(){
    return(
        <>
        <nav className='headerSection'>
            <h2>Header Logo</h2>
            <ul>
                <li><Link to='/index'>Home</Link></li>
                <li><Link to='/Shope'>Shop</Link></li>
                <li><Link to='/MyAccount'>My Account</Link></li>
                <li><Link to='/Compare'>Compare</Link></li>
                <li><Link to='/Login'>Login</Link></li>
            </ul>
        </nav>
        </>
    )
}
export default Header