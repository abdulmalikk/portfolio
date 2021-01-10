import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Abdul Malik | Kontak</title>
      </Head>

      <Navbar />
      <main>
        <h1>Kontak Saya</h1>

        <h3 className="text-contact">
          <FontAwesomeIcon icon={['fab', 'telegram']} /> Telegram :{' '}
          <a href="https://t.me/duuuuul" className="text-link" target="_blank">
            https://t.me/duuuuul
          </a>
        </h3>
        <h3 className="text-contact">
          <FontAwesomeIcon icon={['fab', 'linkedin']} /> Linkedin :{' '}
          <a href="https://linkedin.com/in/abdulmalikk" className="text-link" target="_blank">
            https://linkedin.com/in/abdulmalikk
          </a>
        </h3>
        <h3 className="text-contact">
          <FontAwesomeIcon icon={['fab', 'github']} /> Github :{' '}
          <a href="https://github.com/abdulmalikk" className="text-link" target="_blank">
            https://github.com/abdulmalikk
          </a>
        </h3>
        <h3 className="text-contact">
          <FontAwesomeIcon icon={['fab', 'facebook']} /> Facebook :{' '}
          <a href="https://facebook.com/abdul.malikfath.5" className="text-link" target="_blank">
            https://facebook.com/abdul.malikfath.5
          </a>
        </h3>
        <h3 className="text-contact">
          <FontAwesomeIcon icon={['fab', 'instagram']} /> Instagram :{' '}
          <a href="https://instagram.com/unrspgt" className="text-link" target="_blank">
            https://instagram.com/unrspgt
          </a>
        </h3>
        <h3 className="text-contact">
          <FontAwesomeIcon icon="envelope" /> Email :{' '}
          <a href="mailto:malik301002@gmail.com" className="text-link" target="_blank">
            malik301002@gmail.com
          </a>
        </h3>
      </main>
    </>
  );
}
