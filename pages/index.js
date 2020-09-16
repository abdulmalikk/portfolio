import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdul Malik</title>
      </Head>

      <Navbar />

      <main>
        <div className="hero">
          <div className="text-wrapper">
            <h1>Halo, saya <br /><span>Abdul Malik</span></h1>
            <p>Saya pelajar SMK jurusan RPL (Rekayasa Perangkat<br />
                Lunak) yang lulus di tahun ini (2020), dan saat<br />
                ini menekuni bidang web development.</p>
            <Link href="/contact"><a className="button-cta">Kontak Saya</a></Link>
          </div>
          <div className="img-wrapper">
            <img src="foto.jpg" />
          </div>
        </div>
      </main>
    </>
  );
}
