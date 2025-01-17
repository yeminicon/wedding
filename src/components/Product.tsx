import React from "react";
import { useDispatch } from "react-redux";
import { Button, Image } from "@nextui-org/react";
// import { addItem } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface ProductProps {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  imageurl: string;
  category: string;
  description: string;
}

const Product: React.FC<ProductProps> = ({
  _id,
  name,
  price,
  imageurl,
  quantity,
  description,
  category,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = _id;

  const handleAddToCart = () => {
    // dispatch(addItem({ id, name, price, quantity, imageurl }));
  };

  const handleClicked = () => {
    navigate(`/productDetails/${_id}`);
  };

  return (
    <div>
      <div
        className="w-[90%] md:w-[250px] h-[100%] flex flex-col   rounded-lg  p-4 "
        onClick={handleClicked}
      >
        <div className="w-full ">
          <img
            className="w-[240px] max-w-full h-[200px] rounded-lg"
            src={imageurl}
            alt="Product Image"
          />
        </div>

        <div className="flex flex-row justify-between">
          <div className=" flex items-center justify-center rounded-full">
            <h3 className="text-[0.75rem] font-medium">{name}</h3>
            <p className="font-semibold text-[0.5rem]">{category}</p>
          </div>

          <p className="font-bold  text-[0.75rem]"> ₦ {price}</p>
        </div>
        <div>
          <p className="font-bold  text-[0.5rem]">{description}</p>
        </div>
        <div>
          <Button
            variant="bordered"
            className="w-full bg-[#F5F6FA] my-2 border"
            onPress={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
