export type CurrentBalanceType = {
    type: "action";
    action: "current-balance";
    chain: string;
    amount: number;
    currency: string;
};

export default function CurrentBalance({ chain, amount, currency }) {
    return (
        <div className="p-4 bg-yellow-100 rounded-lg shadow-md flex justify-between items-center">
            <div>
                <div className="font-bold text-lg">Bitcoin</div>
                <div className="text-gray-800 text-sm">{chain}</div>
            </div>
            <div className="text-right">
                <div className="font-bold text-orange-500 text-2xl">
                    {amount.toLocaleString()} {currency}
                </div>
                <div className="text-green-500 font-bold">+1.2%</div>
            </div>
            {/* ToDo add images of graph once we figure out graph representation*/}
        </div>
    );
}
