import styles from './page.module.css'

const linkedinUrl = 'https://www.linkedin.com/in/rajatetc';
const githubUrl = 'https://github.com/rajatetc';
const twitterUrl = 'https://twitter.com/rajatetc';

export default function Home() {
  return (
    <main className={styles.main}>
       <h1>Hello Internet, this is Rajat Gupta</h1>
       <p>A web developer based in Delhi, India.</p>
        <br />
       <p> 
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.anchor}>LinkedIn</a> | 
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.anchor}> GitHub</a> |
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className={styles.anchor}> Twitter</a> 
       </p>
    </main>
  )
}
