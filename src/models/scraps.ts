export interface GetScrapsResponse {
  id: number;
  postId: number;
  title: string;
  createdAt: Date;
  viewCount: number;
  skillList: {
    id: number;
    name: string;
  }[];
}
