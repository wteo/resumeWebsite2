import React from 'react';
import { Link } from 'react-router-dom';

import './Files.scss';

import etikette from '../../../assets/images/etikette.webp';
import automic from '../../../assets/images/automic.webp';
import gotsauss from '../../../assets/images/gotsauss.webp';
import play from '../../../assets/images/play.webp';

function ProjectFile() {

  return (
    <Link className="file coral" to="projects">
      <h3 className="file__title">My Selected Works</h3>
      <hr className="file__divider" />
      <div className="file__content">
        <div className="file__grid">
          <div className="file__image-wrapper">
            <img className="file__image" loading="lazy" width="1857" height="1160" src={etikette} alt="Etikette Candles — Shopify theme customization" />
          </div>
          <div className="file__image-wrapper">
            <img className="file__image" loading="lazy" width="2370" height="1439" src={automic} alt="Automic Group — WordPress to HubSpot migration" />
          </div>
          <div className="file__image-wrapper">
            <img className="file__image" loading="lazy" width="1214" height="1820" src={gotsauss} alt="Anthony Attapattu — VueJS landing page" />
          </div>
          <div className="file__image-wrapper">
            <img className="file__image" loading="lazy" width="1132" height="637" src={play} alt="Play Innovation — HubSpot CMS custom code" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectFile;