import { useEffect, useState } from "react"
import  axios  from "axios"

export function useArticles(){
    
    const [articles, setArticles] = useState([])

    useEffect( () => {

        axios.get(`${import.meta.env.VITE_API}article.json`)
        .then(({data}) => {
            const resultat = []
            for(const key in data) {
                (data[key]) && resultat.push({...data[key], id : key})
            }
            setArticles(resultat)
        })
    }, [])
    
    return ( articles );
}
 
export default useArticles;