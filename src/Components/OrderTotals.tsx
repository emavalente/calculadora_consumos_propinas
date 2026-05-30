import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {
  const subtotalAmount = useMemo(
    () =>
      order?.reduce(
        (total, orderItem) => total + orderItem.price * orderItem.quantity,
        0,
      ),
    [order],
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [order, tip]);
  return (
    <div className="pt-5 space-y-3 border-t border-teal-700">
      <h2 className="font-black text-2xl">Totales y Propinas</h2>
      <p>
        Subtotal a pagar:
        <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
      </p>
      <p>
        Propina:
        <span className="font-bold">{formatCurrency(tipAmount)}</span>
      </p>
      <p>
        Total a pagar:
        <span className="font-bold">{formatCurrency(totalAmount)}</span>
      </p>
      <button
        className="w-full mt-10 p-3 uppercase bg-black text-white font-bold disabled:opacity-20"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </div>
  );
}
