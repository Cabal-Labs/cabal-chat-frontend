import React, { useState, useEffect } from "react";

const Chat = () => {
    const [inputValue, setInputValue] = useState("");
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const placeholders = ["Type your message...", "Send a greeting...", "Share your thoughts..."];

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((current) => (current + 1) % placeholders.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [placeholders.length]);

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        console.log("Message Sent:", inputValue);
        setInputValue(""); // Clear the input after sending
    };
    const messages = [
        { type: "received", text: "Hello! How are you?" },
        { type: "sent", text: "I'm good, thanks! And you?" },
        { type: "received", text: "I'm great, thanks for asking!" },
        { type: "sent", text: "What are you up to today?" },
        { type: "received", text: "Just working on a project. You?" },
        { type: "received", text: "Hello! How are you?" },
        { type: "sent", text: "I'm good, thanks! And you?" },
        { type: "received", text: "I'm great, thanks for asking!" },
        { type: "sent", text: "What are you up to today?" },
        { type: "received", text: "Just working on a project. You?" },
        { type: "received", text: "Hello! How are you?" },
        { type: "sent", text: "I'm good, thanks! And you?" },
        { type: "received", text: "I'm great, thanks for asking!" },
        { type: "sent", text: "What are you up to today?" },
        { type: "received", text: "Just working on a project. You?" },
        { type: "received", text: "Hello! How are you?" },
        { type: "sent", text: "I'm good, thanks! And you?" },
        { type: "received", text: "I'm great, thanks for asking!" },
        { type: "sent", text: "What are you up to today?" },
        { type: "received", text: "Just working on a project. You?" },
        { type: "received", text: "Hello! How are you?" },
        { type: "sent", text: "I'm good, thanks! And you?" },
        { type: "received", text: "I'm great, thanks for asking!" },
        { type: "sent", text: "What are you up to today?" },
        { type: "received", text: "Just working on a project. You?" },
        // Add more dummy messages as needed
    ];

    return (
        <div className="max-w-lg mx-auto shadow-lg p-4 bg-white">
            {" "}
            {/* Container with styling */}
            <div className="flex flex-col space-y-2 p-4">
                {messages.map((message, index) => (
                    <div key={index} className={`max-w-md px-4 py-2 rounded ${message.type === "sent" ? "self-end bg-blue-100" : "self-start bg-gray-100"}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center w-full">
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder={placeholders[placeholderIndex]} className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all " />
                <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
