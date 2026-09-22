// [Buổi 3]: Redux Toolkit createAsyncThunk (Mock API)
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ApiResponse, Deadline } from './types';

// Dữ liệu mẫu ban đầu mô phỏng database
const INITIAL_MOCK_DATA: Deadline[] = [
  {
    id: 'dl-1',
    course: 'Lập trình Web nâng cao',
    title: 'Bài thực hành 01 - TypeScript & Redux Toolkit',
    dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    priority: 'high',
    isCompleted: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 'dl-2',
    course: 'Kiến trúc phần mềm',
    title: 'Thiết kế sơ đồ Sequence & Class Diagram',
    dueDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    priority: 'medium',
    isCompleted: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 'dl-3',
    course: 'Cơ sở dữ liệu nâng cao',
    title: 'Tối ưu hóa chỉ mục Index & Query Execution Plan',
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    priority: 'low',
    isCompleted: true,
    createdAt: new Date().toISOString()
  }
];

export const fetchInitialDeadlines = createAsyncThunk<ApiResponse<Deadline[]>, void>(
  'deadlines/fetchInitialDeadlines',
  async (_, { rejectWithValue }) => {
    try {
      // Giả lập độ trễ mạng 700ms
      await new Promise((resolve) => setTimeout(resolve, 700));

      const response: ApiResponse<Deadline[]> = {
        data: INITIAL_MOCK_DATA,
        status: 200,
        message: 'Lấy danh sách bài tập thành công',
        timestamp: new Date().toISOString()
      };

      return response;
    } catch {
      return rejectWithValue('Không thể kết nối đến máy chủ mock API');
    }
  }
);
