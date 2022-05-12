import { Component } from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"
import GoogleAnalytics from "../components/googleAnalytics.js"

export default class extends Component {
    render () {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title="Contact | Coding Blog"
                    metaDescription="My contact information including email and links can be found below."
                />
                <GoogleAnalytics />
                <Header />
                <div className="contact-container">
                    <div className="contact-section">
                        <h1>Contact</h1>
                        <p>My name is Philip. Thanks for checking out my blog.</p>
                        <p>My email is pdimaano7@gmail.com</p>
                    </div>
                    <div className="contact-section">
                        <h2>All My Links</h2>
                        <ul>
                            <li><strong>Email</strong>: pdimaano7@gmail.com</li>
                            <li><strong>GitHub</strong>: <a href="https://github.com/pdimaano">My Github</a></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}