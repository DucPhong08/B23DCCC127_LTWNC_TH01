import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchInitialDeadlines } from './features/deadlines/deadlinesThunk';
import { useDeadlineFilter } from './features/deadlines/hooks/useDeadlineFilter';
import { DeadlineForm } from './features/deadlines/components/DeadlineForm';
import { DeadlineFilter } from './features/deadlines/components/DeadlineFilter';
import { DeadlineList } from './features/deadlines/components/DeadlineList';
import { CheckSquare, AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.deadlines);

  // [Buổi 2]: Custom Hook quản lý lọc & thống kê
  const { filter, setFilter, filteredItems, counts } = useDeadlineFilter(items);

  // [Buổi 3]: Khởi chạy API giả lập khi load app
  useEffect(() => {
    dispatch(fetchInitialDeadlines());
  }, [dispatch]);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-top">
          <div className="brand-title">
            <div className="brand-icon">
              <CheckSquare size={24} />
            </div>
            <div>
              <h1>Student Deadline Tracker</h1>
              <p className="brand-subtitle">Quản lý bài tập & hạn nộp cá nhân — LTWNC TH01</p>
            </div>
          </div>

          <div className="header-stats">
            <div className="stat-pill">
              <span>Tổng bài:</span>
              <strong>{counts.all}</strong>
            </div>
            <div className="stat-pill">
              <span>Chưa xong:</span>
              <strong style={{ color: '#2563eb' }}>{counts.active}</strong>
            </div>
            <div className="stat-pill">
              <span>Quá hạn:</span>
              <strong style={{ color: '#dc2626' }}>{counts.overdue}</strong>
            </div>
            <div className="stat-pill">
              <span>Hoàn thành:</span>
              <strong style={{ color: '#16a34a' }}>{counts.completed}</strong>
            </div>
          </div>
        </div>
      </header>

      <main className="main-layout">
        <aside className="sidebar-form">
          <DeadlineForm />
        </aside>

        <section className="content-area">
          <DeadlineFilter
            currentFilter={filter}
            onFilterChange={setFilter}
            counts={counts}
          />

          {status === 'loading' && items.length === 0 ? (
            <div className="loading-box">
              <div className="spinner" />
              <p>Đang tải danh sách bài tập từ mock API...</p>
            </div>
          ) : status === 'failed' ? (
            <div className="form-error-banner">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          ) : (
            <DeadlineList items={filteredItems} />
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
