import React from 'react';
import type { Deadline } from '../types';
import { DeadlineCard } from './DeadlineCard';
import { useAppDispatch } from '../../../app/hooks';
import { toggleDeadline, deleteDeadline } from '../deadlinesSlice';
import { Inbox } from 'lucide-react';

export interface DeadlineListProps {
  items: Deadline[];
}

export const DeadlineList: React.FC<DeadlineListProps> = ({ items }) => {
  const dispatch = useAppDispatch();

  const handleToggle = (id: string) => {
    dispatch(toggleDeadline(id));
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xoá bài tập này?')) {
      dispatch(deleteDeadline(id));
    }
  };

  if (items.length === 0) {
    return (
      <div className="empty-state-card">
        <Inbox size={48} className="empty-icon" />
        <h3>Không có bài tập nào</h3>
        <p>Không tìm thấy bài tập nào trong mục này hoặc bạn chưa tạo bài tập mới.</p>
      </div>
    );
  }

  return (
    <div className="deadline-grid">
      {items.map((item) => (
        <DeadlineCard key={item.id} item={item}>
          <DeadlineCard.Header />
          <DeadlineCard.Content />
          <div className="card-footer">
            <DeadlineCard.DueBadge />
            <DeadlineCard.Actions onToggle={handleToggle} onDelete={handleDelete} />
          </div>
        </DeadlineCard>
      ))}
    </div>
  );
};
