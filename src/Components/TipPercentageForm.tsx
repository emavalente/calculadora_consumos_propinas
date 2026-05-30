import type { Dispatch, SetStateAction } from "react";

type TipPercentageFormProps = {
  tip: number;
  setTip: Dispatch<SetStateAction<number>>;
};

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

export function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
  return (
    <div>
      <h2 className="font-black text-2xl">Propina:</h2>
      <form>
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="py-2 flex gap-4">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              checked={tipOption.value === tip}
              onChange={(e) => setTip(Number(e.target.value))}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
