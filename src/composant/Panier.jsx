import { useContext } from "react";
import { panierContext } from "../context/panierContext";
import { useArticles } from "../composant/hook/useArticles"
import { useRef } from "react";
import { useNavigate } from "react-router-dom"
import { commandeVerif } from "../verif/liste";
import Alert from "./Alert";
import { useAlert } from "../composant/hook/useAlert";
import { profileContext } from "../context/profileContext";

const Panier =  () => {
    const {panier, profile, setProfile} = useContext(panierContext)

    

    // console.log(profile);
    // const {profile} = useContext(profileContext)
    
    const articles =  useArticles()
    const [alerte, setAlerte, getError] = useAlert(commandeVerif)
    const navigate = useNavigate()

    const nomRef = useRef()
    const emailRef = useRef()
    const adresseRef = useRef()
    const commentaireRef = useRef()


    const handleSubmit = (e) => {

      e.preventDefault()
      // setProfile({
      //   nom : "tomgg",
      //   email : "azerty@gmail.com",
      //   adresse : "oadpoj pozajpoaz",
      //   commentaire : "commentaireRef.current.value"
      // })
      const p = {
        nom : nomRef.current.value,
        email : emailRef.current.value,
        adresse : adresseRef.current.value,
        commentaire : commentaireRef.current.value
      }

      if (getError(p)) return
      setProfile({...p})
      console.log(profile);
      navigate("/bon")
    }

    const resetAlerte = () => setAlerte({})


    return ( <>
    
    <h1 className="text-center m-5">Panier</h1>
    { (panier.length > 0) ? 
    <><div className="row">
        <div className="col-12 text-center">
        
        <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
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
                  <td><img src={article.img} height="60px" alt="" /></td>
                  <th scope="row">{article.titre}</th>
                  <td>{item.nb}</td>
                  <td>{(article.prix * item.nb)}€</td>
                </tr>)
              } catch (err) {
                console.error(err);
              }            
            }) }
          
        </tbody>
      </table>
         
        </div>
    </div>
    <div className="row mb-5">
            <div className="col-12">
              <h1 className="m-5  text-center">Vos informations</h1>
              <Alert alerte={alerte} />
              <form onSubmit={handleSubmit}>
                <input className="form-control mb-3" type="text" ref={nomRef} onFocus={resetAlerte} placeholder="Prénom Nom" />
                <input className="form-control mb-3" type="email" ref={emailRef} placeholder="Email" />
                <input className="form-control mb-3" type="text" ref={adresseRef} placeholder="Adresse de livraison" />
                <textarea className="form-control mb-3" rows="10" ref={commentaireRef} placeholder="Commentaire"></textarea>
                <input className="form-control text-white bg-success"  type="submit" />
              </form>
            </div>
    </div></>
    :
    <p>Votre panier est vide :</p> }

    </> );
}
 
export default Panier;