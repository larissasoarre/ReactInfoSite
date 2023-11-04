import reactLogo from '../images/react-icon-small.png'

function Navbar() {
    return (
        <nav className='navbar'>
            <img src={reactLogo} alt="React logo" />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar;
