export interface MemberTableDataType  {
    id: number;
    Plan: string;
    "Pay Method": string;
    Store: string;
    Time: string;
  };
  
  export const MemberTableDataItems: MemberTableDataType[] = [
    { id: 1, Plan: "Premium", "Pay Method": "Credit Card", Store: "2", Time: "one time" },
    { id: 2, Plan: "Standard", "Pay Method": "PayPal", Store: "2", Time: "one time " },
    { id: 3, Plan: "Basic", "Pay Method": "Bank Transfer", Store: "3", Time: "one time" },
  
  ];