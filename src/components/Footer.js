import './Header-Footer.css';
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer-group">
      <img
        className='gradient footer'
        alt='gradient footer'
        src={require('../images/footer.png')}
      />
      <div className='footer-icons'>
        <img
          className='footer-icon'
          alt='home icon'
          src={require('../images/home.png')}
          onClick={()=>navigate('/Home')}
        />
        <img
          className='footer-icon'
          alt='profile icon'
          src={require('../images/profile.png')}
          onClick={()=>navigate('/Profile')}
        />
        <img
          className='footer-icon'
          alt='ranking icon'
          src={require('../images/ranking.png')}
          onClick={()=>navigate('/Ranking')}
        />
      </div>
    </div>
  )
}

export default Footer;