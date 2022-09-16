import MeetupList from '../components/meetups/MeetupList';
import { MeetupItemType } from '../components/meetups/MeetupItem';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

type HomePageProps = {
    meetups: MeetupItemType[];
};

function HomePage(props: HomePageProps) {
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a list of meetups!" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
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
    const client = await MongoClient.connect(
        `mongodb+srv://RiccardoToniolo:${process.env.MONGO_PASSWORD}@cluster0.wpbzy.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    return {
        props: {
            meetups: meetups.map((meetup) => {
                return {
                    id: meetup._id.toString(),
                    title: meetup.title,
                    address: meetup.address,
                    image: meetup.image,
                    description: meetup.description,
                };
            }),
        },
        revalidate: 1,
    };
}

export default HomePage;
