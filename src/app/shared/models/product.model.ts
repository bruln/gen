import { SizesEnum } from "../enums/sizes.enum";
import { GendersEnum } from "../enums/genders.enum";
import { ColorOption } from "./product-image.model";
import { Size } from "./size.model";

export interface Product {
    id: number
    name: string;
    description: string;
    price: number;
    rating: number;
    gender: GendersEnum;
    colorOptions: ColorOption[];
    sizeOptions: Size[];
}