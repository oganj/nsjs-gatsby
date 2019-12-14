import React from 'react';
import { Link } from 'gatsby';

export const pageQuery = graphql `
    query Blog {
      blog:allFile(filter: {ext: {eq: ".md"}}) {
        items: nodes {
          base
          childMarkdownRemark {
            frontmatter {
              author
              title
              date(fromNow: false)
            }
            excerpt
          }
        }
      }
    }
`;


const Blog = ({data}) => {
    console.log({data});
    return (

        <div>
            <Link to="/"> Home </Link>

            {data.blog.items.map(({childMarkdownRemark}) => { return <article key={childMarkdownRemark.id}>
                Author: <p>{childMarkdownRemark.frontmatter.author} </p>
                Excerpt: <h4> {childMarkdownRemark.excerpt} </h4>
            </article> }) }
        </div>
    );
};

export default Blog;
