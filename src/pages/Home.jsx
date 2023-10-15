import React from 'react';

const Home = () => {


    const sectionStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // 0.7 is the alpha (transparency) value
    };

    return (
        <div className="min-h-screen">
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-semibold text-white mb-6">Welcome to the All-in-One Developer Portal</h1>
                <p className="text-lg text-gray-300 mb-6">
                    This platform offers a wide range of tools and features for developers and coding enthusiasts. Explore our
                    offerings below:
                </p>

                {/* Developer Profile Section */}
                <div className="bg-gray-800 text-white p-6 rounded shadow mb-6 gradient-bg-services" style={sectionStyle}>
                    <h2 className="text-2xl font-semibold mb-2">Developer Profile</h2>
                    <p>Set up your developer profile and showcase your skills and projects.</p>
                </div>

                {/* Coding Challenges Section */}
                <div className="bg-gray-800 text-white p-6 rounded shadow mb-6 gradient-bg-services-2" style={sectionStyle}>
                    <h2 className="text-2xl font-semibold mb-2">Coding Challenges</h2>
                    <p>Participate in coding challenges and improve your skills.</p>
                </div>

                {/* Host Coding Challenges Section */}
                <div className="bg-gray-800 text-white p-6 rounded shadow mb-6 gradient-bg-services" style={sectionStyle}>
                    <h2 className="text-2xl font-semibold mb-2">Host Coding Challenges</h2>
                    <p>Organize and host your coding challenges for the community.</p>
                </div>

                {/* Online Compiler Section */}
                <div className="bg-gray-800 text-white p-6 rounded shadow mb-6 gradient-bg-services-2" style={sectionStyle}>
                    <h2 className="text-2xl font-semibold mb-2">Online Compiler</h2>
                    <p>Compile and run code for Codeforces competitions and more.</p>
                </div>

                {/* HTML CSS JS Live Previewer and Editor Section */}
                <div className="bg-gray-800 text-white p-6 rounded shadow mb-6 gradient-bg-services" style={sectionStyle}>
                    <h2 className="text-2xl font-semibold mb-2">HTML CSS JS Live Previewer and Editor</h2>
                    <p>Create, edit, and preview HTML, CSS, and JavaScript code in real-time.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
