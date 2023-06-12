export interface orderFoodContents {
    categoryName: string;
    categoryId : string;
    itemName : string;
    itemId : string;
    cost : number;
    quantity : number;
}

export type orderStatus = 'CONFIRMED' | 'PREPARING' | 'READY' | 'COMPLETE'

export interface orderResponse {

    _id : string;
    userId : string;
    outletId : string;
    orderContents : orderFoodContents[];
    status : orderStatus
    totalBillingAmout : number;
    userName: string;
    userPhone: string;
    outletName: string;
    outletPhone: string;
}