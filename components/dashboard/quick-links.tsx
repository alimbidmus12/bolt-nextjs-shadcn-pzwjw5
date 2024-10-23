import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function QuickLinks() {
  const links = [
    {
      title: 'How to nail your interview',
      tag: 'How to',
      href: '/dashboard/guides/interview-tips',
    },
    {
      title: 'UK Immigration Law Expert Session',
      tag: 'Webinar',
      href: '/dashboard/webinars/immigration-law',
    },
    {
      title: 'Trendy UK Fashion Collection',
      tag: 'Marketplace',
      href: '/dashboard/marketplace/fashion',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quicklinks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block p-3 rounded-lg hover:bg-accent transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium">{link.title}</span>
                <Badge variant="secondary" className="ml-2">
                  {link.tag}
                </Badge>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}