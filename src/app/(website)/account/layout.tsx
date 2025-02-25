import { PageHeader } from "@/components/shared/sections/page-header";
import { ReactNode } from "react";
import AccountSidebar from "./_components/sidebar";

export default async function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <PageHeader
            title="Your Account"
            items={[
              {
              label: "Home",
              href: "/",
            },
            {
            label: "Account>Dashboard",
            href: "/acount",
          },
        ]}
      />
      <div className="my-[80px] container mx-auto flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className=" md:w-[270px] h-auto">
          <AccountSidebar />
        </aside>

        {/* Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
