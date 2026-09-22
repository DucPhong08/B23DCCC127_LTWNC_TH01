import React from 'react';
import { useDeadlineCardContext } from './context';
import { calculateDueStatus } from '../../../../utils/dateUtils';
import { Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const DueBadge: React.FC = () => {
  const { item } = useDeadlineCardContext();
  const status = calculateDueStatus(item.dueDate, item.isCompleted);

  if (item.isCompleted) {
    return (
      <div className="status-badge status-completed">
        <CheckCircle2 size={13} />
        <span>Đã hoàn thành</span>
      </div>
    );
  }

  if (status.isOverdue) {
    return (
      <div className="status-badge status-overdue">
        <AlertTriangle size={13} />
        <span>{status.text}</span>
      </div>
    );
  }

  return (
    <div className={`status-badge ${status.daysDiff === 0 ? 'status-today' : 'status-pending'}`}>
      <Clock size={13} />
      <span>{status.text}</span>
    </div>
  );
};
