export type CurrentBalanceType = {
	type: "action";
	action: "current-balance";
	chain: string;
	amount: number;
	currency: string;
};

export default function CurrentBalance(message: CurrentBalanceType) {
	return (
		<div className='px-4 py-2 rounded bg-yellow-100'>
			<b>Your Current Balance: </b>

			{/* Data container */}
			<div className='flex justify-between items-center mt-4'>
				{/* From data */}
				<div>
					<p>
						Blockchain: <span className='text-blue-500'>{message.chain}</span>
					</p>
					<p>
						Current Balance:{" "}
						<span className='text-blue-500'>
							{message.amount} {message.currency}
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
