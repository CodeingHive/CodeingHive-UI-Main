
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

