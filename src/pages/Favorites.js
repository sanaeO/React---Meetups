import MeetupList from "../components/Meetups/MeetupsList";
// use useContext
import favoritesContext  from "../store/favorites-context";
import { useContext } from "react"

function FavoritesPage()
{
    const favoritesCtx = useContext(favoritesContext)
    const favorites  = favoritesCtx.favorites
    return (
    <section> 
        <h1>My Favorites</h1>
        <MeetupList meetups={favorites} />

    </section>
    );

}

export default  FavoritesPage;
