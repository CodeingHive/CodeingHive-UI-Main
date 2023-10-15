import React, { useState } from 'react';
import axios from 'axios';

const codeSnippets = {
    cpp: '#include <iostream>\nint main() {\n  std::cout << "Hello, World!";\n  return 0;\n}',
    python: 'print("Hello, World!")',
    java: 'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
};

const OnlineCompiler = () => {
    const [language, setLanguage] = useState('cpp');
    const [code, setCode] = useState(codeSnippets.cpp);

    const [output, setOutput] = useState('');
    const [compilationTime, setCompilationTime] = useState(0);

    const [isLoading, setIsLoading] = useState(false);

    const compileCode = async () => {
        setIsLoading(true);

        try {
            const response = await axios.post('https://codeinghive.onrender.com/submit-code', {
                language,
                code,
            });

            setOutput(response.data.output);
            setCompilationTime(response.data.compilationTime);
            if (response.data.message === 'Compilation error') {
                console.log('Compilation failed');
            } else {
                console.log('Code executed successfully');
            }
        } catch (error) {
            console.error('Error compiling code:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-800 text-white">
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-semibold mb-4">Online Code Compiler</h1>
                <div className="bg-gray-900 p-4 rounded shadow">
                    <label htmlFor="language" className="block font-semibold">
                        Select a language:
                    </label>
                    <select
                        id="language"
                        className="w-full bg-gray-700 border border-gray-300 rounded p-2 text-white"
                        value={language}
                        onChange={(e) => {
                            setLanguage(e.target.value);
                            setCode(codeSnippets[e.target.value]);
                        }}
                    >
                        <option value="cpp">C++</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                    </select>
                    <label htmlFor="code" className="block font-semibold mt-4">
                        Enter your code:
                    </label>
                    <textarea
                        id="code"
                        className="w-full h-32 bg-gray-700 border border-gray-300 rounded p-2 text-white"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <button
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                        onClick={compileCode}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Compiling...' : 'Compile'}
                    </button>
                </div>
                <div className="bg-gray-900 p-4 mt-4 rounded shadow">
                    <h2 className="text-xl font-semibold">Output</h2>
                    <pre className="bg-gray-700 p-2 border border-gray-300 rounded mt-2">{output}</pre>
                    <div className="text-gray-400 mt-2">Compilation Time: {compilationTime} ms</div>
                </div>
            </div>
        </div>
    );
};

export default OnlineCompiler;
