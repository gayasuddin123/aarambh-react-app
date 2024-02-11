import "./activeslider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./product";
import { productData, responsive } from "./activeslider";

export default function Mainactiveslider() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      
      description={item.description}
    />
  ));

  return (
    <div className="App">
      
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}