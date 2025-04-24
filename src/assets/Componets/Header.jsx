import { Link } from 'react-router'
import '../Componets/Header.css'

function Header(){
    return(
        <>
        <nav className='headerSection'>
            <h2>Header Logo</h2>
            <ul>
                <li><Link to='/index' className='headerLinks'>Home</Link></li>
                <li><Link to='/Shope' className='headerLinks'>Shop</Link></li>
                <li><Link to='/MyAccount' className='headerLinks'>My Account</Link></li>
                <li><Link to='/Compare' className='headerLinks'>Compare</Link></li>
                <li><Link to='/Login' className='headerLinks'>Login</Link></li>
            </ul>
        </nav>
        </>
    )
}
export default Header