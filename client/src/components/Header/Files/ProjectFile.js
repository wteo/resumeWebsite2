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
            <img className="file__image" src={etikette} alt="Etikette Candles" />
          </div>
          <div className="file__image-wrapper">
            <img className="file__image" src={automic} alt="Automic Group" />
          </div>
          <div className="file__image-wrapper">
            <img className="file__image" src={gotsauss} alt="Gotsauss" />
          </div>
          <div className="file__image-wrapper">
            <img className="file__image" src={play} alt="Play Innovation" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectFile;