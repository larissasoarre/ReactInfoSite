import reactBigLogo from '../images/react-logo-big.svg'

function Main() {
    return (
        <main className='main-content'>
            <img className='main-content--react-logo' src={reactBigLogo} alt="React logo" />
            <h1 className='main-content--title'>Fun facts about React</h1>
            <ul className='main-content--list'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

export default Main;
