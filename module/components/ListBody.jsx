import React, { useContext } from 'react';
import classnames from 'classnames';

import getStyle from '../utils/getStyle.js';
import { EnvContext } from '../utils/useContext.js';
// import { EnvContext, EventContext } from '../utils/useContext.js';

const ListBody = () => {
  const env = useContext(EnvContext);
  // const event = useContext(EventContext);

  return (
    <tbody className="list_body" style={getStyle(env.styleObj, ['list_body'])}>
      {
        env.bodyData.map((entry_data, index_data) => {
          return (
            <tr className={classnames('body_tr', `tr-${index_data}`)} style={getStyle(env.styleObj, ['body_tr', `tr-${index_data}`])} key={index_data}>
              {
                env.headData.map((entry_col) => {
                  return (
                    <td className={classnames('tr_td', `td-${entry_col.id}`)} style={getStyle(env.styleObj, ['tr_td', `td-${entry_col.id}`])} key={entry_col.id}>
                      {(env.slotObj[`td-${entry_col.id}`])? ((typeof env.slotObj[`td-${entry_col.id}`] == 'function')? env.slotObj[`td-${entry_col.id}`](entry_data, entry_col) : env.slotObj[`td-${entry_col.id}`]) : entry_data[entry_col.id]}
                    </td>
                  );
                })
              }
            </tr>
          );
        })
      }
    </tbody>
  );
};

export default ListBody;