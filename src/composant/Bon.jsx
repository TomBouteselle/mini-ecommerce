import { useContext } from "react";
import { panierContext } from "../context/panierContext";
import useArticles from "./hook/useArticles";
import NotFound from "./NotFound";


const Bon = () => {
    const {panier, removePanier} = useContext(panierContext)
    const articles = useArticles()
    const {profile, setProfile} = useContext(panierContext)
   
    

    return ( <>
     {
        (Object.keys(profile).length == 0 ) ? (<h2>Pas de bon de comande pour l'instant.</h2>) : (<>
            
        <div className="row">
           
            <h1 className="text-primary">Bon de commande</h1>
            <h2>Articles :</h2>
            <table className="table">
                <thead>
                <tr>

                    <th scope="col">id</th>
                    <th scope="col">Titre</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Prix</th>
                </tr>
                </thead>
                <tbody>
                    { panier.map(  item => {
                    try {
                        const article =  Object.values(articles).find( art => art.id === item.id)
                        return ((article) && <tr key={article.id}>
                        <th  scope="row">{article.id}</th>
                        <td>{article.titre}</td>
                        <td>{item.nb}</td>
                        <td>{(parseFloat(article.prix) * parseFloat(item.nb))}€</td>
                        </tr>)
                    } catch (err) {
                        console.error(err);
                    }            
                    }) }
                
                </tbody>
            </table>
        </div>
        <div className="row">
            <div className="col-12">
                <h2>Détail de la livraison :</h2>
                <ul>
                    <li>nom : {profile.nom}</li>
                    <li>email : {profile.email}</li>
                    <li>adresse : {profile.adresse}</li>
                    <li>commentaire : {profile.commentaire}</li>
                </ul>
            </div>
        </div></>)}
        
    </> );
}
 
export default Bon;