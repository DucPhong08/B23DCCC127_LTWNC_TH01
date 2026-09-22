import React from 'react';
import { useDeadlineCardContext } from './context';
import { PRIORITY_CONFIG } from '../../types';
import { BookOpen } from 'lucide-react';

export const Header: React.FC = () => {
  const { item } = useDeadlineCardContext();
  const priorityConfig = PRIORITY_CONFIG[item.priority];

  return (
    <div className="card-header">
      <div className="course-tag">
        <BookOpen size={14} />
        <span>{item.course}</span>
      </div>
      <span
        className="priority-badge"
        style={{
          color: priorityConfig.color,
          backgroundColor: `${priorityConfig.color}18`,
          borderColor: `${priorityConfig.color}40`
        }}
      >
        {priorityConfig.label}
      </span>
    </div>
  );
};
