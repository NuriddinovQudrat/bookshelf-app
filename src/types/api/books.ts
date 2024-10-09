export interface BookProps {
  author: string;
  cover: string;
  id: number;
  isbn: string;
  pages: number;
  published: any;
  title: string;
}

export interface BookWithStatusProps {
  book: BookProps;
  status: 0 | 1 | 2;
}
