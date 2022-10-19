import classes from './NewItemForum.module.css';
import { useRef } from 'react';

function NewItemForum(props)
{
   
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descInputRef = useRef();
    const addressInputRef = useRef();
    
    function formHandler(event)
    {
        // Vanilla js 
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDesc = descInputRef.current.value;
        const enteredAdress = addressInputRef.current.value;

        const meetupData = 
        {
            title : enteredTitle,
            image : enteredImage,
            desc : enteredDesc,
            address : enteredAdress
        }
        
        props.onAddMeetup(meetupData);
    }
   return (
    <div >
        <form className={classes.forum} onSubmit={formHandler}>
       
        <label htmlFor="title">Meetup Title</label>
        <input type="text" id="title" ref={titleInputRef} />

        <label htmlFor="img">Meetup Image</label>
        <input type="url" id="img" ref={imageInputRef}/>

        <label htmlFor="address"> Address</label>
        <input type="text" id="address" ref={addressInputRef}/>

        <label htmlFor="desc"> Description</label>
        <textarea id="desc" ref={descInputRef}></textarea>
        <div>
            <button>Add Meetup</button>
        </div>

        </form>

    </div>

   );
}
export default NewItemForum;