// [Buổi 2]: Custom Hook Nâng Cao (Quản lý bộ lọc và thống kê số liệu)
import { useState, useMemo } from 'react';
import type { Deadline, FilterStatus } from '../types';
import { isOverdue } from '../types';

export interface FilterCounts {
  all: number;
  active: number;
  overdue: number;
  completed: number;
}

export function useDeadlineFilter(items: Deadline[]) {
  const [filter, setFilter] = useState<FilterStatus>('ALL');

  const counts: FilterCounts = useMemo(() => {
    let active = 0;
    let overdue = 0;
    let completed = 0;

    for (const item of items) {
      if (item.isCompleted) {
        completed++;
      } else if (isOverdue(item.dueDate, item.isCompleted)) {
        overdue++;
      } else {
        active++;
      }
    }

    return {
      all: items.length,
      active,
      overdue,
      completed
    };
  }, [items]);

  const filteredItems = useMemo(() => {
    switch (filter) {
      case 'ACTIVE':
        return items.filter((item) => !item.isCompleted && !isOverdue(item.dueDate, item.isCompleted));
      case 'OVERDUE':
        return items.filter((item) => !item.isCompleted && isOverdue(item.dueDate, item.isCompleted));
      case 'COMPLETED':
        return items.filter((item) => item.isCompleted);
      case 'ALL':
      default:
        return items;
    }
  }, [items, filter]);

  return {
    filter,
    setFilter,
    filteredItems,
    counts,
    total: items.length
  };
}
