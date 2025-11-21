export type UserDetailsNav = {
  path: string;
  label: string;
};

export const userDetailsNavs: UserDetailsNav[] = [
  {
    path: "/",
    label: "General Details",
  },
  {
    path: "documents",
    label: "Documents",
  },
  {
    path: "bank-details",
    label: "Bank Details",
  },
  {
    path: "loans",
    label: "Loans",
  },
  {
    path: "savings",
    label: "Savings",
  },
  {
    path: "app-and-system",
    label: "App and System",
  },
];
