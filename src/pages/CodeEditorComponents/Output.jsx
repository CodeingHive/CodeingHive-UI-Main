import React, { useEffect, useState } from 'react';

function CompiledOutput({ htmlCode, cssCode, jsCode }) {
    const [output, setOutput] = useState('');

    useEffect(() => {
        const compileCode = () => {
            const combinedCode = `
                <html>
                <head>
                    <style>${cssCode}</style>
                </head>
                <body>
                    ${htmlCode}
                    <script>${jsCode}</script>
                </body>
                </html>
            `;

            setOutput(combinedCode);
        };

        compileCode();

        const intervalId = setInterval(() => {
            compileCode();
        }, 1000);

        return () => clearInterval(intervalId);
    }, [htmlCode, cssCode, jsCode]);

    return (
        <section>
            <h2>Compiled Output</h2>
            <div
                dangerouslySetInnerHTML={{ __html: output }}
                className="output"
            ></div>
        </section>
    );
}

export default CompiledOutput;
