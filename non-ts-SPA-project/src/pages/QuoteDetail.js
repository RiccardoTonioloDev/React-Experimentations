import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import { useEffect } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => {
    const { quoteId } = useParams();
    const match = useRouteMatch();
    const {
        sendRequest,
        status,
        data: loadedQuote,
        error,
    } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner></LoadingSpinner>
            </div>
        );
    }
    if (error) {
        return <p className="centered">{error}</p>;
    }
    if (!loadedQuote.text) {
        return <p>No quote found!</p>;
    }

    return (
        <>
            <HighlightedQuote
                text={loadedQuote.text}
                author={loadedQuote.author}
            />
            <Route path={`${match.path}`} exact={true}>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`} exact={true}>
                <Comments />
            </Route>
        </>
    );
};
export default QuoteDetail;
