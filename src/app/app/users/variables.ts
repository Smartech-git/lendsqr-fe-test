import { IconName } from "@/components/icons";
import { ChipStatus } from "@/components/ui/chip";
import { Column } from "@/components/ui/table";

export type UserMetrics = {
  icon: IconName;
  title: string;
  value: number;
};

export const usersMetrics: UserMetrics[] = [
  {
    icon: "icon-users-outline",
    title: "Users",
    value: 2453,
  },
  {
    icon: "icon-users-outline-01",
    title: "Active Users",
    value: 2453,
  },
  {
    icon: "icon-np-loan",
    title: "Users with Loans",
    value: 2453,
  },
  {
    icon: "icon-np-money",
    title: "Users with Savings",
    value: 2453,
  },
];

export const usersTableCol: Column[] = [
  {
    key: "organization",
    label: "Organization",
    sortable: true,
  },
  {
    key: "username",
    label: "Username",
    sortable: true,
    hiddenOnMobile: true,
  },
  {
    key: "email",
    label: "Email",
    sortable: true,
  },
  {
    key: "phoneNumber",
    label: "Phone number",
    sortable: true,
  },
  {
    key: "dateJoined",
    label: "Date joined",
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
  },
  {
    key: "action",
    label: "Action",
    hidden: true,
  },
];

export type UsersData = {
  id: string | number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: ChipStatus;
  action?: any;
};

export type ColumeKey = keyof UsersData;

export const users: UsersData[] = [
  {
    id: 1,
    organization: "Globex Corp.",
    username: "astronut21",
    email: "astro21@globex.com",
    phoneNumber: "09081817380",
    dateJoined: "2023-01-15 14:56",
    status: "Active",
  },
  {
    id: 2,
    organization: "Umbrella LLC",
    username: "eagle.eye",
    email: "eagle@umbrella.io",
    phoneNumber: "08100915347",
    dateJoined: "2022-11-03 08:27",
    status: "Inactive",
  },
  {
    id: 3,
    organization: "Initech",
    username: "samwise.g",
    email: "sgamgee@initech.net",
    phoneNumber: "07012345678",
    dateJoined: "2023-05-27 22:15",
    status: "Pending",
  },
  {
    id: 4,
    organization: "Wayne Enterprises",
    username: "brucew",
    email: "bruce@wayne.com",
    phoneNumber: "08123456789",
    dateJoined: "2021-09-15 07:44",
    status: "Blacklisted",
  },
  {
    id: 5,
    organization: "Stark Industries",
    username: "ironman",
    email: "tony@stark.com",
    phoneNumber: "08011223344",
    dateJoined: "2023-04-01 19:02",
    status: "Active",
  },
  {
    id: 6,
    organization: "Black Mesa",
    username: "crowbar",
    email: "gordon@mesa.org",
    phoneNumber: "09112233445",
    dateJoined: "2022-12-24 17:00",
    status: "Pending",
  },
  {
    id: 7,
    organization: "Aperture Labs",
    username: "portalqueen",
    email: "chell@aperture.co",
    phoneNumber: "08044443333",
    dateJoined: "2021-05-20 15:53",
    status: "Inactive",
  },
  {
    id: 8,
    organization: "Oscorp",
    username: "harryos",
    email: "harry@oscorp.biz",
    phoneNumber: "07098765432",
    dateJoined: "2023-09-12 09:38",
    status: "Blacklisted",
  },
  {
    id: 9,
    organization: "Wonka Works",
    username: "sweetgenius",
    email: "wonka@choco.com",
    phoneNumber: "09011221122",
    dateJoined: "2022-11-30 06:17",
    status: "Active",
  },
  {
    id: 10,
    organization: "Acme Inc.",
    username: "roadrunner",
    email: "run@acme.com",
    phoneNumber: "08123459998",
    dateJoined: "2023-02-13 13:45",
    status: "Inactive",
  },
  {
    id: 11,
    organization: "Cyberdyne Systems",
    username: "t-800",
    email: "terminator@cyberdyne.ai",
    phoneNumber: "07087654321",
    dateJoined: "2023-03-17 01:10",
    status: "Pending",
  },
  {
    id: 12,
    organization: "Duff Beer",
    username: "homer.simpson",
    email: "homer@duffbeer.com",
    phoneNumber: "09088887777",
    dateJoined: "2021-11-15 22:20",
    status: "Inactive",
  },
  {
    id: 13,
    organization: "Umbrella LLC",
    username: "red.queen",
    email: "redqueen@umbrella.io",
    phoneNumber: "08033221144",
    dateJoined: "2023-10-03 11:23",
    status: "Blacklisted",
  },
  {
    id: 14,
    organization: "Stark Industries",
    username: "peppotts",
    email: "pepper@stark.com",
    phoneNumber: "08033445566",
    dateJoined: "2022-08-19 17:42",
    status: "Active",
  },
  {
    id: 15,
    organization: "Initech",
    username: "johndoe",
    email: "doe.j@initech.net",
    phoneNumber: "07045557887",
    dateJoined: "2022-06-12 07:07",
    status: "Inactive",
  },
  {
    id: 16,
    organization: "Globex Corp.",
    username: "lisaG",
    email: "lisa.g@globex.com",
    phoneNumber: "09123456780",
    dateJoined: "2023-07-23 10:29",
    status: "Pending",
  },
  {
    id: 17,
    organization: "Wayne Enterprises",
    username: "alfred.p",
    email: "alfred@wayne.com",
    phoneNumber: "08112223344",
    dateJoined: "2021-12-02 12:30",
    status: "Active",
  },
  {
    id: 18,
    organization: "Techtronix",
    username: "coderx",
    email: "code@techtronix.us",
    phoneNumber: "08099887766",
    dateJoined: "2022-10-14 16:08",
    status: "Inactive",
  },
  {
    id: 19,
    organization: "Black Mesa",
    username: "helium",
    email: "helium@mesa.org",
    phoneNumber: "07060051122",
    dateJoined: "2023-01-05 04:57",
    status: "Pending",
  },
  {
    id: 20,
    organization: "Acme Inc.",
    username: "coyote",
    email: "wile.e@acme.com",
    phoneNumber: "09022334455",
    dateJoined: "2022-07-08 20:13",
    status: "Blacklisted",
  },
];

