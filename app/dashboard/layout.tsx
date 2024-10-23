import { Sidebar } from '@/components/dashboard/sidebar';
import { Header } from '@/components/dashboard/header';
import { QuickLinks } from '@/components/dashboard/quick-links';
import { Notifications } from '@/components/dashboard/notifications';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="hidden lg:block w-64 shrink-0 border-r">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <Header />
          <div className="flex">
            <main className="flex-1 p-6">{children}</main>

            {/* Right Sidebar */}
            <div className="hidden xl:block w-80 border-l p-6">
              <div className="space-y-6">
                <QuickLinks />
                <Notifications />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}