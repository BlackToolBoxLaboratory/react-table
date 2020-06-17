import React, { useContext } from 'react';
import classnames from 'classnames';

import getStyle from '../utils/getStyle.js';
import { EnvContext } from '../utils/useContext.js';

const Compare = () => {
  const env = useContext(EnvContext);

  return (
    <table className="table_compare" style={getStyle(env.styleObj, ['table_compare'])}>
      <tbody className="compare_body" style={getStyle(env.styleObj, ['compare_body'])}>
        {
          env.headData.map((entry_row) => {
            return (
              <tr className={classnames('body_tr', `tr-${entry_row.id}`)} style={getStyle(env.styleObj, ['body_tr', `tr-${entry_row.id}`])} key={entry_row.id}>
                <th className={classnames('tr_th', `th-${entry_row.id}`)} style={getStyle(env.styleObj, ['tr_th', `th-${entry_row.id}`])}>
                  {(env.slotObj[`th-${entry_row.id}`])? ((typeof env.slotObj[`th-${entry_row.id}`] == 'function')? env.slotObj[`th-${entry_row.id}`](entry_row) : env.slotObj[`th-${entry_row.id}`]) : (entry_row.name)}
                </th>
                {
                  env.bodyData.map((entry_data, index_data) => {
                    return (
                      <td className={classnames('tr_td', `td-${entry_row.id}`, `td-${index_data}`)} style={getStyle(env.styleObj, ['tr_td', `td-${entry_row.id}`, `td-${index_data}`])} key={`${entry_data.id}_${index_data}`}>
                        {(env.slotObj[`td-${entry_row.id}`])? ((typeof env.slotObj[`td-${entry_row.id}`] == 'function')? env.slotObj[`td-${entry_row.id}`](entry_data, entry_row) : env.slotObj[`td-${entry_row.id}`]) : entry_data[entry_row.id]}
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default Compare;