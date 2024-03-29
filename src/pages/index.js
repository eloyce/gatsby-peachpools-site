import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import { Link } from '@reach/router';
import Layout from '../components/Layout'
import IndexHero from '../components/Index/IndexHero';
import ContactContainer from '../components/Contact/ContactContainer';

import GridContainer from '../components/Layouts/GridContainer';
import GridColumn from '../components/Layouts/GridColumn';
import GridRowCol from '../components/Layouts/GridRowCol';

import SectionContainer from '../components/Layouts/SectionContainer';
import '../components/Index/index.scss';

// Index images
import img1 from '../img/house_outdoor.jpg'
import img2 from '../img/outdoor_patio.jpg'
import img3 from '../img/family_daughter.jpg'

export default class IndexPage extends React.Component {
  render() {
    const greyBG = { background: '#f6f6f6' }
    return (
      <Layout>
        <Helmet 
          title={'PeachPools: Pool Services'}
					meta={[
						{ name: "description", content: 'PeachPools provides swimming pool services in Greater Atlanta area. Enjoy a better swimming pool experience and make your home the go-to spot.'}
					]}
        />
        <div className="index__landing">
          <IndexHero />
          {/* Intro Inner */}
          <SectionContainer css={greyBG}>
            <GridContainer>
              <GridColumn>
                <div className="promo-section promo__inner--text">
                  <p>You’re a homeowner with lots to do. And at PeachPools we are professional swimming pool experts with experience serving clients. </p>
                  <p>
                  Allow us to take swimming pool service off your hands forever—and upgrade your home experience.</p>
                </div>
                <hr />
              </GridColumn>
            </GridContainer>
          </SectionContainer>
          {/* First Intro */}
            <GridRowCol>
              <aside className="flex-item">
                <img src={img1} alt="Outdoor patio with chairs" />
              </aside>
              <div className="promo-section flex-item">
                <h2 className="title">Hassle free service you need</h2>
                <p>Peachpools of Atlanta offers a range of services, pool maintenance packages, and swimming pool upgrades. While a home swimming pool provides hours of enjoyment for you and your family - wear & tear, nature, and age can restrain you from using your pool or spa as often as desired.</p>
                <Link to="/services">
                  <button>Learn More</button>
                </Link>
              </div>
            </GridRowCol>
            {/* Second Intro */}
            <GridRowCol>
              <div className="promo-section flex-item">
                <h2 className="title">Restore your pool to a new level</h2>
                <p>The choice you make for your tile, finish and coping will determine the overall style of a swimming pool. Whichever you style you look to achieve, at Peachpools we offer several options to help make your pool eye-catching and will work closely with you through the design process. We enjoy an aesthetically pleasing pool and strive to make it your reality.</p>
                <Link to="/services">
                  <button>Learn More</button>
                </Link>
              </div>
              <aside className="flex-item">
                <img src={img2} alt="Patio outdoor furiniture near poolside" />
              </aside>
            </GridRowCol>
            {/* Third Intro */}
            <GridRowCol>
              <aside className="flex-item">
                <img src={img3} alt="Mom and daughter outside playing on a green field" />
              </aside>
              <div className="promo-section flex-item">
                <h2 className="title">More hours in your day</h2>
                <p>At Peachpools we have the ability to address current issues and those that may arise - which can and do happen.</p>
                <Link to="/services">
                  <button>Learn More</button>
                </Link>
              </div>
            </GridRowCol>
          </div>
          <ContactContainer />
          {/* Footer Here */}
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
