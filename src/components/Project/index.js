import React from 'react';
import github from '../../assets/img/github.png';

function Project({ project }) {

  const {name, filename, link, repo} = project;

  const bg = require(`../../assets/img/${filename}`).default;


  return (
    <div className="project" style={{
      margin: '0 auto 5vh auto',
      backgroundImage: 'url(' + bg + ')',
      backgroundSize: 'cover',
      width: '30vw',
      height: '30vh'
    }}>
      <div className="fade">
        <div className="flex-row aln">
          <a href={repo} className="full-fade">{name}</a>
          <div className="icon full-fade smol">
              <a href={link}><img src={github} alt="github icon." /></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project;
