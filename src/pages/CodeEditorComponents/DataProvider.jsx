import React, { useState } from 'react';
import { HTMLEditor, CSSEditor, JavaScriptEditor } from './Editor';
import CompiledOutput from './Output';

function DataProvider() {
    const [htmlCode, setHtmlCode] = useState('<div>Hello, world!</div>');
    const [cssCode, setCssCode] = useState('body { background-color: lightblue; }');
    const [jsCode, setJsCode] = useState('document.querySelector("div").style.color = "red";');
    const [output, setOutput] = useState('');

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
        <div>
            <h1>Code Editor</h1>

            <HTMLEditor htmlCode={htmlCode} onHtmlChange={handleHtmlChange} />
            <CSSEditor cssCode={cssCode} onCssChange={handleCssChange} />
            <JavaScriptEditor jsCode={jsCode} onJsChange={handleJsChange} />
            <CompiledOutput htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} output={output} />
        </div>
    );
}

export default DataProvider;
