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
        env.bodyData.map((entry_tr, index_tr) => {
          return (
            <tr className={classnames('body_tr', `tr-${index_tr}`)} style={getStyle(env.styleObj, ['body_tr', `tr-${index_tr}`])} key={index_tr}>
              {
                env.headData.map((entry_td) => {
                  return (
                    <td className={classnames('tr_td', `td-${entry_td.index}`)} style={getStyle(env.styleObj, ['tr_td', `td-${entry_td.index}`])} key={entry_td.index}>
                      {entry_tr[entry_td.index]}
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