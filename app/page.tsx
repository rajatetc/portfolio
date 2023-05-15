import styles from './page.module.css'
import Image from 'next/image';

const linkedinUrl = 'https://www.linkedin.com/in/rajatetc';
const githubUrl = 'https://github.com/rajatetc';
const twitterUrl = 'https://twitter.com/rajatetc';
const simpplrUrl = 'https://www.simpplr.com/'
const unacademyUrl = 'https://unacademy.com/'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
              priority
              src='/images/headshot.jpg'
              className={styles.borderCircle}
              height={150}
              width={150}
              alt="headshot"
            />
            <h1 className={styles.heading2Xl}>Rajat Gupta</h1>
       <section className={styles.headingMd}>
       <p>Hello, I&apos;m Rajat. A web developer based in Delhi, India. </p>
       <p>
        Currently, building modern intranet at  <a href={simpplrUrl} target="_blank" rel="noopener noreferrer">Simpplr</a>. Previously, developed live classes at  <a href={unacademyUrl} target="_blank" rel="noopener noreferrer">Unacademy</a>. Passionate about creating engaging and user-friendly digital experiences.  </p>
       </section>
       <br />
       <h2 className={styles.headingXl}> 
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>&nbsp;|&nbsp; 
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>&nbsp;|&nbsp;
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">Twitter</a> 
       </h2>
    </main>
  )
}
