import './App.css';
import ProductList from './components/ProductList'; 
import ProductCard from './components/ProductCard';  
import BlogList from './components/BlogList'; 



// types/Product.ts
export interface Product {
  title: string;
  image: string;
  rating?: {
    count: number;
    rate: number;
  };
  variants: {
    price: number;
    compare_at_price?: number;
  }[];
}

const products: Product[] = [
  {
    title: 'Essence Mascara Lash Princess',
    image:
      'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
    rating: {
      count: 3,
      rate: 4.94,
    },
    variants: [
      {
        price: 9.99,
        compare_at_price: 12.99,
      },
    ],
  },
  {
    title: 'Eyeshadow Palette with Mirror',
    image:
      'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png',
    rating: {
      count: 10,
      rate: 3.28,
    },
    variants: [
      {
        price: 19.99,
        compare_at_price: 29.99,
      },
      {
        price: 24.99,
        compare_at_price: 34.99,
      },
    ],
  },
  {
    title: 'Powder Canister',
    image:
      'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png',
    variants: [
      {
        price: 16.99,
      },
    ],
  },
  {
    title: 'Essence Mascara Lash Princess',
    image:
      'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
    rating: {
      count: 3,
      rate: 4.94,
    },
    variants: [
      {
        price: 9.99,
        compare_at_price: 12.99,
      },
    ],
  },
  {
    title: 'Eyeshadow Palette with Mirror',
    image:
      'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png',
    rating: {
      count: 10,
      rate: 3.28,
    },
    variants: [
      {
        price: 19.99,
        compare_at_price: 29.99,
      },
      {
        price: 24.99,
        compare_at_price: 34.99,
      },
    ],
  },
  {
    title: 'Powder Canister',
    image:
      'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png',
    variants: [
      {
        price: 16.99,
      },
    ],
  },
  {
    title: 'Essence Mascara Lash Princess',
    image:
      'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
    rating: {
      count: 3,
      rate: 4.94,
    },
    variants: [
      {
        price: 9.99,
        compare_at_price: 12.99,
      },
    ],
  },
  {
    title: 'Eyeshadow Palette with Mirror',
    image:
      'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png',
    rating: {
      count: 10,
      rate: 3.28,
    },
    variants: [
      {
        price: 19.99,
        compare_at_price: 29.99,
      },
      {
        price: 24.99,
        compare_at_price: 34.99,
      },
    ],
  },
  {
    title: 'Powder Canister',
    image:
      'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png',
    variants: [
      {
        price: 16.99,
      },
    ],
  },
];

function App() {
  return (
    <>
      <section className='featured-product'>
        <div className='container'>
          {/* section sản phẩm */}
          <ProductList>
            {
              products.map((product) => <ProductCard product={product}/>)
          }
          </ProductList>
          {/* section mới */}
           <BlogList /> 

        </div>
      </section>
    </>
  );
}

export default App;

//dựa trên dữ liệu trong posts, thực hành lại : type cho product(title,string,vvv)
//tạo và render danh sách block dựa trên dữ liệu
// thêm các file kiểu blogcard,bloglist
