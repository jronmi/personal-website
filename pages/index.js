import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>James Richardson's Website</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<header>
					<img src="/public/favicon.ico"></img>
					<h1 className={styles.title}>James Richardson</h1>
				</header>

				<p className={styles.description}>
					Hello, I'm James. I'm a Graduate Computer Science Student at MIT with a passion for Machine
					Learning. This website is a platform for me to display my interests
				</p>

				<div className={styles.grid}>
					<Link href="/Reading/" className={styles.card}>
						<h3>Reading List &rarr;</h3>
						<p>A set of academic papers which I recommend</p>
					</Link>

					<Link href="/projects/" className={styles.card}>
						<h3>Projects &rarr;</h3>
						<p>I compiled my projects for anyone to view</p>
					</Link>

					<Link href="/Resources/" className={styles.card}>
						<h3>Resources &rarr;</h3>
						<p>Here are some resources for people learning Machine Learning</p>
					</Link>

					{/* <Link href="/Blog/" className={styles.card}>
						<h3>Blog &rarr;</h3>
						<p></p>
					</Link> */}
				</div>
			</main>

			<footer>
				<a href="https://github.com/jronmi" target="_blank" rel="noopener noreferrer">
					<img src="/favicon.ico" alt="Vercel" className={styles.logo} />
				</a>
			</footer>

			<style jsx>{`
				main {
					padding: 5rem 0;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
				footer {
					width: 100%;
					height: 100px;
					border-top: 1px solid #eaeaea;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				footer img {
					margin-left: 0.5rem;
				}
				footer a {
					display: flex;
					justify-content: center;
					align-items: center;
					text-decoration: none;
					color: inherit;
				}
				code {
					background: #fafafa;
					border-radius: 5px;
					padding: 0.75rem;
					font-size: 1.1rem;
					font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
						Bitstream Vera Sans Mono, Courier New, monospace;
				}
			`}</style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
						Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
				}
				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	);
}
