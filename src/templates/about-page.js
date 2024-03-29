import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ContactContainer from '../components/Contact/ContactContainer';
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Fragment>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactContainer />
    </Fragment>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Helmet 
        title={`${post.frontmatter.title} | PeachPools`}
        meta={[
        { name: "description", content: 'PeachPools is a swimming pool service business that serves in the Greater Atlanta area. We serve homeowners to easily maintain and upgrade their swimming pools.'}
        ]}
      />
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
