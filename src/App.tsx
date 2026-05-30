import useOrder from "./hooks/useOrder";
import { MenuItem } from "./Components/MenuItem";
import { menuItems } from "./data/db";
import { OrderContents } from "./Components/OrderContents";
import { OrderTotals } from "./Components/OrderTotals";
import { TipPercentageForm } from "./Components/TipPercentageForm";

function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Consumo y Propina
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-5">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="p-5 mx-6 border border-dashed border-slate-300 space-y-10 rounded">
          <OrderContents order={order} removeItem={removeItem} />
          <TipPercentageForm setTip={setTip} tip={tip} />
          <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
        </div>
      </main>
    </>
  );
}

export default App;
