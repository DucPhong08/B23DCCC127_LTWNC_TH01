import React from 'react';
import { useDeadlineCardContext } from './context';
import { formatDisplayDate } from '../../../../utils/dateUtils';
import { Calendar } from 'lucide-react';

export const Content: React.FC = () => {
  const { item } = useDeadlineCardContext();

  return (
    <div className="card-content">
      <h3 className={`card-title ${item.isCompleted ? 'completed-text' : ''}`}>
        {item.title}
      </h3>
      <div className="due-date-meta">
        <Calendar size={14} />
        <span>Hạn nộp: {formatDisplayDate(item.dueDate)}</span>
      </div>
    </div>
  );
};
