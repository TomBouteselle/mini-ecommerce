import { createContext, useState } from "react";

export const panierContext = createContext();
export const PanierContextProvider = ({children}) => {
    let data = [];
    if(localStorage.getItem("panier")) data = JSON.parse(localStorage.getItem("panier"))
    const [panier, setPanier] = useState(data)

    const [profile, setProfile] = useState({})

    const removePanier = () => {
        localStorage.removeItem("panier")
        setPanier({})
    }

    
    const ajoutPanier =  (idArticle) => {
        // console.log(panier);
        // console.log(panier.length);
        if (panier.length == 0) {
            panier.push({id : idArticle, nb : 1})
            
        } else {
            const article = panier.find( art => art.id == idArticle)
            if (article) {
                article.nb ++
            } else {
                panier.push({id : idArticle, nb : 1})
            }
        }
        localStorage.setItem("panier", JSON.stringify(panier))
    }
   

    return <panierContext.Provider value = {{ajoutPanier, panier, profile, setProfile, removePanier}}>
        {children}
    </panierContext.Provider>
}
