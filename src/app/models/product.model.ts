export interface IProduct {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    image:       string;
    rating:      Rating;
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing",
}

export interface Rating {
    rate:  number;
    count: number;
}
// la api se consume en postman y se obtiene la respuesta en formato json por medio
//del get all products. luego en quicktype se pega el json y se obtiene el modelo
//de datos en formato typescript. https://app.quicktype.io/