// Step 1: Import React
import * as React from "react"
import { HeadFC, Link, useStaticQuery, graphql } from "gatsby"



// Step 2: Define your component
const AboutPage = () => {
	return (
		<main>
			<h1>About Me</h1>
			<Link to="/">Back to Home</Link>
			<p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
		</main>
	)
}
export const Header = () => {
	/* Step 2: Use the useStaticQuery hook and
		graphql tag to query for data
		(The query gets run at build time) */
	const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
	return (
    <title>{data.site.siteMetadata.title}</title>
  )
}

// Step 3: Export your component
export default AboutPage