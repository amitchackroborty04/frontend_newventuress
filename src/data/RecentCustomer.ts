export interface RecentCustomerType {

    id: number
    order: string
    amount: number

}

export const Recentcustomer: RecentCustomerType[] = [
    {
        id: 1,
        order: "All",
        amount: 55,
    },
    {
        id: 2,
        order: "pending",
        amount: 55,
    },
    {
        id: 3,
        order: "Trash",
        amount: 55,
    },
    {
        id: 4,
        order: "Spam",
        amount: 55,
    },
    {
        id: 5,
        order: "Spam",
        amount: 55,
    },


];