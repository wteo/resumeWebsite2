import React from 'react';
import { Link } from 'react-router-dom';

import './Files.scss';

function BlogFile() {

  return (
    <Link className="file lime" to="https://medium.com/@wendyteo.wy" target="_blank" rel="noopener noreferrer">
      <h3 className="file__title">Read My Blogs</h3>
      <hr className="file__divider" />
      <p className="file__content">
        Explore my in-depth analyses of personal and work projects, where I share challenges, solutions, and insights into the creative process.
      </p>
    </Link>
  );
}

export default BlogFile;