import React from 'react';
import type { Deadline } from '../../types';
import { DeadlineCardContext } from './context';

export interface DeadlineCardRootProps {
  item: Deadline;
  children: React.ReactNode;
}

export const DeadlineCardRoot: React.FC<DeadlineCardRootProps> = ({ item, children }) => {
  return (
    <DeadlineCardContext.Provider value={{ item }}>
      <div className={`deadline-card ${item.isCompleted ? 'is-completed' : ''}`}>
        {children}
      </div>
    </DeadlineCardContext.Provider>
  );
};
