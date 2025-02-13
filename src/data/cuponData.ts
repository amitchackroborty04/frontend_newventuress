export interface CuponTableItemsType {
    code: string;
    id: number
    type: string
    amount: number
    store: string
    limit: number
    expiredDate: string
    time:string
  }
  
  export const CuponData: CuponTableItemsType[] = [
    {
      code: "STANDARD_PARTNER_2024",
      id: 1,
      type : "Percentage Discount",
      amount: 55,
      store: " Island Guy Smokes",
      limit: 7,
      expiredDate: "2 October 2024 ",
      time : "16:43"

    },
    {
      code: "STANDARD_PARTNER_2024",
      id: 2,
      type : "Percentage Discount",
      amount: 55,
      store: " Island Guy Smokes",
      limit: 3,
      expiredDate: "2 October 2024 ",
        time : "16:43"
    },

    
    
  ];