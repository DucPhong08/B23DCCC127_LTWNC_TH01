// [Buổi 1]: TypeScript Nâng Cao (Generics, Utility Types, Type Guards)

export type Priority = 'low' | 'medium' | 'high';

export type FilterStatus = 'ALL' | 'ACTIVE' | 'OVERDUE' | 'COMPLETED';

export interface Deadline {
  id: string;
  course: string;
  title: string;
  dueDate: string;
  priority: Priority;
  isCompleted: boolean;
  createdAt: string;
}

// 1. Generic Types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  timestamp: string;
}

export interface FilterResult<T> {
  items: T[];
  total: number;
  filteredCount: number;
}

// 2. Utility Types
export type CreateDeadlineDto = Omit<Deadline, 'id' | 'createdAt'>;

export type DeadlineStatusUpdate = Pick<Deadline, 'id' | 'isCompleted'>;

export type PriorityDisplayMap = Record<Priority, { label: string; color: string }>;

export const PRIORITY_CONFIG: PriorityDisplayMap = {
  low: { label: 'Thấp', color: '#10b981' },
  medium: { label: 'Trung bình', color: '#f59e0b' },
  high: { label: 'Khẩn cấp', color: '#ef4444' }
};

// 3. Type Guards
export function isPriority(value: unknown): value is Priority {
  return typeof value === 'string' && ['low', 'medium', 'high'].includes(value);
}

export function isDeadline(item: unknown): item is Deadline {
  if (typeof item !== 'object' || item === null) return false;
  const candidate = item as Record<string, unknown>;
  return (
    typeof candidate.id === 'string' &&
    typeof candidate.title === 'string' &&
    typeof candidate.course === 'string' &&
    typeof candidate.dueDate === 'string' &&
    isPriority(candidate.priority) &&
    typeof candidate.isCompleted === 'boolean'
  );
}

export function isOverdue(dueDate: string, isCompleted: boolean): boolean {
  if (isCompleted) return false;
  const due = new Date(dueDate).setHours(23, 59, 59, 999);
  const now = new Date().getTime();
  return now > due;
}
