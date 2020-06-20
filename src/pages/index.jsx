import Footer from 'components/footer';
import Header from 'components/header';
import RobotList from 'containers/robotList';
import Head from 'next/head';
import { Image } from 'semantic-ui-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nabard | Fight with code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <section>
          <Image src="/bg.jpg" />
        </section>
        <section>
          <RobotList limit={4} />
        </section>
        <h1 className="title">
          Welcome to
          {' '}
          <a href="https://nabard.io">Nabard.io!</a>
        </h1>

        <p className="description">Coming soon!</p>
      </main>

      <Footer />
    </>
  );
}
