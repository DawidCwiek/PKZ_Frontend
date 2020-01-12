import React from 'react';
import photo1 from 'assets/images/photo1.png';
import photo2 from 'assets/images/photo2.png';
import photo3 from 'assets/images/photo3.png';
import photo4 from 'assets/images/photo4.png';
import slider1 from 'assets/images/slider1.png';
import slider2 from 'assets/images/slider2.png';
import slider3 from 'assets/images/slider3.png';

const Slider = () => (
  <div>
    <div id="slider">
      <div className="slides">
        <div className="slider">
          <div className="titleBg">
            <h1>Restaurant Maker</h1>
            <h2>Profesjonalne narzędzie do prowadzenia restauracji.</h2>
          </div>
          <a href="#offer">
            <button className="button" type="button">
              Oferta
            </button>
          </a>
          <a href="/login">
            <button className="buttonLogin" type="button">
              Sign In
            </button>
          </a>
          <div className="image">
            {' '}
            <img src={photo1} alt="" />{' '}
          </div>
        </div>
        <div className="slider">
          <div className="titleBg">
            <h1>Restaurant Maker</h1>
            <h2>Zawsze chciałeś mieć swoją restauracje?</h2>
          </div>
          <a href="#offer">
            <button className="button" type="button">
              Oferta
            </button>
          </a>
          <a href="/login">
            <button className="buttonLogin" type="button">
              Sign In
            </button>
          </a>
          <div className="image">
            {' '}
            <img src={photo2} alt="" />{' '}
          </div>
        </div>
        <div className="slider">
          <div className="titleBg">
            <h1>Restaurant Maker</h1>
            <h2>A może marzyłeś o swojej własnej sieci kebabów?</h2>
          </div>
          <a href="#offer">
            <button className="button" type="button">
              Oferta
            </button>
          </a>
          <a href="/login">
            <button className="buttonLogin" type="button">
              Sign In
            </button>
          </a>
          <div className="image">
            {' '}
            <img src={photo3} alt="" />{' '}
          </div>
        </div>
        <div className="slider">
          <div className="titleBg">
            <h1>Restaurant Maker</h1>
            <h2>Chcesz być szefem wszystkich szefów?</h2>
          </div>
          <a href="#offer">
            <button className="button" type="button">
              Oferta
            </button>
          </a>
          <a href="/login">
            <button className="buttonLogin" type="button">
              Sign In
            </button>
          </a>
          <div className="image">
            {' '}
            <img src={photo4} alt="" />{' '}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Offer = () => (
  <div id="offer">
    <div className="info">
      <h1 className="info__title">Oferta</h1>
      <br />
      <p className="info__description">
        Dokładamy wszelkich starań, aby spełnić Twoje oczekiwania. Wybierz odpowiedni plan dla
        swoich potrzeb. Pamiętaj, że w każdej chwili możesz zmienić swój plan cenowy.
      </p>
    </div>
    <div className="container">
      <div className="box">
        <h2 className="box__title">Basic</h2>
        <p className="box__description">Wszystko czego potrzebujesz. Za rozsądną cenę.</p>
        <p className="box__price">1 miesiąc&nbsp; 99 zł</p>
        <button className="box__button" type="button">
          wybierz
        </button>
      </div>
      <div className="box box--featured">
        <h2 className="box__title">Pro</h2>
        <p className="box__description">
          Więcej niż ktokolwiek może dać - za mniej niż gdziekolwiek indziej.
        </p>
        <p className="box__price">6 miesięcy 399 zł</p>
        <button className="box__button" type="button">
          wybierz
        </button>
      </div>
      <div className="box">
        <h2 className="box__title">VIP</h2>
        <p className="box__description">
          Ok, we get it. You’re the boss now. Just tell us what you need.
        </p>
        <p className="box__price">12 miesięcy 699 zł</p>
        <button className="box__button" type="button">
          wybierz
        </button>
      </div>
    </div>

    <div className="slider-frame">
      <div className="slide-images">
        <div className="img-container">
          <img src={slider1} alt="" />
        </div>
        <div className="img-container">
          <img src={slider2} alt="" />
        </div>
        <div className="img-container">
          <img src={slider3} alt="" />
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div>
    <div className="contact">
      <h1 className="contactTitle">Kontakt</h1>
      <dl className="contactContent">
        <dt>Poniedziałek - Piątek:</dt>
        <dt>6 : 00 - 23 : 00</dt>
        <dt>Sobota:</dt>
        <dt>10 : 00 - 18 : 00</dt>
        <br />
        <dt>Dane kontaktowe:</dt>
        <dt>Numer telefonu : (+48) 861 64 93</dt>
        <dt>E-mail: restaurantmaker@restaurant.com</dt>
      </dl>
    </div>
  </div>
);

const Footer = () => (
  <div>
    <p className="footer">Copyright Restaurant Maker. All rights reserved.</p>
  </div>
);
const HomePage = () => (
  <div className="homePage">
    <Slider />
    <Offer />
    <Contact />
    <Footer />
  </div>
);

export default HomePage;
