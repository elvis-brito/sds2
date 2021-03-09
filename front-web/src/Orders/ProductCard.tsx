import Pizza from './pizza_moda.jpg';

export default function ProductCard() {
    return(
        <div className="order-card-container">
            <h3 className="order-card-title">
                Pizza Calabreza
            </h3>
            <img className="order-card-image" src={Pizza} alt="Imagem de capa do card"></img>
            <h3 className="order-card-price">
                R$ 35,00
            </h3>
            <div className="order-card-description">
                <h3>Descrição</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente incidunt unde excepturi, dolor doloribus assumenda dolorem esse praesentium quasi, sed maxime sit rerum? Illum perspiciatis iste beatae ipsum asperiores?
                </p>
            </div>
        </div>
    )
}