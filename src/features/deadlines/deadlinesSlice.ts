// [Buổi 3]: Redux Toolkit Slice + TypeScript
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Deadline, CreateDeadlineDto } from './types';
import { fetchInitialDeadlines } from './deadlinesThunk';

export interface DeadlinesState {
  items: Deadline[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DeadlinesState = {
  items: [],
  status: 'idle',
  error: null
};

export const deadlinesSlice = createSlice({
  name: 'deadlines',
  initialState,
  reducers: {
    addDeadline: (state, action: PayloadAction<CreateDeadlineDto>) => {
      const newDeadline: Deadline = {
        ...action.payload,
        id: `dl-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        isCompleted: false,
        createdAt: new Date().toISOString()
      };
      state.items.unshift(newDeadline);
    },
    toggleDeadline: (state, action: PayloadAction<string>) => {
      const target = state.items.find((item) => item.id === action.payload);
      if (target) {
        target.isCompleted = !target.isCompleted;
      }
    },
    deleteDeadline: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialDeadlines.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchInitialDeadlines.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.data;
      })
      .addCase(fetchInitialDeadlines.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Đã xảy ra lỗi khi tải dữ liệu';
      });
  }
});

export const { addDeadline, toggleDeadline, deleteDeadline } = deadlinesSlice.actions;

export default deadlinesSlice.reducer;
