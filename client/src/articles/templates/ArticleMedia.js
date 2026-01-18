import React, { useRef, useEffect, useState } from 'react';

function ArticleMedia({ assets, isCarousel = false }) {
  const descriptionRefs = useRef([]);
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  
  const effectiveCarousel = isCarousel && !isMobile;

  const checkScroll = () => {
    if (scrollRef.current && effectiveCarousel) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1000);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    descriptionRefs.current.forEach(ref => {
      if (ref) {
        const lineHeight = parseFloat(getComputedStyle(ref).lineHeight);
        const height = ref.scrollHeight;
        const lines = Math.round(height / lineHeight);
        
        if (lines > 2) {
          ref.classList.add('article__image-description--left');
        }
      }
    });
  }, [assets]);

  useEffect(() => {
    if (effectiveCarousel) {
      checkScroll();
      const element = scrollRef.current;
      if (element) {
        element.addEventListener('scroll', checkScroll);
        return () => element.removeEventListener('scroll', checkScroll);
      }
    }
  });

  const scrollLeft = () => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className={`article__media ${effectiveCarousel ? 'article__media--carousel' : ''}`}>
      {effectiveCarousel && showLeftArrow && (
        <button className="article__arrow article__arrow--left" onClick={scrollLeft}>&lt;</button>
      )}
      <div className="article__media-wrapper" ref={scrollRef}>
        {
          assets.map((asset, index) => (
            <div className={`article__media-item ${effectiveCarousel ? 'article__media-item--carousel' : ''}`} key={index}>
              <div className="article__image-wrapper">
                {
                  asset.video === null ?
                    <img className={`article__image ${asset.alt.includes('mobile') ? "mobile" : ''}`} src={asset.src} alt={asset.alt} /> :
                    <video className="article__video" autoPlay loop muted playsInline poster={asset.src}>
                      <source src={asset.video} type="video/mp4" />
                      <img className="article__image" src={asset.src} alt={asset.alt} />
                    </video>
                }
              </div>
              <p 
                className="article__image-description"
                ref={el => descriptionRefs.current[index] = el}
              >
                {asset.title && <strong>{asset.title}: </strong>}
                {asset.description ?? ''}
              </p>
            </div>
          ))
        }
      </div>
      {effectiveCarousel && showRightArrow && (
        <button className="article__arrow article__arrow--right" onClick={scrollRight}>&gt;</button>
      )}
    </div>
  )
}

export default ArticleMedia;