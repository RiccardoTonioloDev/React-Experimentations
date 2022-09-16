import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { GetStaticPropsContext } from 'next';

import { meetupData } from '../../components/meetups/NewMeetupForm';
import Head from 'next/head';

function MeetupDetails(props: { meetupData: meetupData }) {
    console.log(props);
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a list of meetups!" />
            </Head>
            <MeetupDetail
                title={props.meetupData.title}
                image={props.meetupData.image}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </>
    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        `mongodb+srv://RiccardoToniolo:${process.env.MONGO_PASSWORD}@cluster0.wpbzy.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection
        .find({}, { projection: { _id: 1 } })
        .toArray();
    const paths = meetups.map((meetup) => {
        return {
            params: {
                meetupId: meetup._id.toString(),
            },
        };
    });
    return {
        fallback: 'blocking',
        paths,
    };
}

export async function getStaticProps(context: GetStaticPropsContext) {
    //fetch data for a single meetup
    const meetupId = context.params!.meetupId as string;
    const client = await MongoClient.connect(
        `mongodb+srv://RiccardoToniolo:${process.env.MONGO_PASSWORD}@cluster0.wpbzy.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId),
    });
    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup!._id.toString(),
                title: selectedMeetup!.title,
                address: selectedMeetup!.address,
                description: selectedMeetup!.description,
                image: selectedMeetup!.image,
            },
        },
    };
}

export default MeetupDetails;
