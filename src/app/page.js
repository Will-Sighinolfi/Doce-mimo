import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image';
import Logo from '../img/logo.png';

import BackgroundHome from '../img/background-home.jpg';
import breakfast from '../img/backfast.png';
import breads from '../img/bread.jpeg'
import friedcake from '../img/fried-cake.jpeg'
import nhoque from '../img/nhoque.jpeg'

export default function Home() {
  return (
    <>
      <header>
        <div className='content-header'>
          <Image className='logo-header' src={Logo} alt='logo-header' />
          <div className='icon-header'>
            <a href="https://wa.me/5516992943120">Encomende já o seu<FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="/">Siga nossa pagina<FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </header>
      <main>
        <div className='container'>
          <div className='overlay'>
            <Image className='Background-Home' src={BackgroundHome} alt='Background-Home' />
            <div className='image-text'>
              <h1>Delícias caseiras</h1>
              <p>Desfrute do sabor reconfortante de nossas receitas caseiras, preparadas com carinho e servidas quentinhas todas as manhãs</p>
            </div>
          </div>
        </div>

        <div className='history'>
          <div className='history-text'>
            <h1>Quem somos</h1>
            <p>Bem vindo, somos entusiasta para levar nossas receitas para você, estamos localizado na cidade de Franca-sp, se você gosta de receitas tradicionais, veio ao lugar certo, você vai se surpreender com nossos produtos, venha conhecer.</p>
          </div>
          <Image className='img-breakfast' src={breakfast} alt='Background-Home' />
        </div>

        <div className='content-products'>
          <h1>Conheça nossos produtos</h1>
          <p>Venha experimentar nossos pães, receitas da vovó, fuja da mesmice e venha recordar sua infancia.</p>

          <div className='all'>
            <div className='svg'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ede0d1" fillOpacity="1" d="M0,96L26.7,85.3C53.3,75,107,53,160,69.3C213.3,85,267,139,320,170.7C373.3,203,427,213,480,197.3C533.3,181,587,139,640,122.7C693.3,107,747,117,800,122.7C853.3,128,907,128,960,106.7C1013.3,85,1067,43,1120,58.7C1173.3,75,1227,149,1280,170.7C1333.3,192,1387,160,1413,144L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
              </svg>
            </div>
            <div className='products'>

              <div className='foods'>
                <div className='products-text'>
                  <p>Temos pães de sal e pães doces, qual você prefere? experimente!</p><br />
                  <p>
                    Pães de sal (70g): 2,50 unidade <br />
                    Pães doces (70g): 2,50 unidade <br />
                    Pães doces (pacote- 5 uni): 12,00
                  </p>
                </div>
                <Image className='img-products' src={breads} alt='Background-Home' />
              </div>

              <div className='foods inversion'>
                <Image className='img-products' src={friedcake} alt='Background-Home' />
                <div className='products-text'>
                  <p>Aqui você também encontra roscas, venha conhecer!</p>
                  <p>
                    Aqui a cobertura você escolhe: Açucar, leite ninho, leite condensado <br />
                    Rosca doce (400g): 14,00
                  </p>
                </div>
              </div>

              <div className='foods'>
                <div className='products-text'>
                  <p>Nosso novo produto, Nhoque doce, perfeito para seu café da manhã ou suas "beliscadas" uma delia a cada mordida. <br />Não conhece? não perca tempo e encomende já o seu! </p>
                  <p>
                    Nhoque doce (200g): 12,00
                  </p>
                </div>
                <Image className='img-products' src={nhoque} alt='Background-Home' />
              </div>
            </div>
          </div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ede0d1" fillOpacity="1" d="M0,32L16,69.3C32,107,64,181,96,218.7C128,256,160,256,192,234.7C224,213,256,171,288,165.3C320,160,352,192,384,208C416,224,448,224,480,229.3C512,235,544,245,576,256C608,267,640,277,672,250.7C704,224,736,160,768,117.3C800,75,832,53,864,42.7C896,32,928,32,960,69.3C992,107,1024,181,1056,213.3C1088,245,1120,235,1152,245.3C1184,256,1216,288,1248,304C1280,320,1312,320,1344,272C1376,224,1408,128,1424,80L1440,32L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"></path>
          </svg>
        </div>
      </main>
      <footer className='wave-footer' >
        <div className='icon'>
          <a href="https://wa.me/5516992943120">Faça sua encomenda<FontAwesomeIcon icon={faWhatsapp} /></a>
          <a href="/">Siga nossa pagina<FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div>
          <ul className='list'>
            <li>Doce&Mimo❤️</li>
            <li>Rua Professor Súdario Ferreira 4653 Franca-Sp</li>
          </ul>
        </div>
        <p className="legal">© 2024 All rights reserved</p>
      </footer>
    </>
  );
}
