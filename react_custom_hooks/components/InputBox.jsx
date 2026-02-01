import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex container mx-auto ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                    {/* Optimising the label & Adding accessibility */}
                </label>

                <input
                    className="outline-none text-gray-400 w-full bg-transparent py-1.5"
                    type="number"
                    id={amountInputId}
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange &&
                        onAmountChange(Number(e.target.value))
                        // Arguments Always taken as string in functions
                    } 
                />

            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">

                <p className="text-black/40 mb-2 w-full">Currency Type</p>

                <select
                    className="rounded-md p-1 bg-slate-300 text-white cursor-pointer outline-none" value={selectCurrency} 
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}
                >
                    
                    {currencyOptions?.map((currency) => (
                        <option className="bg-slate-200 text-black px-2 py-1 text-center" key={currency} value={currency}> {currency} </option>
                        // Use key to track rendering that increases performance in loop
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;