# Student Deadline Tracker — LTWNC Bài thực hành 01

Ứng dụng quản lý deadline bài tập cá nhân dành cho sinh viên, hỗ trợ theo dõi tiến độ, phân loại mức độ ưu tiên và kiểm soát thời hạn nộp bài hiệu quả.

---

## 👤 Thông tin sinh viên

- **Họ và tên:** Nguyễn Đức Phong
- **Mã sinh viên:** `B23DCCC127`
- **Môn học:** Lập trình Web nâng cao (LTWNC - N2)
- **Mã lớp học phần:** RIPT1411-20261-02
- **Tên Repository nộp bài:** `B23DCCC127_LTWNC_TH01`
- **GitHub URL:** https://github.com/DucPhong08/B23DCCC127_LTWNC_TH01

---

## 🎯 Bảng Tra Cứu Tiêu Chí Chấm Điểm (Buổi 1 — 2 — 3)

| Buổi | Nội dung kiến thức | Triển khai trong dự án | File nguồn |
| :--- | :--- | :--- | :--- |
| **Buổi 1** | **TypeScript nâng cao**<br>• *Generic Types*<br>• *Utility Types*<br>• *Type Guards* | • `ApiResponse<T>`, `FilterResult<T>`<br>• `Omit`, `Pick`, `Record`<br>• `isDeadline()`, `isPriority()`, `isOverdue()` | [`src/features/deadlines/types.ts`](src/features/deadlines/types.ts) |
| **Buổi 2** | **React Design Patterns**<br>• *Custom Hook nâng cao*<br>• *Compound Component Pattern* | • `useDeadlineFilter()` lọc và thống kê đếm<br>• `<DeadlineCard>` gồm `.Header`, `.Content`, `.DueBadge`, `.Actions` | [`src/features/deadlines/hooks/useDeadlineFilter.ts`](src/features/deadlines/hooks/useDeadlineFilter.ts)<br>[`src/features/deadlines/components/DeadlineCard/`](src/features/deadlines/components/DeadlineCard/) |
| **Buổi 3** | **Redux Toolkit + TypeScript**<br>• *Feature-based structure*<br>• *Typed hooks*<br>• *createAsyncThunk* | • Cấu trúc thư mục feature slice chuẩn<br>• `useAppDispatch`, `useAppSelector`<br>• `fetchInitialDeadlines` giả lập Mock API | [`src/app/store.ts`](src/app/store.ts)<br>[`src/app/hooks.ts`](src/app/hooks.ts)<br>[`src/features/deadlines/deadlinesSlice.ts`](src/features/deadlines/deadlinesSlice.ts)<br>[`src/features/deadlines/deadlinesThunk.ts`](src/features/deadlines/deadlinesThunk.ts) |

---

## 📋 Danh sách chức năng hoàn thành

1. ✅ **Hiển thị danh sách bài tập**: Môn học, tên bài tập, hạn nộp, độ ưu tiên (Thấp/Trung bình/Khẩn cấp), trạng thái hoàn thành.
2. ✅ **Thêm bài tập mới**: Form nhập liệu có validation đầy đủ, tự động tính toán thời hạn.
3. ✅ **Đánh dấu hoàn thành / Bỏ đánh dấu**: Cập nhật trạng thái trực quan với nút tương tác một chạm.
4. ✅ **Xoá bài tập**: Hỗ trợ xác nhận trước khi xoá.
5. ✅ **Lọc theo trạng thái**: 4 tab lọc (Tất cả / Chưa hoàn thành / Quá hạn / Đã hoàn thành) kèm badge số lượng realtime.
6. ✅ **Đếm ngược hạn nộp**: Hiển thị chính xác `"Còn X ngày"`, `"Hạn chót hôm nay"`, hoặc `"Quá hạn Y ngày"`.
7. ✅ **Mock API ban đầu**: Khởi tạo danh sách bài tập mẫu qua `createAsyncThunk` với hiệu ứng Loading và xử lý lỗi.

---

## 🚀 Hướng dẫn cài đặt & chạy ứng dụng

### Yêu cầu hệ thống
- Node.js >= 18
- npm hoặc yarn/pnpm

### Các bước chạy
```bash
# 1. Cài đặt các thư viện phụ thuộc
npm install

# 2. Khởi chạy môi trường phát triển (Dev Server)
npm run dev

# 3. Kiểm tra kiểm định TypeScript & đóng gói production
npm run build
```

---

## 📦 Hướng dẫn nộp bài lên GitHub

1. Repository được đặt tên chính xác là: `B23DCCC127_LTWNC_TH01`.
2. Nếu đặt chế độ **Private**, đã mời giảng viên qua username: `nvnhan`.
3. Lệnh đẩy code lên GitHub:
```bash
rtk git add .
rtk git commit -m "feat(theme): switch to modern wide light theme and update docs"
rtk git push -u origin main
```
