import NewMeetupForm, {
    meetupData,
} from '../../components/meetups/NewMeetupForm';

function NewMeetup() {
    function addMeetupHandler(enteredMeetupData: meetupData) {
        console.log(enteredMeetupData);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetup;
