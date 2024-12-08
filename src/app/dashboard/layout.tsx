import { EmsLayout } from "../../layouts/ems-layout";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <EmsLayout>
      {children}
    </EmsLayout>
  );
}