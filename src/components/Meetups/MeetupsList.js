 import classes from './MeetupsList.module.css';
 import MeetupItem  from './MeetupItem';

 function MeetupList(props)
 {
    return (
       <ul className={classes.list}>
       {
       props.meetups.map( meetup => <MeetupItem 
       key = {meetup.id} 
       id={meetup.id}
       image={meetup.image}
       title={meetup.title}
       desc = {meetup.desc}
       address={meetup.address}

        />)}
       </ul>
    );
 }
 export default MeetupList;