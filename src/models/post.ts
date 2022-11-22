type Pageable = {
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
};

export type Content = {
  postId: number;
  title: string;
  createdAt: Date;
  viewCount: number;
  isScrapped: boolean;
  skillList: {
    id: number;
    name: string;
  }[];
};

type Page = {
  totalPages: number;
  totalElements: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  size: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
};

export interface GetPostResponse extends Page {
  pageParam: number;
  content: Content;
  pageable: Pageable;
}

export interface GetPostRequest {
  page: number;
  title?: string;
  status?: string;
  skillIds?: string | string[];
  size?: number;
  sort?: string;
}

export interface GetPostRequestWithId
  extends Omit<PostRequest, "userId" | "postType"> {
  id: number;
  recruitStatus: "RECRUITING" | "COMPLETE" | "FINISH";
  createdAt: string;
  postType: {
    value: string;
    engWord: string;
  };
}

export interface PostRequest {
  title: string;
  content: string;
  postType: "PROJECT" | "STUDY";
  progressType: "MIX" | "ONLINE" | "OFFLINE";
  userId?: string;
  contactInfo: string;
  recruitmentList: {
    id?: number;
    recruitType: string;
    recruitPeopleNum: number;
  }[];
  skillIds: number[];
}
