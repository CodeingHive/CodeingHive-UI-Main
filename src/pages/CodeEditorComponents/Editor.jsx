import React from 'react';

function HTMLEditor({ htmlCode, onHtmlChange }) {
    return (
        <section>
            <h2>HTML</h2>
            <textarea
                value={htmlCode}
                onChange={onHtmlChange}
                className="editor"
                placeholder="Enter HTML code"
            ></textarea>
        </section>
    );
}

function CSSEditor({ cssCode, onCssChange }) {
    return (
        <section>
            <h2>CSS</h2>
            <textarea
                value={cssCode}
                onChange={onCssChange}
                className="editor"
                placeholder="Enter CSS code"
            ></textarea>
        </section>
    );
}

function JavaScriptEditor({ jsCode, onJsChange }) {
    return (
        <section>
            <h2>JavaScript</h2>
            <textarea
                value={jsCode}
                onChange={onJsChange}
                className="editor"
                placeholder="Enter JavaScript code"
            ></textarea>
        </section>
    );
}

export { HTMLEditor, CSSEditor, JavaScriptEditor };