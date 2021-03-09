import './styles.css'
import StepsHeader from "./StepsHeader";
import ProductList from './ProductList';

export default function Orders() {
    return (
        <>
        <div className="orders-container">
            <StepsHeader />
            <ProductList />
        </div>
        </>
    )
}