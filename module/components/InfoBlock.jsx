import React, { useContext } from 'react';
import classnames from 'classnames';

import getStyle from '../utils/getStyle.js';
import { EnvContext } from '../utils/useContext.js';
// import { EnvContext, EventContext } from '../utils/useContext.js';

const Info = (props) => {
  const env = useContext(EnvContext);
  // const event = useContext(EventContext);

  return (
    <table className={classnames('info_table', props.className)} style={getStyle(env.styleObj, ['info_table', props.className])}>
      <tbody className="table_body" style={getStyle(env.styleObj, ['table_body'])}>
        {
          env.headData.map((entry_th) => {
            return (
              <tr className={classnames('body_tr', `tr-${entry_th.index}`)} style={getStyle(env.styleObj, ['body_tr', `tr-${entry_th.index}`])} key={entry_th.index}>
                <th className={classnames('tr_th', `th-${entry_th.index}`)} style={getStyle(env.styleObj, ['tr_th', `th-${entry_th.index}`])}>
                  {entry_th.name}
                </th>
                <td className={classnames('tr_td', `td-${entry_th.index}`)} style={getStyle(env.styleObj, ['tr_td', `td-${entry_th.index}`])}>
                  {props.dataObj[entry_th.index]}
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default Info;