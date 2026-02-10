import { useParams } from "react-router-dom";
import Data from "../json/Cards.json";
import Allimg  from "../constante/Images";

function Details() {
    const { id } = useParams();

    const product = Data.find((e) => e.id === Number(id));

    if (!product) {
        return (
            <div className="h-screen flex justify-center items-center">
                <h1 className="text-2xl font-bold">Product not found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-amber-50 flex justify-center items-center">
            <div className="w-[800px] bg-white p-6 rounded shadow">

                <img
                    src={product.lightoff}
                    alt={product.title}
                    className="w-full h-[400px] object-cover"
                />

                <div className="">
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <p className=" text-gray-600">
                        Plafonnier LED au Design moderne...
                    </p>

                    <p className="mt-2">Facile à installer et très design.</p>
                    <p>Paiement: En espèce à la livraison.</p>
                    <p>Livraison partout au Maroc.</p>

                    <h1 className="text-xl font-bold ">
                        {product.price}
                    </h1>
                </div>

                <div className="flex gap-3 h-full">
                    <img src={product.darkoff} alt="" className="w-20 " />
                    {/* <img src={product.darkoff} alt="" className="w-20 " />
                    <img src={product.darkon} alt="" className="w-20" /> */}
                </div>

            </div>
        </div>
    );
}

export default Details;
