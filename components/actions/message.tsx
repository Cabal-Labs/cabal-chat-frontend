export type MessageType = {
	type: "sent" | "received";
	text: string;
};

export default function Message(message: MessageType) {
	return (
		<div
			className={`max-w-md px-4 py-2 rounded ${
				message.type === "sent"
					? "self-end bg-blue-100"
					: "self-start bg-gray-100"
			}`}
		>
			{message.text}
		</div>
	);
}
