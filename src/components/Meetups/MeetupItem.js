import classes from './MeetupItem.module.css';
import { useContext } from 'react'
import favoritesContext from '../../store/favorites-context';

 function MeetupItem(props)
 {
    const favoritesCtx = useContext(favoritesContext)
    const isItemFavCtx = favoritesCtx.isItemFavorite(props.id)

    function toggleFavsHandler()
    {
     if(isItemFavCtx)
     {
        favoritesCtx.removeFavorite(props.id)
     } else{
        favoritesCtx.addFavorite({
            id:props.id,
            image : props.image,
            title : props.title,
            address : props.address,
            desc : props.desc

        })
     } 
      
    }
    return (
        // bach ndirhom f list
        <li className={classes.meetup} >
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={classes.intermeetup}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.desc}</p>
        <div  className={classes.btn}>
            <button onClick={toggleFavsHandler}>{ (isItemFavCtx) ? "Remove from Favorites" : "Add To Favorites"}</button>
        </div>
            </div>
        </li>
    );
    // return (
    //     // bach ndirhom f list
    //     <li className={classes.meetup}>
    //         <div className={classes.image}>
    //             <img src='' alt='cc'/>
    //         </div>
            
    //     <h3>title</h3>
    //     <address>add</address>
    //     <p>description</p>
    //    <div className={classes.btn}>
    //         <button>To Favorites</button>
    //     </div>
    //     </li>
    // );
 }
 export default MeetupItem;
 