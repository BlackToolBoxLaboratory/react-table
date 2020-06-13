import React, { useContext } from 'react';

import getStyle from '../utils/getStyle.js';
import { EnvContext } from '../utils/useContext.js';

import ListHead from './ListHead.jsx';
import ListBody from './ListBody.jsx';

const List = () => {
  const env = useContext(EnvContext);

  return (
    <table className="container_list" style={getStyle(env.styleObj, ['container_list'])}>
      <ListHead />
      <ListBody />
    </table>
  );
};

export default List;