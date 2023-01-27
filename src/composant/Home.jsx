import { useContext } from "react";
import { useArticles } from "../composant/hook/useArticles"
import { panierContext , PanierContextProvider } from "../context/panierContext";

const Home = () => {

    const articles = useArticles()

    const {ajoutPanier} = useContext(panierContext)


    const handleAjout = (idArticle) => {
        ajoutPanier(idArticle)
    }

    return ( <>
    <header>
        <div className="col-7 m-5 mx-auto text-center">
            <h1>Cactus Life</h1>
        </div>
    </header>
    <div className="row">
        {articles.map((article) => 
            <div className="col-3"   key={article.id}>
                <div className="card mb-3">
                <div className="card-header">
                    <h5 className="card-title">{article.titre}</h5>
                    </div>
                    <img className="card-img-top" src={article.img} width="400px" alt="Card image cap"/>  
                    <div className="card-body">
                        <p>{article.description}</p>
                        <p className="fw-bold">{article.prix}€</p>
                        <button className="btn btn-outline-success" data-bs-toggle="button" onClick={() => {handleAjout(article.id)}}>Ajouter au panier</button>
                    </div>
                </div>
            </div>
        )}
    </div>
    </> );
}
 
export default Home;