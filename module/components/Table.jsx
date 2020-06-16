import React from 'react';
import classnames from 'classnames';

import List from './List.jsx';
import Info from './Info.jsx';

import getStyle from '../utils/getStyle.js';
import { EnvContext, EventContext } from '../utils/useContext.js';

const Table = (props) => {
  const env = {
    headData : props.headData || [],
    bodyData : props.bodyData || [],
    styleObj : props.styleObj || {},
    slotObj  : props.slotObj || {}
  };
  const event = {
    clickData : (entry) => {
      if (props.onDataClick) {
        props.onDataClick(entry);
      }
    }
  };

  let tableMode = (props.mode === 'info')? props.mode : 'list';
  return (
    <EnvContext.Provider value={env}>
      <EventContext.Provider value={event}>
        <div className={classnames('btb-react-table', props.className)} style={getStyle(env.styleObj, ['btb-react-table'])}>
          {
            (() => {
              switch (tableMode)
              {
              case 'list':
                return (
                  <List/>
                );
              case 'info':
                return (
                  <Info/>
                );
              }
            })()
          }
        </div>
      </EventContext.Provider>
    </EnvContext.Provider>
  );
};

export default Table;