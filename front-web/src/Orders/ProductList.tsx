import ProductCard from "./ProductCard";

export default function ProductList() {
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}