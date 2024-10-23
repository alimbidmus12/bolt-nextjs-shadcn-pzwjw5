"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  BookOpen,
  Briefcase,
  Calendar,
  Heart,
  Home,
  MessageSquare,
  PiggyBank,
  Plus,
  ShoppingBag,
  Stethoscope,
  Users,
} from 'lucide-react';

const sidebarItems = [
  { name: 'Getting Started', href: '/dashboard/getting-started', icon: Home },
  { name: 'Finance Management', href: '/dashboard/finance', icon: PiggyBank },
  { name: 'Job Portal', href: '/dashboard/jobs', icon: Briefcase },
  { name: 'Accessing the NHS', href: '/dashboard/nhs', icon: Stethoscope },
  { name: 'Immigration Pathways', href: '/dashboard/immigration', icon: BookOpen },
  { name: 'Community Forums', href: '/dashboard/forums', icon: MessageSquare },
  { name: 'Community Events', href: '/dashboard/events', icon: Calendar },
  { name: 'Marketplace', href: '/dashboard/marketplace', icon: ShoppingBag },
  { name: 'Premium Services', href: '/dashboard/premium', icon: Plus },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex items-center mb-6 px-2">
            <Users className="h-6 w-6 text-primary" />
            <span className="ml-2 text-lg font-semibold">Diasporan</span>
          </div>
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Hubs
          </h2>
          <div className="space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href ? "bg-accent" : "transparent",
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}