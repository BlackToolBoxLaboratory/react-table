import React from 'react';
import classnames from 'classnames';

import List from './List.jsx';
import Info from './Info.jsx';
import Compare from './Compare.jsx';

import getStyle from '../utils/getStyle.js';
import formatCamelCase from '../utils/formatCamelCase.js';
import { EnvContext, EventContext } from '../utils/useContext.js';

const Table = React.forwardRef((props, ref) => {
  const env = {
    headData : props.headData || [],
    bodyData : props.bodyData || [],
    styleObj : formatCamelCase(props.styleObj || {}),
    slotObj  : props.slotObj || {}
  };
  const event = {
    clickData : (entry) => {
      if (props.onDataClick) {
        props.onDataClick(entry);
      }
    }
  };

  return (
    <EnvContext.Provider value={env}>
      <EventContext.Provider value={event}>
        <div ref={ref} className={classnames('btb-react-table', props.className)} style={getStyle(env.styleObj, ['btb-react-table'])}>
          {
            (() => {
              switch (props.mode)
              {
              case 'info':
                return (
                  <Info/>
                );
              case 'compare':
                return (
                  <Compare/>
                );
              case 'list':
              default:
                return (
                  <List/>
                );
              }
            })()
          }
        </div>
      </EventContext.Provider>
    </EnvContext.Provider>
  );
});

export default Table;