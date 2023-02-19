
export interface Rating {
    rate: number;
    count: number;
}

export default interface IProducts {
    id: number;
    title: string;
    price: string;
    category: string;
    decription: string;
    image: string;
    rating: Rating;

}