export const organization: Options = [
  {
    label: "Globex Corp.",
    value: "Globex Corp.",
  },
  {
    label: "Wayne Enterprises",
    value: "Wayne Enterprises",
  },
  {
    label: "Techtronix",
    value: "Techtronix",
  },
  {
    label: "Black Mesa",
    value: "Black Mesa",
  },
  {
    label: "Acme Inc.",
    value: "Acme Inc.",
  },
];

export const status: Options = [
  {
    label: "Active",
    value: "Active",
  },
  {
    label: "Inactive",
    value: "Inactive",
  },
  {
    label: "Pending",
    value: "Pending",
  },
  {
    label: "Blacklisted",
    value: "Blacklisted",
  },
];

export type UserDetailsBlock = {
  title: string;
  value: string;
};

export type UserDetailsSection = {
  title: string;
  blocks: UserDetailsBlock[];
};

export const userDetailsData: UserDetailsSection[] = [
  {
    title: "Personal Information",
    blocks: [
      { title: "FULL NAME", value: "Grace Effiom" },
      { title: "PHONE NUMBER", value: "07060780922" },
      { title: "EMAIL ADDRESS", value: "grace@gmail.com" },
      { title: "BVN", value: "07060780922" },
      { title: "GENDER", value: "Female" },
      { title: "MARITAL STATUS", value: "Single" },
      { title: "CHILDREN", value: "None" },
      { title: "TYPE OF RESIDENCE", value: "Parent's Apartment" },
    ],
  },
  {
    title: "Education and Employment",
    blocks: [
      { title: "LEVEL OF EDUCATION", value: "B.Sc" },
      { title: "EMPLOYMENT STATUS", value: "Employed" },
      { title: "SECTOR OF EMPLOYMENT", value: "FinTech" },
      { title: "DURATION OF EMPLOYMENT", value: "2 years" },
      { title: "OFFICE EMAIL", value: "grace@lendsqr.com" },
      { title: "MONTHLY INCOME", value: "₦200,000.00- ₦400,000.00" },
      { title: "LOAN REPAYMENT", value: "40,000" },
    ],
  },
  {
    title: "Socials",
    blocks: [
      { title: "TWITTER", value: "@grace_effiom" },
      { title: "FACEBOOK", value: "Grace Effiom" },
      { title: "INSTAGRAM", value: "@grace_effiom" },
    ],
  },
  {
    title: "Guarantor",
    blocks: [
      { title: "FULL NAME", value: "Debby Ogana" },
      { title: "PHONE NUMBER", value: "07060780922" },
      { title: "EMAIL ADDRESS", value: "debby@gmail.com" },
      { title: "RELATIONSHIP", value: "Sister" },
    ],
  },
];
