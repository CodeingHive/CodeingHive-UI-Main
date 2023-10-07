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
