import { Component } from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"
import getFiveNewestPosts from "../api/getFiveNewestPosts.js"

export default class extends Component {
  static async getInitialProps () {
    const apiResult = await getFiveNewestPosts()

    return {
      posts: apiResult && apiResult.posts
    }
  }

  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetadata
          title="Coding Blog"
          metaDescription="Check out Philip's blog for posts, resources and personal projects."
        />
        <Header />
        <div className="homepage-container">
          <div className="homepage-introduction">
            <h1>My name is Philip</h1>
            <p>Welcome to my blog.</p>
          </div>
          <div className="homepage-latest-blog-posts">
            <h2>
              Latest Blog Posts
              <a className="homepage-latest-blog-posts-view-all" href="/blog">View all</a>
            </h2>
            <div className="homepage-latest-blog-posts-list">
              {
                this.props.posts ?
                this.props.posts.map((post, index) => {
                  return (
                    <a key={index} href={`/blog/${post.urlTitle}`}>
                      <div className="homepage-latest-blog-post">
                        <div classname="homepage-latest-thumbnail">
                          <img src={post.thumbnailImageUrl} />
                        </div>
                        <div className="homepage-latest-blog-post-title">
                          <h3>{post.title}</h3>
                        </div>
                      </div>
                    </a>
                  )
                }) : null
              }
            </div>
          </div>
          <div className="homepage-projects">
            <h2>My Projects</h2>
            <div className="homepage-projects-list">
              <div className="homepage-projects">
                <h3>
                  <a href="example.com">
                    <div className="homepage-project-icon">$</div>
                    <div className="homepage-project-title">Sample</div>
                  </a>
                </h3>
                <p>Example description here</p>
                <div className="homepage-project-btns">
                  <a className="homepage-project-view-btn" href="example.com">View</a>
                </div>
              </div>
              <div className="homepage-projects">
                <h3>
                  <a href="example.com">
                    <div className="homepage-project-icon">$</div>
                    <div className="homepage-project-title">Sample</div>
                  </a>
                </h3>
                <p>Example description here</p>
                <div className="homepage-project-btns">
                  <a className="homepage-project-view-btn" href="example.com">View</a>
                </div>
              </div>
              <div className="homepage-projects">
                <h3>
                  <a href="example.com">
                    <div className="homepage-project-icon">$</div>
                    <div className="homepage-project-title">Sample</div>
                  </a>
                </h3>
                <p>Example description here</p>
                <div className="homepage-project-btns">
                  <a className="homepage-project-view-btn" href="example.com">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

