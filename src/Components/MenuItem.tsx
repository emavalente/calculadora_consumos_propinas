import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="w-full p-2 border-2 border-teal-400 flex justify-between hover:bg-teal-200"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}
