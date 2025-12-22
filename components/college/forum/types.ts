
export type ToastType = 'success' | 'error' | 'info';

export interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
}

export interface Post {
  id: string;
  author: string;
  avatar: string;
  role?: string;
  timeAgo: string;
  title: string;
  content: string;
  tags: string[];
  upvotes: number;
  commentsCount: number;
  isOnline?: boolean;
}
