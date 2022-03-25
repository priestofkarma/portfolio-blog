import React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
	color: "#232129",
	padding: "96px",
	fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
	marginTop: 0,
	marginBottom: 64,
	maxWidth: 320,
}

const paragraphStyles = {
	marginBottom: 48,
}
const codeStyles = {
	color: "#8A6534",
	padding: 4,
	backgroundColor: "#FFF4DB",
	fontSize: "1.25rem",
	borderRadius: 4,
}

// markup
const NotFoundPage = () => {
	return (
		<main style={pageStyles}>
			<title>Not found</title>
			<h1 style={headingStyles}>Нічого не знайдено:(</h1>
			<p style={paragraphStyles}>
				Sorry{" "}
				<span role="img" aria-label="Pensive emoji">
					😔
				</span>{" "}
				ми не змогли знайти те, що ви шукали.
				<br />
				{process.env.NODE_ENV === "development" ? (
					<>
						<br />
						Спробуйте створити сторінку в <code style={codeStyles}>src/pages/</code>.
						<br />
					</>
				) : null}
				<br />
				<Link to="/">На головну</Link>.
			</p>
		</main>
	)
}

export default NotFoundPage
