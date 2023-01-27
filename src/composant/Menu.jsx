import { NavLink } from "react-router-dom";

const Menu = () => {
    return ( <>
                <div className="bg-success mb-3">
            {/**
             * primary : bleu
             * secondary : gris
             * success : vert
             * danger : rouge
             * warning : orange
             * info : bleu turquoise
             * dark : noir 
             * light : blanc gris très léger 
             */}
            <nav className="navbar navbar-expand navbar-dark bg-success container">
                <span className="navbar-brand fs-3">
                    {/** image => emoji emojipedia.org */}
                    🌵
                </span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className={(isActive) => {
                            return isActive ? "nav-link active" : "nav-link"
                        }}>Accueil</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to="/panier" className="nav-link">Panier</NavLink>
                    </li>
                </ul>

                
            </nav>
        </div>
    </> );
}
 
export default Menu;