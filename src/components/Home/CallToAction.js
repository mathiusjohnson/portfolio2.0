import React from 'react';
import SecondaryButton from '../SecondaryButton';

const CallToAction = ({titles}) => {

  return (
    <div className="flex justify-between mb-4">
      <h3 className="font-bold text-4xl w-1/4">
        Interested in doing a project together?
      </h3> 
      <div className="border-b-1 border-solid border-gray-300 w-1/3 mb-8"></div>
      <div className="flex justify-end items-center">
        <div>
          <SecondaryButton>Contact Me</SecondaryButton>
          </div> 
      </div>
     
    </div>
  );
};

export default CallToAction;