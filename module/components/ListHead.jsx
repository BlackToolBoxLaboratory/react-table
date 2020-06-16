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
                env.headData.map((entry_col) => {
                  return (
                    <th className={classnames('tr_th', `th-${entry_col.id}`)} key={entry_col.id} style={getStyle(env.styleObj, ['tr_th',  `th-${entry_col.id}`])}>
                      {(env.slotObj[`th-${entry_col.id}`])? ((typeof env.slotObj[`th-${entry_col.id}`] == 'function')? env.slotObj[`th-${entry_col.id}`](entry_col) : env.slotObj[`th-${entry_col.id}`]) : (entry_col.name)}
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