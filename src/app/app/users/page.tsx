import PageTitle from "@/components/common/page-title";
import Metrics from "@/components/content/users/metrics";
import UsersTable from "@/components/content/users/users-table";

export default function Page() {
  return (
    <>
      <PageTitle title='Users' />
      <Metrics />
      <UsersTable />
    </>
  );
}
