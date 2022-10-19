import NewItemForum from "../components/Meetups/NewItemForum";
import { useNavigate } from 'react-router-dom';

function NewMeetupPage()
{
    const navigate = useNavigate();

    function addMeetuphandler(meetupData)
    {
       
       fetch(
        'https://meetup-29d65-default-rtdb.firebaseio.com/meetup.json'
        ,
        {
            method: "POST",
            body : JSON.stringify(meetupData),
            headers:{
                'Content-Type':'application/json',
            }
        }
       ).then(() => {
        navigate("/" , {replace:true} )
       });
    
    }
    return (<div>
        <h1>Add A new item : </h1>
         <NewItemForum onAddMeetup={addMeetuphandler} />
         </div>
    );

}

export default NewMeetupPage;