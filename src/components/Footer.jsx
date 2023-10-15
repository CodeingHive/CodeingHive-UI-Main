import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto grid grid-cols-2 gap-6">
                <div>
                    <p className="mb-2 text-lg">
                        Explore more on the Codeing Hive:
                        <a href="/profile" className="block text-blue-400 hover:underline mt-2">Developer Profile</a>
                        <a href="/codingchallenges" className="block text-blue-400 hover:underline mt-2">Coding Challenges</a>
                        <a href="/hostchallenges" className="block text-blue-400 hover:underline mt-2">Host Challenges</a>
                        <a href="/onlinecompiler" className="block text-blue-400 hover:underline mt-2">Online Compiler</a>
                        <a href="/htmlrunner" className="block text-blue-400 hover:underline mt-2">Live Previewer</a>
                    </p>
                </div>
                <div>
                    <p className="mb-2 text-lg">
                        Find us on GitHub:
                        <a href="https://github.com/CodeingHive" target="_blank" className="block text-blue-400 hover:underline mt-2">GitHub</a>
                    </p>
                </div>
            </div>
            <p className="text-gray-500 mt-6 text-sm text-center">
                &copy; 2023 Codeing Hive. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
