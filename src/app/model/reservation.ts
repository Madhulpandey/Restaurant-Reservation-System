import { Restaurant } from "./restaurant";
import { User } from "./user";

export class Reservation {
    user:User
    restaurant:Restaurant
    constructor(){
        this.user=new User
        this.restaurant=new Restaurant
    }
}
