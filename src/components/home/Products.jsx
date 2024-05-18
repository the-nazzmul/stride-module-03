import SingleProduct from "./SingleProduct";


const Products = () => {
    return (
        <div>
            <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

            <div className="flex gap-2 ">
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
            </div>
            
        </div>
    );
};

export default Products;