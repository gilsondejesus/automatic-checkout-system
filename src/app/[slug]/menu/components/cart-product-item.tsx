import { ChevronLeftIcon, ChevronRightIcon, Trash2Icon, } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext, CartProduct } from "../contexts/cart";

interface CartItemProps {
  product: CartProduct;
}

const CartProductItem = ({ product }: CartItemProps) => {
  const { decreaseProductQuantity, increaseProductQuantity, removeProduct } =
    useContext(CartContext);
  return (
    <div className="flex min-h-[90px] items-center justify-between">
      {/* ESQUERDA */}
      <div className="flex w-full items-center gap-4">
        <div className="relative h-20 w-20 rounded-lg bg-gray-100 p-1">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="rounded-md"
          />
        </div>
        <div className="flex-1 space-y-1 text-left">
          <p className="max-w-[120px] truncate text-ellipsis text-xs">
            {product.name}
          </p>
          <p className="text-sm font-semibold">
            {formatCurrency(product.price)}
          </p>
          {/* QUANTIDADE */}
          <div className="flex items-center gap-1 text-center">
            <Button
              className="h-7 w-7 rounded-lg"
              variant="outline"
              onClick={() => decreaseProductQuantity(product.id)}
            >
              <ChevronLeftIcon />
            </Button>
            <p className="w-7 text-xs">{product.quantity}</p>
            <Button
              className="h-7 w-7 rounded-lg"
              variant="destructive"
              onClick={() => increaseProductQuantity(product.id)}
            >
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>
      {/* BOTÃO DE DELETAR */}
      <Button
        variant="outline"
        className="rounded-xl"
        size="icon"
        onClick={() => removeProduct(product.id)}
      >
        <Trash2Icon />
      </Button>
    </div>
  );
};

export default CartProductItem;
