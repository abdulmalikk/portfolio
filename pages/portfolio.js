import Head from 'next/head';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

export default function Portfolio() {
  const portfolioData = [
    {
      imgSrc: 'news-finder.jpg',
      title: 'News Finder',
      desc: 'Website pencarian berita dari berbagai sumber beberapa negara',
      demoHref: 'https://news-finder.netlify.app',
      githubHref: 'https://github.com/abdulmalikk/news-finder',
    },
    {
      imgSrc: 'kabar-bola.jpg',
      title: 'Kabar Bola (Progressive Web Apps)',
      desc: 'Website PWA yang menampilkan update klasemen dan info klub dari 6 liga top eropa',
      demoHref: 'https://kabar-bola.netlify.app',
      githubHref: 'https://github.com/abdulmalikk/abdulmalikk.github.io',
    },
    {
      imgSrc: 'bnc-fotocopy.jpg',
      title: 'BNC Fotocopy',
      desc: 'Website company profile yang menampilkan informasi dan produk perusahaan BNC Fotocopy',
      demoHref: 'https://bncfotocopy.com',
      githubHref: '',
    },
    {
      imgSrc: 'restooo.jpg',
      title: 'Restooo (Progressive Web Apps)',
      desc: 'Website PWA yang menampilkan beberapa restoran keren untuk dikunjungi',
      demoHref: 'https://restooo.netlify.app',
      githubHref: 'https://github.com/abdulmalikk/restooo',
    },
  ];

  return (
    <>
      <Head>
        <title>Abdul Malik | Portfolio</title>
      </Head>

      <Navbar />
      <main>
        <h1>Portfolio</h1>

        <div className="portfolio-content">
          {portfolioData.map((data) => {
            const { imgSrc, title, desc, demoHref, githubHref } = data;
            return (
              <Card
                key={title}
                imgSrc={imgSrc}
                title={title}
                desc={desc}
                demoHref={demoHref}
                githubHref={githubHref}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
