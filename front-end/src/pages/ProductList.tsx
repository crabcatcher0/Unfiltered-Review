import '@radix-ui/themes/styles.css';
import { useCoreApiListProducts } from '../gen/hooks/useCoreApiListProducts';
import { useCoreApiListReviews } from '../gen';
import { Box, Text, Card } from '@radix-ui/themes';
import './ProductList.css';

export default function ProductList() {
    const { data: products } = useCoreApiListProducts();
    const { data: reviews } = useCoreApiListReviews();

    if (!Array.isArray(products) || products.length === 0) {
        return <h1>Loading.....</h1>;
    }

    return (
            <Box className="product-box">
                <Text>Product List</Text>
                {products.map((product) => (
                    <Card className="product-items">
                        <Text>Product Name: {product.name} || </Text>
                        <Text>Made By: {product.made_by}</Text>
                            {(reviews || []).filter(review => review.product === product.name).map(review => (
                                <p key={review.id}>
                                    <Text>Review: {review.comment} - Comment By: {review.user}</Text>
                                </p>
                            ))}
                    </Card>
                ))}
            </Box>
    );
}
