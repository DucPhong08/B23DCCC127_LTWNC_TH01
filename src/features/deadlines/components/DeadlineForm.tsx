import React, { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { addDeadline } from '../deadlinesSlice';
import type { CreateDeadlineDto, Priority } from '../types';
import { PlusCircle, Calendar, Tag, AlertCircle, BookOpen } from 'lucide-react';

export const DeadlineForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [course, setCourse] = useState('');
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!course.trim() || !title.trim() || !dueDate) {
      setError('Vui lòng nhập đầy đủ môn học, tên bài tập và hạn nộp!');
      return;
    }

    const payload: CreateDeadlineDto = {
      course: course.trim(),
      title: title.trim(),
      dueDate,
      priority,
      isCompleted: false
    };

    dispatch(addDeadline(payload));

    // Reset form
    setCourse('');
    setTitle('');
    setDueDate('');
    setPriority('medium');
    setError(null);
  };

  return (
    <form className="deadline-form-card" onSubmit={handleSubmit}>
      <div className="form-header">
        <PlusCircle size={20} className="text-primary" />
        <h2>Thêm bài tập mới</h2>
      </div>

      {error && (
        <div className="form-error-banner">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="course-input">
            <BookOpen size={15} />
            Môn học
          </label>
          <input
            id="course-input"
            type="text"
            placeholder="VD: Lập trình Web nâng cao"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="title-input">
            <Tag size={15} />
            Tên bài tập
          </label>
          <input
            id="title-input"
            type="text"
            placeholder="VD: Bài thực hành 01"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="due-date-input">
            <Calendar size={15} />
            Hạn nộp
          </label>
          <input
            id="due-date-input"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="priority-select">
            <AlertCircle size={15} />
            Độ ưu tiên
          </label>
          <select
            id="priority-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
          >
            <option value="low">Thấp (Xanh)</option>
            <option value="medium">Trung bình (Vàng)</option>
            <option value="high">Khẩn cấp (Đỏ)</option>
          </select>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-submit">
          <PlusCircle size={16} />
          <span>Thêm Deadline</span>
        </button>
      </div>
    </form>
  );
};
