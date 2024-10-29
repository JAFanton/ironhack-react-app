import justin from '../images/justin.jpg'
import samy from '../images/samy.jpg'

function About() {
    return (
        <>
            <h1>About Us</h1>
            
            <h2>What is The Spice is Right?</h2>
            
            <p>Welcome to our second Ironhack project. We created a single-page app to store and manage recipes with easy navigation.</p>

            <h2>This app was designed by:</h2>
            <div className="profile-container">
                <div>
                    <h3>Samy</h3>
                    <img src={samy} alt="Image of justin" />
                </div>

                <div>
                    <h3>Justin</h3>
                    <img src={justin} alt="Image of justin" />
                </div>
            </div>
        </>
    );
}

export default About;