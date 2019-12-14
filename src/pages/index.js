import React from 'react';
import { graphql, Link} from 'gatsby';
import '../css/base.css';
import Title from '../components/Title'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

export const pageQuery = graphql `
    query MyQuery {
        site {
            siteMetadata {
                description
                title
            }
        }
        file {
            childImageSharp {
                fluid (maxWidth: 300, quality: 97){
                ...GatsbyImageSharpFluid
            }
        }
  }

    }
`;

export const sampleFragment = graphql `
    fragment ChildImageSharp on ImageSharpFixed {
        srcWebp
    }
`;

const Home = ({data}) => {
    console.log(data);
  return (
    <div>
        <Link to="/blog"> Blog </Link>
        <Helmet>
            <title>{ data.site.siteMetadata.title} </title>
            <meta name="description" content={ data.site.siteMetadata.description } />
        </Helmet>
        <Title title={data.site.siteMetadata.title}/>
        <h1> { data.site.siteMetadata.title } </h1>
        <p>  { data.site.siteMetadata.description } </p>
        {/*<img src={data.file.childImageSharp.fixed.src}/>*/}
        <br/>
        <div style={{width: '300px'}}>
            <Img fluid={ data.file.childImageSharp.fluid }/>
        </div>

    </div>
  );
};

export default Home;
