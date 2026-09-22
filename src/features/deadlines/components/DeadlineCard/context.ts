import { createContext, useContext } from 'react';
import type { Deadline } from '../../types';

export interface DeadlineCardContextValue {
  item: Deadline;
}

export const DeadlineCardContext = createContext<DeadlineCardContextValue | null>(null);

export function useDeadlineCardContext(): DeadlineCardContextValue {
  const context = useContext(DeadlineCardContext);
  if (!context) {
    throw new Error('Các thành phần con của DeadlineCard phải nằm trong <DeadlineCard>');
  }
  return context;
}
