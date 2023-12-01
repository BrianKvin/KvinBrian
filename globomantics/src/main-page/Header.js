import "./index.css";
import logo from "./GloboLogo.png";

const Header = ({ subtitle }) => {
  return (
    <header className='row'>
        <div className='col-md-5'>
            <img src={logo} alt='logo' className='logo' />
        </div>
        <div className='col-md-7 subtitle mt-5'>
            { subtitle }
        </div>
    </header>
  )
}

export default Header
