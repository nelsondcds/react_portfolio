import React, { useState } from 'react';

function Project() {

  const [projects] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);


  return (
    <div>
      <div className="flex-row">
        test
      </div>
    </div>
  )
}

export default Project;
