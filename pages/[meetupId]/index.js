import { Fragment } from 'react';



function MeetupDetails(props) {
    return (
        <Fragment>
            <img src={props.meetupData.image} alt={props.meetupData.title} />
            <address>{props.meetupData.address}</address>
            <p>{props.meetupData.desciption}</p>
        </Fragment>
    );
}
export async function getStaticPaths() {
   //all key value pairs for which your page might be 
   // generated 
    return {
       fallback: false,
       paths: [
            { 
                params: {
                meetupId: 'm1',
                },
            }
       ] 

    }
}
export async function getStaticProps(context) {
    //fetch data from an API  
    // context holds the parameters of the parent 
    const meetupId = context.params.meetupId;

    console.log(meetupId);


    return {
      props: {
            meetupData: {
            id: meetupId,
            title: 'A First Meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pakistan_Monument_Islamabad_Capital.jpg/640px-Pakistan_Monument_Islamabad_Capital.jpg',
            address: 'Pakistan Monument',
            desciption: 'The Pakistan Monument is a national monument and heritage museum located on the western Shakarparian Hills in Islamabad, Pakistan. The monument was constructed to symbolize the unity of the Pakistani people. It is dedicated to the people of Pakistan who sacrificed their "today" for a better "tomorrow"'
        }
      }
    };
 }

export default MeetupDetails;