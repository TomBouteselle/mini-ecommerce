import { createContext, useState } from "react";

export const profileContext = createContext();
export const ProfileContextProvider = ({children}) => {

    const [profile, setProfile] = useState({
        nom : "tomgg",
        email : "azerty@gmail.com",
        adresse : "oadpoj pozajpoaz",
        commentaire : "commentaireRef.current.value"
      })
      console.log(profile);

    

   

    return <profileContext.Provider value = {{profile}}>
        {children}
    </profileContext.Provider>
}
