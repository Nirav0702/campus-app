interface orderFoodContents {
    categoryName: string;
    categoryId : string;
    itemName : string;
    itemId : string;
    cost : number;
}
export default orderFoodContents

export type orderStatus = 'CONFIRMED' | 'PREPARING' | 'READY' | 'COMPLETE'