import React, { useRef, useEffect, useState } from 'react';

function ArticleMedia({ assets, isCarousel = false }) {
  const descriptionRefs = useRef([]);
  const videoRefs = useRef([]);
  const scrollRef = useRef(null);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const [loadedVideos, setLoadedVideos] = useState({});
  const [loadedMedia, setLoadedMedia] = useState({});

  const effectiveCarousel = isCarousel && !isMobile;

  useEffect(() => {
    const observers = videoRefs.current.map((videoRef, index) => {
      if (!videoRef || !assets[index]?.video) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setLoadedVideos(prev => ({ ...prev, [index]: true }));
          }
        },
        { rootMargin: '200px' }
      );
      
      observer.observe(videoRef);
      return observer;
    });

    return () => observers.forEach(obs => obs?.disconnect());
  }, [assets]);

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
                {!loadedMedia[index] && (
                  <div className="article__media-loading">
                    <div className="spinner" />
                  </div>
                )}
                
                {
                  asset.embedUrl ? (
                    <iframe
                      className="article__video article__video--embed"
                      src={asset.embedUrl}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={asset.alt}
                      loading="lazy"
                      onLoad={() => setLoadedMedia(prev => ({ ...prev, [index]: true }))}
                    />
                  ) : asset.video ? (
                    <video 
                      ref={el => videoRefs.current[index] = el}
                      className={`article__video ${asset.alt.includes('mobile') ? "mobile" : ''}`} 
                      autoPlay={loadedVideos[index]}
                      loop 
                      muted 
                      playsInline 
                      poster={asset.src}
                      preload="none"
                      onLoadedData={() => setLoadedMedia(prev => ({ ...prev, [index]: true }))}
                    >
                      { loadedVideos[index] && <source src={asset.video} type="video/mp4" /> }
                      <img className="article__image" src={asset.src} alt={asset.alt} />
                    </video>
                  ) : (
                    <img 
                      className={`article__image ${asset.alt.includes('mobile') ? "mobile" : ''}`} 
                      src={asset.src} 
                      loading="lazy" 
                      alt={asset.alt}
                      onLoad={() => setLoadedMedia(prev => ({ ...prev, [index]: true }))}
                    />
                  )
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