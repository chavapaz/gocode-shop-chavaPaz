export interface productModel
{
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: rateModel,

};

export interface rateModel{
    rate: number, 
    count: number
};