import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="home-page">

            {/* Hero Section */}
            <section className="hero-section">

                <div className="hero-content">

                    <div className="hero-title">
                         <img
                             src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV5vBiWK1-8zJPL2Iub-JQ8lhXcB4DPeb2pi1H1SEg&s=10"
                             alt="Healthcare Claim Tracker logo"
                         />

                         <h1>Healthcare Claim Tracker</h1>
                    </div>

                    <h2>
                        Healthcare Claims,
                        <span> Made Simple.</span>
                    </h2>

                    <p className="hero-text">
                        Submit, track, and manage healthcare claims
                        quickly and easily — all in one place.
                    </p>

                    <div className="hero-buttons">

                        <Link to="/member-login" className="hero-button primary">
                            Member Portal
                        </Link>

                        <Link to="/staff-login" className="hero-button secondary">
                            Staff Portal
                        </Link>

                    </div>

                </div>

                <div className="hero-card">

                    <div className="medical-icon">
                        ❤️
                    </div>

                    <h2>Claim Tracker</h2>

                    <p>
                        Simple. Secure. Transparent.
                    </p>

                    <div className="feature-list">

                        <div>
                            <span>✓</span>
                            Easy Claim Submission
                        </div>

                        <div>
                            <span>✓</span>
                            Track Claim Status
                        </div>

                        <div>
                            <span>✓</span>
                            Manage Payments
                        </div>

                    </div>

                </div>

            </section>


            {/* Features Section */}
            <section className="features-section">

                <h2>Everything You Need in One Place</h2>

                <p className="section-description">
                    A simple way to manage the complete healthcare
                    claim process.
                </p>

                <div className="feature-cards">

                    <div className="feature-card">
                        <div className="feature-icon">📋</div>
                        <h3>Submit Claims</h3>
                        <p>
                            Submit healthcare claims quickly
                            and keep all your information organized.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🔎</div>
                        <h3>Track Status</h3>
                        <p>
                            Easily check whether your claim is
                            pending, approved, or denied.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">💳</div>
                        <h3>Manage Payments</h3>
                        <p>
                            View and manage payment information
                            associated with your claims.
                        </p>
                    </div>

                </div>

            </section>


            {/* Footer */}
              <Footer />

        </div>
    );
}

export default Home;