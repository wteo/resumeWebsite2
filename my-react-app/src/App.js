import './App.scss';
import { useState, useEffect } from 'react';
import ContentContainer from './ui/ContentContainer';
import About from './components/About';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import Experience from './components/Experience';
import Tools from './components/Tools';

function App() {

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // Update lastScrollTop, never less than 0
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);


  return (
    <div className="App">
      <header className="header__menu">
      </header>
      <section className="folder" style={{ transform: isVisible ? 'translateY(0)' : 'translateY(100%)', opacity: isVisible ? 1 : 0 }}>
        <div className="file yellow">
          <h3 className="file__title">CONTACT ME</h3>
          <hr className="file__divider"/>
          <p className="file__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula, ligula eget bibendum fermentum, nulla metus facilisis enim, in efficitur eros purus in nisl. Vivamus interdum, felis id consequat ullamcorper, dui elit tincidunt velit, at efficitur sem orci sit amet lorem. Fusce euismod, mauris id convallis facilisis, erat orci congue neque, in sagittis mauris nulla non felis. Curabitur id dictum est, non varius turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Duis nec nisi at orci feugiat gravida.</p>
          <p>Suspendisse potenti. Nam a ligula nec risus vehicula venenatis. Fusce dignissim tristique augue, a hendrerit lorem interdum et. Curabitur at dapibus nisi. Mauris sodales, velit nec egestas vehicula, augue tortor fermentum erat, ac consequat magna nunc ut justo. Aenean tincidunt semper ipsum non facilisis. Aenean quis suscipit lorem.</p>
        </div>
        <div className="file forest">
          <h3 className="file__title">ABOUT ME</h3>
          <hr className="file__divider"/>
          <p className="file__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula, ligula eget bibendum fermentum, nulla metus facilisis enim, in efficitur eros purus in nisl. Vivamus interdum, felis id consequat ullamcorper, dui elit tincidunt velit, at efficitur sem orci sit amet lorem. Fusce euismod, mauris id convallis facilisis, erat orci congue neque, in sagittis mauris nulla non felis. Curabitur id dictum est, non varius turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Duis nec nisi at orci feugiat gravida.</p>
        </div>
        <div className="file coral">
          <h3 className="file__title">MY SERVICE</h3>
          <hr className="file__divider"/>
          <p className="file__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula, ligula eget bibendum fermentum, nulla metus facilisis enim, in efficitur eros purus in nisl. Vivamus interdum, felis id consequat ullamcorper, dui elit tincidunt velit, at efficitur sem orci sit amet lorem. Fusce euismod, mauris id convallis facilisis, erat orci congue neque, in sagittis mauris nulla non felis. Curabitur id dictum est, non varius turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Duis nec nisi at orci feugiat gravida.</p>
        </div>
        <div className="file lime">
          <h3 className="file__title">MY SELECTED WORKS</h3>
          <hr className="file__divider"/>
          <p className="file__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula, ligula eget bibendum fermentum, nulla metus facilisis enim, in efficitur eros purus in nisl. Vivamus interdum, felis id consequat ullamcorper, dui elit tincidunt velit, at efficitur sem orci sit amet lorem. Fusce euismod, mauris id convallis facilisis, erat orci congue neque, in sagittis mauris nulla non felis. Curabitur id dictum est, non varius turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Duis nec nisi at orci feugiat gravida.</p>
        </div>
      </section>
      <div className="resume">DOWNLOAD CV</div>
      <ContentContainer>
        <HeroBanner />
        <About />
        <Experience />
        <Tools />
        <Footer />
      </ContentContainer>
    </div>
  );
}

export default App;
