import './App.css';

function App() {
    const randomImage = {
        src: "https://source.unsplash.com/random",
        alt: "Unsplash image"
    }

    return (
        <>
            <div className="container">
                <div className="content">
                    <img
                        src = {randomImage.src}
                        alt = {randomImage.alt}
                    />

                    {/* Logo */}
                    <div className="logo">
                        å
                    </div>

                    {/* Buttons section */}
                    <div className="button-content">
                        <a href={randomImage} className="random-button">
                            Random
                        </a>
                        <a className="circles">
                            <i className="fas fa-download"></i>
                        </a>
                        <a
                            className="circles"
                            href="https://twitter.com/intent/tweet?text=Checkout%20this%20image%20generator%20I%20have%20made%20using%20React">
                                <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                    {/* Footer */}
                    <p className="footer">
                        Made with ❤️ by {' '}
                        <strong>
                            <a href="https://twitter.com/iraamoni" target="_blank">
                                Suborna
                            </a>
                        </strong>
                    </p>
                </div>
            </div>
        </>
    );
}

export default App;
