import React, { useRef, useEffect } from 'react';

function ArticleMedia({ assets }) {
  const descriptionRefs = useRef([]);

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

  return (
    <div className="article__media">
      {
        assets.map((asset, index) => (
          <React.Fragment key={index}>
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
          </React.Fragment>
        ))
      }
    </div>
  )
}

export default ArticleMedia;