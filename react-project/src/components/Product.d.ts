type Product = {
    title: string;
    image: string;
    rating?: Rating; // ? là có thể có hoặc không
    variants?: Variants[]; // mảng các variant
};

type Variant = {
    price: number;
    compare_at_price : number; 
};

type Rating = {
    count: number;
    rate: number;
};



