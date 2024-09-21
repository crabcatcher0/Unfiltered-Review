import '@radix-ui/themes/styles.css';
import { useCoreApiListProducts } from '../gen/hooks/useCoreApiListProducts';
import { useCoreApiListReviews } from '../gen';
import { Box, Text, Card } from '@radix-ui/themes';

export default function ProductList() {
    const { data: products } = useCoreApiListProducts();
    const { data: reviews } = useCoreApiListReviews();

    if (!Array.isArray(products) || products.length === 0) {
        return <p>No Products to show</p>;
    }

    return (
        <Box>
            <Text>Product List</Text>
            <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {products.map((product) => (
                    <Card key={product.id} style={{ padding: '16px', width: '300px' }}>
                        <Text>{product.name}</Text>
                        <Text>Made By: {product.made_by}</Text>
                        <Text>Reviews:</Text>
                        <ul>
                            {(reviews || []).filter(review => review.product === product.name).map(review => (
                                <li key={review.id}>
                                    <Text>Review: {review.comment} - Comment By: {review.user}</Text>
                                </li>
                            ))}
                        </ul>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}
