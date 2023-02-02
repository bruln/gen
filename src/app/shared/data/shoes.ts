import { Product } from "../models/product.model"
import { ColorsEnum } from "../enums/colors.enum"
import { SizesEnum } from "../enums/sizes.enum"
import { GendersEnum } from "../enums/genders.enum"
export const SHOES: Product[] = [
    {
        id: 0,
        name: 'Tempo',
        description: 'These speedsters could easily pass the test on race day and double as your go-to training shoe.',
        price: 249.99,
        rating: 4.5,
        gender: GendersEnum.Male,
        colorOptions: [
            {
                color: ColorsEnum.Black,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/af64bd65-10f7-431c-ab81-e9d17f65096c/tempo-road-running-shoes-rVsrCV.png'
            },
            {
                color: ColorsEnum.White,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a70540d6-68a7-4a77-8b05-a359de0a75ec/tempo-road-running-shoes-rVsrCV.png'
            },
            {
                color: ColorsEnum.Orange,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5f6bb927-fd98-48bb-80cf-4ca2f7d9c906/tempo-road-running-shoes-rVsrCV.png'
            }
        ],
        sizeOptions: [
            {
                 size: SizesEnum.S_36,
                available: false
            },
            {
                size: SizesEnum.S_37,
                available: true
            },
            {
                size: SizesEnum.S_38,
                available: false
            },
            {
                size: SizesEnum.S_39,
                available: true
            },
            {
                size: SizesEnum.S_40,
                available: true
            },
            {
                size: SizesEnum.S_41,
                available: false
            },
            {
                size: SizesEnum.S_42,
                available: true
            },
            {
                size: SizesEnum.S_43,
                available: true
            },
            {
                size: SizesEnum.S_44,
                available: true
            },
            {
                size: SizesEnum.S_45,
                available: true
            }
           
        ],
    },
    {
        id: 1,
        name: 'Invincible 3',
        description: 'The Invincible 3 gives you our highest level of comfort underfoot to help you stay on your feet.',
        price: 449.99,
        rating: 4.0,
        gender: GendersEnum.Unisex,
        colorOptions: [
            {
                color: ColorsEnum.Blue,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1bb4cfb7-baec-4d3f-b998-23430fdd71a6/invincible-3-road-running-shoes-xk5gLh.png'
            },
            {
                color: ColorsEnum.Navy,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/49e100a4-6f50-4ac6-9dd9-4410185b0d43/invincible-3-road-running-shoes-xk5gLh.png'
            },
            {
                color: ColorsEnum.Black,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/invincible-3-road-running-shoes-xk5gLh.png'
            },
            {
                color: ColorsEnum.White,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/478926ab-d0d9-4d8e-a12c-121c4a163200/invincible-3-road-running-shoes-xk5gLh.png'
            }
        ],
        sizeOptions: [
            {
                 size: SizesEnum.S_36,
                available: true
            },
            {
                size: SizesEnum.S_37,
                available: false
            },
            {
                size: SizesEnum.S_38,
                available: false
            },
            {
                size: SizesEnum.S_39,
                available: true
            },
            {
                size: SizesEnum.S_40,
                available: false
            },
            {
                size: SizesEnum.S_41,
                available: true
            },
            {
                size: SizesEnum.S_42,
                available: true
            },
            {
                size: SizesEnum.S_43,
                available: false
            },
            {
                size: SizesEnum.S_44,
                available: false
            },
            {
                size: SizesEnum.S_45,
                available: false
            }
        ],
    },
    {
        id: 2,
        name: 'Streakfly',
        description: 'The Nike Streakfly is all about the speed you need to take on the competition in a mile, 5K or 10K race.',
        price: 329.99,
        rating: 5.0,
        gender: GendersEnum.Female,
        colorOptions: [
            {
                color: ColorsEnum.Grey,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/39abd113-ccab-4e57-a321-1680945b28b9/streakfly-road-racing-shoes-5B4DMx.png'
            },
            {
                color: ColorsEnum.Orange,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/01e6bdc4-645d-4626-84c6-c6dd96dfc921/streakfly-road-racing-shoes-5B4DMx.png'
            },
            {
                color: ColorsEnum.White,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7f3d7a6c-23d7-4248-93d1-e9481900b341/streakfly-road-racing-shoes-5B4DMx.png'
            },
            {
                color: ColorsEnum.Multicolor,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/109b6ace-cbfc-475e-90e1-1b8f9fce9db7/streakfly-road-racing-shoes-5B4DMx.png'
            }
        ],
        sizeOptions: [
            {
                 size: SizesEnum.S_36,
                available: false
            },
            {
                size: SizesEnum.S_37,
                available: true
            },
            {
                size: SizesEnum.S_38,
                available: false
            },
            {
                size: SizesEnum.S_39,
                available: true
            },
            {
                size: SizesEnum.S_40,
                available: false
            },
            {
                size: SizesEnum.S_41,
                available: false
            },
            {
                size: SizesEnum.S_42,
                available: true
            },
            {
                size: SizesEnum.S_43,
                available: false
            },
            {
                size: SizesEnum.S_44,
                available: true
            },
            {
                size: SizesEnum.S_45,
                available: true
            }
        ],
    },
    {
        id: 3,
        name: 'Vaporfly 2',
        description: 'Continue the next evolution of speed with racing shoes made to help you chase new goals and records.',
        price: 167.99,
        rating: 5.0,
        gender: GendersEnum.Male,
        colorOptions: [
            {
                color: ColorsEnum.Red,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c4af86e1-e273-49c7-a4b9-2f60a80046c9/vaporfly-2-road-racing-shoes-821S4F.png'
            },
            {
                color: ColorsEnum.White,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/aeb477b0-67a9-4569-9205-9ca44acf6c71/vaporfly-2-road-racing-shoes-821S4F.png'
            },
            {
                color: ColorsEnum.Multicolor,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1ff6ffc1-6c25-4a1f-8461-517308954d62/vaporfly-2-road-racing-shoes-821S4F.png'
            },
            {
                color: ColorsEnum.Blue,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/793373e5-7351-4fef-b338-77349819a579/vaporfly-2-road-racing-shoes-821S4F.png'
            }
        ],
        sizeOptions: [
            {
                 size: SizesEnum.S_36,
                available: false
            },
            {
                size: SizesEnum.S_37,
                available: true
            },
            {
                size: SizesEnum.S_38,
                available: false
            },
            {
                size: SizesEnum.S_39,
                available: true
            },
            {
                size: SizesEnum.S_40,
                available: true
            },
            {
                size: SizesEnum.S_41,
                available: false
            },
            {
                size: SizesEnum.S_42,
                available: true
            },
            {
                size: SizesEnum.S_43,
                available: true
            },
            {
                size: SizesEnum.S_44,
                available: true
            },
            {
                size: SizesEnum.S_45,
                available: true
            }
        ],
    },
    {
        id: 4,
        name: 'Pegasus 39',
        description: "Running is your daily ritual—and you need shoes that are just as dedicated as you.",
        price: 159.99,
        rating: 3.5,
        gender: GendersEnum.Male,
        colorOptions: [
            {
                color: ColorsEnum.Green,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e03f8fa2-652d-4ef8-aa02-1d8b8bb0e018/pegasus-39-road-running-shoes-NDfG6L.png'
            }
        ],
        sizeOptions: [
           {
                 size: SizesEnum.S_36,
                available: false
            },
            {
                size: SizesEnum.S_37,
                available: true
            },
            {
                size: SizesEnum.S_38,
                available: false
            },
            {
                size: SizesEnum.S_39,
                available: false
            },
            {
                size: SizesEnum.S_40,
                available: true
            },
            {
                size: SizesEnum.S_41,
                available: false
            },
            {
                size: SizesEnum.S_42,
                available: false
            },
            {
                size: SizesEnum.S_43,
                available: false
            },
            {
                size: SizesEnum.S_44,
                available: true
            },
            {
                size: SizesEnum.S_45,
                available: true
            }
        ],
    },
    {
        id: 5,
        name: 'Juniper Trail 2',
        description: 'Break away from the norm and dash up that tempting trail in the Nike Juniper Trail 2.',
        price: 189.99,
        rating: 4.3,
        gender: GendersEnum.Unisex,
        colorOptions: [
            {
                color: ColorsEnum.Beige,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/acf444e8-af35-441c-a94f-094f4186202f/juniper-trail-2-next-nature-trail-running-shoes-MPS4NQ.png'
            },
            {
                color: ColorsEnum.Black,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/27c96321-e45c-4d63-ad6e-96eb63fa598c/juniper-trail-2-next-nature-trail-running-shoes-MPS4NQ.png'
            },
        ],
        sizeOptions: [
           {
                 size: SizesEnum.S_36,
                available: false
            },
            {
                size: SizesEnum.S_37,
                available: false
            },
            {
                size: SizesEnum.S_38,
                available: false
            },
            {
                size: SizesEnum.S_39,
                available: true
            },
            {
                size: SizesEnum.S_40,
                available: false
            },
            {
                size: SizesEnum.S_41,
                available: false
            },
            {
                size: SizesEnum.S_42,
                available: true
            },
            {
                size: SizesEnum.S_43,
                available: false
            },
            {
                size: SizesEnum.S_44,
                available: false
            },
            {
                size: SizesEnum.S_45,
                available: true
            }
        ],
    },
    {
        id: 6,
        name: 'React Infinity 3',
        description: 'While these speedsters could easily pass the test on race day, they double as your go-to shoe for your training routine.',
        price: 152.95,
        rating: 4.7,
        gender: GendersEnum.Unisex,
        colorOptions: [
            {
                color: ColorsEnum.Green,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/370dc7f0-64e9-4b84-86ca-1a7fb71c3c37/react-infinity-3-road-running-shoes-TXLsbD.png'
            },
            {
                color: ColorsEnum.White,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bac37b3a-4a82-4d7e-a0ef-69000ce91066/react-infinity-3-road-running-shoes-TXLsbD.png'
            },
            {
                color: ColorsEnum.Black,
                image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/17bef034-3a34-4db7-bb5c-90488d936e07/react-infinity-3-road-running-shoes-TXLsbD.png'
            }
        ],
        sizeOptions: [
            {
                 size: SizesEnum.S_36,
                available: false
            },
            {
                size: SizesEnum.S_37,
                available: true
            },
            {
                size: SizesEnum.S_38,
                available: false
            },
            {
                size: SizesEnum.S_39,
                available: false
            },
            {
                size: SizesEnum.S_40,
                available: false
            },
            {
                size: SizesEnum.S_41,
                available: false
            },
            {
                size: SizesEnum.S_42,
                available: false
            },
            {
                size: SizesEnum.S_43,
                available: true
            },
            {
                size: SizesEnum.S_44,
                available: true
            },
            {
                size: SizesEnum.S_45,
                available: true
            }
        ],
    }
]