import { createContext  , useState } from "react";

// Create Context : contains 
// createContext => State Tree , Iwant to share 
const favoritesContext = createContext(
    {
        // Initialize State 
        favorites : [] ,
        totalfavorites : 0,
        addFavorite : (meetup) => {},
        removeFavorite : (meetupId) => {},
        isItemFavorite : (meetupId) => {} , 
    }
)

// wrapper
export function FavoritesContextProvider(props)
{
  const [allFavs , setAllFavs ] = useState([])

// Add Fav 
    function AddToFavsHandler(meetup)
    {
        //return setAllFavs(allFavs , meetup)
        return setAllFavs((prevFavs) => {
            return prevFavs.concat(meetup)
        })
    }

// Remove from Favs 
    function removeFavsHandler(meetupId)
    {
    //
    return setAllFavs((prevFavs) => {
        return prevFavs.filter(fav => fav.id !== meetupId)
    }) 
    }

// Is fav 
    function itemFavHandler(meetupId)
    {
        // True : yes
        // False : No
        return allFavs.some(fav => fav.id === meetupId) 
    }

    const context = {
      
        favorites : allFavs ,
        totalfavorites : allFavs.length,
        addFavorite : AddToFavsHandler,
        removeFavorite : removeFavsHandler,
        isItemFavorite : itemFavHandler
    }

    // context.provider {wrapp my app : props.children}
    return <favoritesContext.Provider value={context}>
        {props.children}
    </favoritesContext.Provider>
}

export default favoritesContext;
