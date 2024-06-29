
import './header.style.css';
const Header = () => {
       return(
        <div className="header-container">

            <div className="header-title">
                <h2>Master Soldas</h2>
            </div>
            <div className="header-item">
                <div className="header-items">Home</div>
                <div className="header-items">Sobre nós</div>
                <div className="header-items">Serviços</div>
                <div className="header-items">Projetos</div>
            </div>
        </div>
       )
}

export default Header