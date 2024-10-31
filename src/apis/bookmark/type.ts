export interface IBookmarkParamDataType {
  pageNumber?: number;
  size: number;
  direction: string; // 'ASC' | 'DESC';
  property: string;
  categoryId?: string | number | null;
  isFavorite?: boolean;
  keyword?: string;
}

export interface IBookmarkListResponseDataType {
  pageInfo: {
    pageNumber: number;
    size: number;
    total: number;
    lastPage: number;
  };
  content: Array<{
    bookMarkId: number;
    categoryNames: Array<string>; // 이후 삭제
    categoryDtos: Array<{
      categoryName: string;
      categoryId: number;
    }>;
    faviconUrl: string;
    isFavorite: boolean;
    isRead: boolean;
    memo: string;
    readCount: number;
    representImageUrl: string;
    siteName: string;
    title: string;
    url: string;
    userInsertRepresentImage: {
      extension: string;
      file: string;
      name: string;
      size: number;
      uuid: string;
    };
  }>;
}

export interface ISaveBookmarkDataType {
  categoryIds: Array<number>;
  url: string;
  title: string;
  memo: string;
  favicon?: string;
  siteName?: string;
  representImageUrl: string;
  userInsertRepresentImage?: {
    name: string;
    file: string;
    uuid: string;
    size: number;
    extension: string;
  };
}

export interface BookmarkLikeDataType {
  bookMarkId: number;
  isFavorite: boolean;
}

export interface IBookmarkSearchListResponseDataType {
  pageInfo: {
    pageNumber: number;
    size: number;
    total: number;
    lastPage: number;
  };
  content: Array<{
    bookMarkId: number;
    title: string;
    memo: string;
    url: string;
    faviconUrl: string;
    representImageUrl: string;
    siteName: string;
    userInsertRepresentImage?: {
      name: string;
      file: string;
      uuid: string;
      size: number;
      extension: string;
    };
    categoryNames: Array<string>; // 이후 삭제
    categoryDtos: Array<{
      categoryName: string;
      categoryId: number;
    }>;
  }>;
}
