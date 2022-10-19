import  MeetupList from '../components/Meetups/MeetupsList'
import { useEffect, useState } from 'react'

// Data 

function AllMeetupsPage()
{
  const [isLoading , setIsLoading] = useState(true)
  const [LoadedMeetups , setLoadedMeetups] = useState([])

  useEffect( () => { 
    setIsLoading(true);
    fetch(
      'https://meetup-29d65-default-rtdb.firebaseio.com/meetup.json'
    ).then( (response) =>
      {
        return response.json();
      }).then( (data) => {

        const meetups = [];
        for(const key in data )
        {
            const meetup = {
              id : key,
              ...data[key]
          }
          meetups.push(meetup)
        }
        setIsLoading(false)
        setLoadedMeetups(meetups)
      }
      )
  }, [setIsLoading , setLoadedMeetups] )
 
    if(isLoading){
   return  <h2>Is Loading .. </h2>
    }

 return (
    <section>
        <h1>All Meetups : </h1>
     {console.log(LoadedMeetups)}
         <MeetupList meetups={LoadedMeetups} />
       
    </section>
   );

}

export default AllMeetupsPage;