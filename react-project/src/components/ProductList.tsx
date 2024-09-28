import './ProductList.css';
import { ReactNode } from 'react';

interface ProductListProps {
    children: ReactNode;
}

const ProductList = ({ children }: ProductListProps) => {
    return <div className="product-list">{children}</div>;
};

//mỗi module chỉ export 1 giá trị duy nhất
export default ProductList;
