import "../styles/layout.css"
import "../styles/components/header.css"
import "../styles/components/footer.css"
import "../styles/pages/homepage.css"
import "../styles/pages/blog-posts.css"
import "../styles/pages/post.css"
import "../styles/pages/contact.css"
import "../styles/pages/about.css"
import "../styles/pages/_error.css"
import "../styles/prismjs.css"

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}