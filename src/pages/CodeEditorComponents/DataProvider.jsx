import React, { useState } from 'react';
import { HTMLEditor, CSSEditor, JavaScriptEditor } from './Editor';
import PreviewFrame from './PreviewFrame';

function DataProvider() {
    const [htmlCode, setHtmlCode] = useState('<div>Welcome to Coding Hive!</div>');
    const [cssCode, setCssCode] = useState('body { background-color: lightblue; }');
    const [jsCode, setJsCode] = useState('document.querySelector("div").style.color = "red";');

    const handleHtmlChange = (e) => {
        setHtmlCode(e.target.value);
    };

    const handleCssChange = (e) => {
        setCssCode(e.target.value);
    };

    const handleJsChange = (e) => {
        setJsCode(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Code Editor</h1>

            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ flex: 1, borderRight: '1px solid #ccc', padding: '0 10px' }}>
                    <HTMLEditor htmlCode={htmlCode} onHtmlChange={handleHtmlChange} />
                </div>
                <div style={{ flex: 1, borderRight: '1px solid #ccc', padding: '0 10px' }}>
                    <CSSEditor cssCode={cssCode} onCssChange={handleCssChange} />
                </div>
                <div style={{ flex: 1, padding: '0 10px' }}>
                    <JavaScriptEditor jsCode={jsCode} onJsChange={handleJsChange} />
                </div>
            </div>

            <div style={{ minWidth: '100%', marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
                <PreviewFrame htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
            </div>
        </div>
    );
}

export default DataProvider;
