import logo from '../assets/repeat.svg'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <header className="nav">
                <div className="nav_logo">
                    <img src={logo} className="logo" />
                    <h1>Convert</h1>
                </div>
                <div className="nav_choose">
                    <Link to={'/'}>Długość</Link>
                    <Link to={'/Speed'}>Prędkość</Link>
                    <Link to={'/Weight'}>Masa</Link>
                </div>
            </header>
        </>
    )
}

export default Header
