import React from 'react';

function ArticleMedia({ assets }) {

  return (
    <div className="article__media">
      {
        assets.map((asset, index) => (
          <>
            <div className="article__image-wrapper" key={index}>
              {
                asset.video === null ?
                  <img className={`article__image ${asset.alt.includes('mobile') ? "mobile" : ''}`} src={asset.src} alt={asset.alt} /> :
                  <video className="article__video" autoPlay loop muted playsInline poster={asset.src}>
                    <source src={asset.video} type="video/mp4" />
                    <img className="article__image" src={asset.src} alt={asset.alt} />
                  </video>
              }
            </div>
            <p className="article__image-description">{asset.description ?? ''}</p>
          </>))
      }
    </div>
  )
}

export default ArticleMedia;