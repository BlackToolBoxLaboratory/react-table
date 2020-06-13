import React, { useContext } from 'react';

import getStyle from '../utils/getStyle.js';
import { EnvContext } from '../utils/useContext.js';

import InfoBlock from './InfoBlock.jsx';

const Info = () => {
  const env = useContext(EnvContext);

  return (
    <div className="container_info" style={getStyle(env.styleObj, ['container_info'])}>
      {
        env.bodyData.map((entry, index) => {
          return (
            <InfoBlock dataObj={entry} key={index}/>
          );
        })
      }
    </div>
  );
};

export default Info;