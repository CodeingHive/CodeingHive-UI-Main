import React, { useEffect, useRef } from 'react';

const PreviewFrame = ({ htmlCode, cssCode, jsCode }) => {
    const iframeRef = useRef(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        const iframeDocument = iframe.contentDocument;

        // Create a new HTML document inside the iframe
        iframeDocument.open();
        iframeDocument.write(htmlCode);
        iframeDocument.close();

        // Create a style element for CSS and add it to the iframe's document
        const style = iframeDocument.createElement('style');
        style.textContent = cssCode;
        iframeDocument.head.appendChild(style);

        // Create a script element for JavaScript and add it to the iframe's document
        const script = iframeDocument.createElement('script');
        script.textContent = jsCode;
        iframeDocument.body.appendChild(script);
    }, [htmlCode, cssCode, jsCode]);

    return (
        <iframe
            title="Preview"
            ref={iframeRef}
            style={{
                width: '100%',
                height: '300px', // You can adjust the height as needed
                border: '1px solid #ccc',
            }}
        />
    );
};

export default PreviewFrame;
