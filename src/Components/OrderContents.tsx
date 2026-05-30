import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: OrderItem["id"]) => void;
};

export function OrderContents({ order, removeItem }: OrderContentsProps) {
  return (
    <div className="mb-10">
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-5">
        {order.length === 0 ? (
          <p>La Orden está vacía</p>
        ) : (
          order.map((item) => (
            <div
              key={item.id}
              className="p-2 flex justify-between items-center border border-dashed border-teal-400 hover:bg-teal-100"
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} -{" "}
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              <button
                className="w-8 h-8 bg-red-700 text-white rounded-full hover:bg-red-600 cursor-pointer"
                onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
