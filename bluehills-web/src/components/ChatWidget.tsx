"use client"; // Required for interactivity in Next.js

import { useState } from "react";

const ChatWidget = () => {
    const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
    const [showInput, setShowInput] = useState(false);
    const [userData, setUserData] = useState({ name: "", email: "", phone: "" });
    const [isOpen, setIsOpen] = useState(false);

    // Function to handle widget toggle and reset states when closing
    const toggleChat = () => {
        if (isOpen) {
            setMessages([]); // Reset messages
            setShowInput(false); // Hide input form
            setUserData({ name: "", email: "", phone: "" }); // Reset user data
        }
        setIsOpen(!isOpen);
    };

    const handleQuestionClick = (question: string) => {
        let response = "";
        if (question === "What is Bluehill Media?") {
            response = "Bluehill Media is an advanced AI-powered business assistant.";
        } else if (question === "Can I book a call?") {
            response = "Sure! Please provide your Name, Email, and Phone Number.";
            setShowInput(true);
        } else if (question === "How much does it cost?") {
            response = "We offer **custom solutions** tailored to your needs. Contact us for pricing.";
        }

        setMessages((prev) => [...prev, { text: question, sender: "user" }, { text: response, sender: "bot" }]);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!userData.name || !userData.email || !userData.phone) {
            alert("Please fill all fields.");
            return;
        }

        setMessages((prev) => [...prev, { text: `Name: ${userData.name}, Email: ${userData.email}, Phone: ${userData.phone}`, sender: "user" }]);

        // Send data to backend
        await fetch("https://prompt-chatbot.onrender.com/save-lead", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        setMessages((prev) => [...prev, { text: "Thanks! You can book a call here: (https://calendly.com/s0umy3ndudas/30min)", sender: "bot" }]);
        setShowInput(false);
        setUserData({ name: "", email: "", phone: "" });
    };

    return (
        <div className="fixed bottom-4 right-4 flex flex-col items-end">
            {/* Chat Button */}
            <button onClick={toggleChat} className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg text-white">
                {isOpen ? "❌" : "💬"}
            </button>

            {/* Chat Box */}
            {isOpen && (
                <div className="w-80 bg-white shadow-lg rounded-lg p-4 mt-2 border">
                    <div className="font-bold text-lg text-center bg-blue-600 text-white py-2 rounded-t-lg">Bluehill Media</div>

                    {/* Predefined Questions */}
                    {messages.length === 0 && (
                        <div className="flex flex-col gap-2 mt-3">
                            {["What is Bluehill Media?", "Can I book a call?", "How much does it cost?"].map((q) => (
                                <button key={q} onClick={() => handleQuestionClick(q)} className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700">
                                    {q}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Chat Messages */}
                    <div className="max-h-64 overflow-y-auto space-y-2 mt-3">
                        {messages.map((msg, index) => (
                            <div key={index} className={`px-3 py-2 rounded-md ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-black self-start"}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Input Form for Booking a Call */}
                    {showInput && (
                        <div className="flex flex-col gap-2 mt-3">
                            <input type="text" name="name" placeholder="Your Name" value={userData.name} onChange={handleInputChange} className="border p-2 rounded-md" />
                            <input type="email" name="email" placeholder="Your Email" value={userData.email} onChange={handleInputChange} className="border p-2 rounded-md" />
                            <input type="tel" name="phone" placeholder="Your Phone" value={userData.phone} onChange={handleInputChange} className="border p-2 rounded-md" />
                            <button onClick={handleSubmit} className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-700">
                                Submit
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChatWidget;
