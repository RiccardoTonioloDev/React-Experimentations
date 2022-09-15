import { useRouter } from 'next/router';

function ImportantPage() {
    const router = useRouter();
    const newsId = router.query.newsId;

    //send a request to backend API with newsId

    return <h1>The {newsId} page</h1>;
}
export default ImportantPage;
