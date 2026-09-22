export interface DueCalculationResult {
  text: string;
  isOverdue: boolean;
  daysDiff: number;
}

export function calculateDueStatus(dueDateStr: string, isCompleted: boolean): DueCalculationResult {
  if (isCompleted) {
    return {
      text: 'Đã hoàn thành',
      isOverdue: false,
      daysDiff: 0
    };
  }

  const targetDate = new Date(dueDateStr);
  targetDate.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const msDiff = targetDate.getTime() - today.getTime();
  const daysDiff = Math.round(msDiff / (1000 * 60 * 60 * 24));

  if (daysDiff < 0) {
    return {
      text: `Quá hạn ${Math.abs(daysDiff)} ngày`,
      isOverdue: true,
      daysDiff
    };
  }

  if (daysDiff === 0) {
    return {
      text: 'Hạn chót hôm nay',
      isOverdue: false,
      daysDiff: 0
    };
  }

  return {
    text: `Còn ${daysDiff} ngày`,
    isOverdue: false,
    daysDiff
  };
}

export function formatDisplayDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}
