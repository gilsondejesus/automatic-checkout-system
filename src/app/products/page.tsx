import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return ( 
    <div className="bg-gray-300 border-red-500 border-2 p-5 rounded-xl border-red-500 flex flex-col items-center justify-center mx-auto">
      <h1 className=" text-red-600 font-bold">Product Page</h1>
      <Button>Comprar</Button>
      <Input placeholder="Buscar productos" />
    </div>
   );
}
 
export default ProductPage;