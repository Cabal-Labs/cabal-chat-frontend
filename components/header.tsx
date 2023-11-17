import React from "react";
import Link from "next/link";

const Header = () => {
    const redirectToGitHub = () => {
        window.open("https://github.com/Cabal-Labs");
    };

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center sticky top-0 z-50">
            <h1 className="text-xl font-bold">Cabal Chat</h1>
            <button onClick={redirectToGitHub} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View on GitHub
            </button>
        </header>
    );
};

export default Header;
