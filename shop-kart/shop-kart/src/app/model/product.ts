import { Rating } from "./rating";

export class Product {

    public id: number;
    public title: string;
    public price: number;
    public description: string;
    public category: string;
    public image: string;
    public rating: Rating;

    constructor() {
        this.id = 0;
        this.title = "";
        this.price = 0;
        this.description = "";
        this.category = "";
        this.image = "";
        this.rating = new Rating();
    }

}
