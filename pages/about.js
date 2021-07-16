import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Head>
        <title>Abdul Malik | Tentang Saya</title>
      </Head>

      <Navbar />
      <main>
        <h1>Tentang Saya</h1>

        <h2># pendidikan</h2>
        <ul className="ul-about">
          <li>SMK Media Informatika Jakarta, jurusan RPL (2017 - 2020)</li>
          <li>SMPN 16 Jakarta (2014 - 2017)</li>
          <li>SDN Larangan 01 Tangerang (2008 - 2014)</li>
        </ul>

        <h2># pengalaman</h2>
        <ul className="ul-about">
          <li>Magang sebagai Web Developer di CV. ON29 Studio (April 2019 - Mei 2019)</li>
          <li>Bekerja sebagai IT Support di PT. Buana Nirwana Cakrawala (Agustus 2020 - sekarang)</li>
        </ul>
        
        <h2># skill</h2>
        <ul className="ul-about">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Figma</li>
        </ul>
        
        <h2># sertifikat</h2>
        <ul className="ul-about">
          <li><a href="https://www.dicoding.com/certificates/D98XW9ORJXM3" className="text-link" target="_blank">Belajar Dasar Pemrograman Web (Dicoding)</a></li>
          <li><a href="https://www.dicoding.com/certificates/QGRX56J9KZ0M" className="text-link" target="_blank">Belajar Fundamental Front-End Web Development (Dicoding)</a></li>
          <li><a href="https://www.dicoding.com/certificates/453XE8KJYPRN" className="text-link" target="_blank">Membangun Progressive Web Apps (Dicoding)</a></li>
        </ul>

      </main>
    </>
  );
}
