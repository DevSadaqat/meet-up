import MeetupList from '../components/meetups/MeetupList';


const DUMMY_MEETUPS = [ 
 {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pakistan_Monument_Islamabad_Capital.jpg/640px-Pakistan_Monument_Islamabad_Capital.jpg',
    address: 'Pakistan Monument',
    desciption: 'The Pakistan Monument is a national monument and heritage museum located on the western Shakarparian Hills in Islamabad, Pakistan. The monument was constructed to symbolize the unity of the Pakistani people. It is dedicated to the people of Pakistan who sacrificed their today for a better tomorrow'
  }
];

function HomePage(props) {
    return <MeetupList meetups={props.meetups} />
}

// export async function getServerSideProps(context) {
//   //have access to  incoming req for authentication  
//   const req = context.req;
//   const res = context.res;
  
//   //fetch data from an API run for every coming request on server side code
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
   //fetch data from an API 
   return {
     props: {
       meetups: DUMMY_MEETUPS
     }
   };
}

export default HomePage 