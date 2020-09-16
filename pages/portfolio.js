import Head from 'next/head';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

export default function Portfolio() {
  const portfolioData = [
    {
      imgSrc: '',
      title: 'News Finder',
      desc: 'Aplikasi pencarian berita dari berbagai sumber beberapa negara',
      demoHref: 'https://news-finder.netlify.app',
      githubHref: 'https://github.com/abdulmalikk/news-finder'
    },
    {
      imgSrc: '',
      title: 'Kabar Bola (Progressive Web App)',
      desc: 'Aplikasi PWA yang menampilkan update klasemen dan info klub dari 6 liga top eropa',
      demoHref: 'https://kabar-bola.netlify.app',
      githubHref: 'https://github.com/abdulmalikk/abdulmalikk.github.io'
    }
  ];

  return (
    <>
      <Head>
        <title>Abdul Malik | Portfolio</title>
      </Head>

      <Navbar />
      <main>
        <h1>Portfolio</h1>
        <div className='portfolio-content'>
          { portfolioData.map((data, i) => {
            const { imgSrc, title, desc, demoHref, githubHref } = data;
            return (
              <Card key={i} imgSrc={imgSrc} title={title} desc={desc} demoHref={demoHref} githubHref={githubHref} />
            );
          }) }
        </div>
      </main>
    </>
  );
}
