import { EmsLayout } from "../../layouts/ems-layout";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) { 
  return (
    <EmsLayout>
      {children}
      </EmsLayout>
  );
}
