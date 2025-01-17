import React, { useState } from "react";
import Product from "../../../components/Product";
import { products } from "./data";
// import Product from "../../../../components/Product";
// import { useQuery } from "@tanstack/react-query";
// import { FetchProductList } from "../../../../api/shop.api";
// import Loader from "../../../../components/loader";

interface ListOfProductProps {
  itemPerPageNo: number;
  keyword: string;
}

export interface ProductI {
  _id: string;
  name: string;
  price: string;
  imageurl: string;
  description: string;
  quantity: string;
  packaging: string;
  pm: string;
  ingredient: string;
  nutritionalInfo: string;
  storage: string;
}

const ListOfProduct: React.FC<ListOfProductProps> = ({
  itemPerPageNo,
  keyword,
}) => {
  const [Products, setProducts] = useState<ProductI[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

  // const queryKey = [`/product`, page, keyword];
  // const { data: productData, status: productStatus } = useQuery({
  //   queryKey,
  //   queryFn: () => FetchProductList(page, keyword),
  //   staleTime: 5000,
  // });

  // useEffect(() => {
  //   if (productStatus === "success" && productData) {
  //     setProducts(productData.products); // assuming the API returns products for the specific page
  //     setTotalPages(Math.ceil(productData.total / itemPerPageNo));
  //   }
  // }, [productData, productStatus]);

  // const paginate = (pageNumber: number) => {
  //   setPage(pageNumber);
  // };

  // if (productStatus === "pending") {
  //   return <Loader />;
  // }

  return (
    <div className="w-[100%] md:w-[100%] p-1 shadow-lg">
      <div className="flex flex-wrap md:mx-0 mx-auto">
        {products.map((product) => (
          <div key={product._id} className="mx-auto my-1">
            <Product category={""} {...product} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 mb-5">
        <div className="flex space-x-2">
          <div
            className="w-10 h-10 flex justify-center items-center mx-2 rounded-full bg-gray-200 cursor-pointer"
            // onClick={() => page > 1 && paginate(page - 1)}
          >
            &lt;
          </div>
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              className={`w-10 h-10 flex justify-center mx-2 items-center rounded-full cursor-pointer ${
                page === index + 1 ? "bg-[#07af18] text-white" : "bg-gray-200"
              }`}
             // onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </div>
          ))}
          <div
            className="w-10 h-10 flex justify-center mx-2 items-center rounded-full bg-gray-200 cursor-pointer"
          //  onClick={() => page < totalPages && paginate(page + 1)}
          >
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfProduct;
