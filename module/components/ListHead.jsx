import React, { useContext } from 'react';
import classnames from 'classnames';

import getStyle from '../utils/getStyle.js';
import { EnvContext } from '../utils/useContext.js';
// import { EnvContext, EventContext } from '../utils/useContext.js';

const ListHead = () => {
  const env = useContext(EnvContext);
  // const event = useContext(EventContext);

  return (
    <thead className="list_head" style={getStyle(env.styleObj, ['list_head'])}>
      {
        (env.headData.length) ?
          (
            <tr className="head_tr" style={getStyle(env.styleObj, ['head_tr'])}>
              {
                env.headData.map((entry_th) => {
                  return (
                    <th className={classnames('tr_th', `th-${entry_th.index}`)} key={entry_th.index} style={getStyle(env.styleObj, ['tr_th',  `th-${entry_th.index}`])}>
                      {entry_th.name}
                    </th>
                  );
                })
              }
            </tr>
          ): []
      }
    </thead>
  );
};

export default ListHead;