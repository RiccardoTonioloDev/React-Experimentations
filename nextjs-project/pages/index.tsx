import MeetupList from '../components/meetups/MeetupList';
import { MeetupItemType } from '../components/meetups/MeetupItem';
import { GetServerSidePropsContext } from 'next';
const DUMMY_MEETUPS: MeetupItemType[] = [
    {
        id: 'm1',
        title: 'First meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Roma_dall%27aereo.JPG',
        address: 'Rome, Italy',
        description: 'A cool meetup!',
    },
    {
        id: 'm2',
        title: 'Second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Roma_dall%27aereo.JPG',
        address: 'Rome, Italy',
        description: 'A really really cool meetup!',
    },
];

type HomePageProps = {
    meetups: MeetupItemType[];
};

function HomePage(props: HomePageProps) {
    return (
        <h1>
            <MeetupList meetups={props.meetups} />
        </h1>
    );
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//     const req = context.req;
//     const res = context.res;
//
//     //Fetch data from API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     };
// }

export async function getStaticProps() {
    //Fetch data from API
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
        revalidate: 10,
    };
}

export default HomePage;
