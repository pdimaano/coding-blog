import { Component } from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"

export default class extends Component {
    render () {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title="About Me | Coding Blog"
                    metaDescription="Philip has built games, websites and other applications which can be found on this blog."
                />
                <Header />
                <div className="about-container">
                    <div className="about-section">
                        <h1>About Me</h1>
                        <p>I'm Philip and I develop software.</p>
                        <p>This blog contains info about my career journey, projects and other endeavors.</p>
                    </div>
                    <div className="about-section">
                        <h2>My Projects</h2>
                        <ul>
                            <li><a href="https://github.com/pdimaano/memory-card">Memory Game</a> - A fun memory game build using React Hooks.</li>
                            <li><a href="https://github.com/pdimaano/cv-app">Build Your CV</a> - A site built with React that helps you create your resume and/or CV.</li>
                            <li><a href="https://github.com/pdimaano/battleship">Battleship Game</a> - A game build with React that lets you play battleship against the computer.</li>
                        </ul>
                    </div>
                    <div className="about-section">
                        <h2>Currently Using</h2>
                        <ul>
                            <li><strong>Computer</strong>: MacBook Pro 2020 with Apple M1 Chip</li>
                            <li><strong>Editor</strong>: Visual Studio Code</li>
                            <li><strong>Languages/Technologies</strong>: HTLM, CSS, Javascript, React, Python</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}