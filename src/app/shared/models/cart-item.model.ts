import { ColorOption } from "./product-image.model";
import { SizesEnum } from "../enums/sizes.enum";
export interface CartItem {
    name: string
    price: number
    color: ColorOption
    size: SizesEnum
    quantity: number
}