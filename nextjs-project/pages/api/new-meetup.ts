import { MongoClient } from 'mongodb';

import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const data = req.body;
        const client = await MongoClient.connect(
            `mongodb+srv://RiccardoToniolo:${process.env.MONGO_PASSWORD}@cluster0.wpbzy.mongodb.net/meetups?retryWrites=true&w=majority`
        );
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data!);
        console.log(result);
        client.close();
        res.status(200).json({ message: 'Meetup inserted!' });
    }
}
export default handler;
