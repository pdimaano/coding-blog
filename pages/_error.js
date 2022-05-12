import { Component } from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"
import GoogleAnalytics from "../components/googleAnalytics.js"

export default class extends Component {
    static getInitialProps({ rew, res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null

        return {
            statusCode: statusCode
        }
    }

    render () {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title="Error | Coding Blog"
                />
                <GoogleAnalytics />
                <Header />
                <div className="error-container">
                    {
                        this.props.statusCode === 404 ?
                        <>
                            <h1>404 Page Not Found</h1>
                            <p>The page you were looking for isn't here.</p>
                        </> :
                        <>
                            <h1>An Error Occurred</h1>
                            <p>Please reload the page or return to the homepage.</p>
                        </>
                    }
                </div>
                <Footer />
            </div>
        )
    }
}