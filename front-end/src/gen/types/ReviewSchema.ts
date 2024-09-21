export type ReviewSchema = {
    /**
     * @type integer
    */
    id: number;
    /**
     * @type string
    */
    product: string;
    /**
     * @type string
    */
    user: string;
    /**
     * @type integer
    */
    rating: number;
    /**
     * @type string
    */
    comment: string;
    /**
     * @type string, date-time
    */
    created_at: string;
};