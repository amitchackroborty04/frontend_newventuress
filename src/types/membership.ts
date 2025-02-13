export type MembershipPlan = {
  _id: string;
  planType: string;
  description: string;
  price: number;
  numberOfAuction: number;
  numberOfBids: number;
  createdAt: Date; // or Date if you plan to convert it to a Date object
  updatedAt: Date; // or Date if you plan to convert it to a Date object
  __v: number;
};

export type MembershipPlanResponse = {
  status: boolean,
  message: string,
  data: MembershipPlan[]
}
