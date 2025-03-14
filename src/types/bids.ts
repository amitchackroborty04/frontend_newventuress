export type BidsData = {
bidderName: string;
  biddingTime: string;
  bidAmount: number;
  bidValue: string
  createdAt: string
  userName: string
};

export type BidsResponse = {
  status: boolean;
  message: string;
  data: BidsData[];
};