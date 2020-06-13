import React, { useContext } from 'react';
import classnames from 'classnames';

import getStyle from '../utils/getStyle.js';
import { EnvContext } from '../utils/useContext.js';
// import { EnvContext, EventContext } from '../utils/useContext.js';

const Info = (props) => {
  const env = useContext(EnvContext);
  // const event = useContext(EventContext);

  return (
    <table className="info_table" style={getStyle(env.styleObj, ['info_table'])}>
      <tbody className="table_body" style={getStyle(env.styleObj, ['table_body'])}>
        {
          env.headData.map((entry_th) => {
            return (
              <tr className="body_tr" style={getStyle(env.styleObj, ['body_tr'])} key={entry_th.index}>
                <th className="tr_th" style={getStyle(env.styleObj, ['tr_th'])}>
                  {entry_th.name}
                </th>
                <td className="tr_td" style={getStyle(env.styleObj, ['tr_td'])}>
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