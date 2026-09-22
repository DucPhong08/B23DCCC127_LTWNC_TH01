import React from 'react';
import type { FilterStatus } from '../types';
import type { FilterCounts } from '../hooks/useDeadlineFilter';
import { Layers, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

export interface DeadlineFilterProps {
  currentFilter: FilterStatus;
  onFilterChange: (status: FilterStatus) => void;
  counts: FilterCounts;
}

export const DeadlineFilter: React.FC<DeadlineFilterProps> = ({
  currentFilter,
  onFilterChange,
  counts
}) => {
  const tabs: { key: FilterStatus; label: string; count: number; icon: React.ReactNode }[] = [
    {
      key: 'ALL',
      label: 'Tất cả',
      count: counts.all,
      icon: <Layers size={16} />
    },
    {
      key: 'ACTIVE',
      label: 'Chưa hoàn thành',
      count: counts.active,
      icon: <Clock size={16} />
    },
    {
      key: 'OVERDUE',
      label: 'Quá hạn',
      count: counts.overdue,
      icon: <AlertTriangle size={16} />
    },
    {
      key: 'COMPLETED',
      label: 'Đã hoàn thành',
      count: counts.completed,
      icon: <CheckCircle size={16} />
    }
  ];

  return (
    <div className="filter-tabs-wrapper">
      <div className="filter-tabs">
        {tabs.map((tab) => {
          const isActive = currentFilter === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              className={`filter-tab-btn ${isActive ? 'is-active' : ''} ${
                tab.key === 'OVERDUE' && tab.count > 0 ? 'has-overdue' : ''
              }`}
              onClick={() => onFilterChange(tab.key)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
              <span className="tab-count-badge">{tab.count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
