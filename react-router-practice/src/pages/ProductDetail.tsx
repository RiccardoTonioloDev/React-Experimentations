import { useParams } from 'react-router-dom';

type paramsType = {
    productId: string;
};

const ProductDetail = () => {
    const params = useParams<paramsType>();
    const productId = params.productId;
    return (
        <section>
            <h1>Product Detail</h1>
            <p>{productId}</p>
        </section>
    );
};
export default ProductDetail;
