export type TransactionType = {
	type: "action";
	action: "transaction";
	to: string;
	currency: string;
	amount: number;
};

export default function Transaction(message: TransactionType) {
	return (
		<div className={`px-4 py-2 rounded bg-orange-100`}>
			<b>Are you trying to start a transaction?</b>
			{/* To data */}
			<p>To: {message.to}</p>
			<p>
				<span className='text-gray-800'>You pay</span>
			</p>
			<p>
				<span className='font-bold text-gray-800'>
					{message.amount} {message.currency}
				</span>
			</p>
			{/* Buttons container */}
			<div className='flex mt-4'>
				<button className='flex-1 bg-red-200 text-red-800 font-bold py-2 px-4 rounded-l hover:bg-red-300 focus:outline-none focus:ring focus:ring-red-300 mr-0.5'>
					{/* Lighter red for Cancel */}
					Cancel
				</button>
				<button className='flex-1 bg-blue-200 text-blue-800 font-bold py-2 px-4 rounded-r hover:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-300 ml-0.5'>
					{/* Lighter blue for Confirm */}
					Confirm
				</button>
			</div>
		</div>
	);
}
