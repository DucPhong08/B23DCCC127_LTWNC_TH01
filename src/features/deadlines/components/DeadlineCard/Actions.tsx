import React from 'react';
import { useDeadlineCardContext } from './context';
import { Check, RotateCcw, Trash2 } from 'lucide-react';

export interface ActionsProps {
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const Actions: React.FC<ActionsProps> = ({ onToggle, onDelete }) => {
  const { item } = useDeadlineCardContext();

  return (
    <div className="card-actions">
      <button
        type="button"
        className={`btn-toggle ${item.isCompleted ? 'btn-toggle-reopen' : 'btn-toggle-complete'}`}
        onClick={() => onToggle(item.id)}
        title={item.isCompleted ? 'Đánh dấu chưa hoàn thành' : 'Đánh dấu hoàn thành'}
      >
        {item.isCompleted ? (
          <>
            <RotateCcw size={15} />
            <span>Làm lại</span>
          </>
        ) : (
          <>
            <Check size={15} />
            <span>Hoàn thành</span>
          </>
        )}
      </button>

      <button
        type="button"
        className="btn-delete"
        onClick={() => onDelete(item.id)}
        title="Xoá bài tập này"
      >
        <Trash2 size={15} />
      </button>
    </div>
  );
};
