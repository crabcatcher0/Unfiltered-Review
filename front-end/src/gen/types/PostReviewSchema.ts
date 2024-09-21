export type PostReviewSchema = {
    /**
     * @type integer
    */
    product: number;
    /**
     * @type integer
    */
    user: number;
    /**
     * @type integer
    */
    rating: number;
    comment?: (string | null);
};