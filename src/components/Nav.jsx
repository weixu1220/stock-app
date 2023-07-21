import {Link} from 'react-router-dom'
function Nav() {
    return ( <div className="nav">
    <Link to='/stocks'>
        <div>Home</div>
    </Link>
    <Link to='/about'>
    <div>About</div>
    </Link>
    <Link to='/stocks'>
    <div>Dashboard</div>
    </Link>
    <Link to='/mystocks'>
    <div>My Stocks</div>
    </Link>
    </div> );
}

export default Nav;