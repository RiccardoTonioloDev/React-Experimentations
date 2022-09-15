import Link from 'next/link';

function NewsPage() {
    return (
        <>
            <h1>The news page</h1>
            <ul>
                <li>
                    <Link href="/news/next">NextJS is good</Link>
                </li>
                <li>
                    <Link href="/news/node">NodeJS is good</Link>
                </li>
            </ul>
        </>
    );
}
export default NewsPage;
