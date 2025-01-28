export type Blog = {
  _id: string;
  image: string;
  title: string;
  description: string;
  createdAt: Date; // or Date if you plan to convert it to a Date object
  updatedAt: Date; // or Date if you plan to convert it to a Date object
  __v: number;
};
