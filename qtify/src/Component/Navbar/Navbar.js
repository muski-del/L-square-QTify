import Button from '../Button/button'
import Logo from '../Logo/logo'
import SearchBox from '../SearchBox/SearchBox'
import './Navbar.css'

export default function Navbar(){
    return(
        <div className="navbar">
            <Logo />
            <SearchBox placeholder="search a album"/>
            <Button>Give Feedback</Button>

        </div>
    )
}