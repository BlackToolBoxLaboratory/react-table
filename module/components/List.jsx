import React, { useContext } from 'react';

import getStyle from '../utils/getStyle.js';
import { EnvContext } from '../utils/useContext.js';

import ListHead from './ListHead.jsx';
import ListBody from './ListBody.jsx';

const List = () => {
  const env = useContext(EnvContext);

  return (
    <table className="table_list" style={getStyle(env.styleObj, ['table_list'])}>
      <ListHead />
      <ListBody />
    </table>
  );
};

export default List;