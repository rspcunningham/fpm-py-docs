import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title='fpm_py documentation'
      description="The Fourier ptychography library for python.">
      <HomepageHeader />
      <main>
      <section>
            <h2>Empowering Diagnostics in Resource-Limited Settings</h2>
            <p>Our ultimate goal is to revolutionize healthcare accessibility:</p>
            <ul>
                <li>Enable doctors in Africa to obtain lab-quality microscope images of blood smears</li>
                <li>Facilitate accurate malaria diagnosis without expensive hardware</li>
                <li>Replace $20,000+ microscopy setups with affordable, software-enhanced alternatives</li>
            </ul>
        </section>

        <section>
            <h2>What is Fourier Ptychography?</h2>
            <p>Fourier ptychography is an innovative computational imaging technique that:</p>
            <ul>
                <li>Synthesizes high-resolution images from multiple low-resolution captures</li>
                <li>Achieves gigapixel-scale, diffraction-limited resolution</li>
                <li>Provides quantitative phase information non-interferometrically</li>
            </ul>
        </section>

        <section>
            <h2>Key Features</h2>
            <ol>
                <li><strong>User-Friendly API:</strong> Simplified interface for reconstruction, dataset handling, and I/O operations.</li>
                <li><strong>High-Performance Computation:</strong> Utilizes PyTorch for rapid processing on CUDA, Apple Metal, or CPU.</li>
                <li><strong>Flexible and Extensible:</strong> Customizable iteration terminators and optimizers to drive algorithm development.</li>
            </ol>
        </section>

        <section>
            <h2>For Researchers and Engineers</h2>
            <ul>
                <li>Develop and refine the algorithm to enhance reliability and performance</li>
                <li>Contribute to a project with real-world impact on global health</li>
                <li>Leverage our modular design to implement and test new ideas quickly</li>
            </ul>
        </section>

        <section>
            <h2>Join the Mission</h2>
            <p>Help us make high-quality microscopy accessible worldwide. Start using or contributing to fpm-py today!</p>
        </section>
      </main>
    </Layout>
  );
}
