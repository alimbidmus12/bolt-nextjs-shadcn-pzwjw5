import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell } from 'lucide-react';

export function Notifications() {
  const notifications = [
    {
      title: 'NHS Career Fair',
      description: 'Wolverhampton on 23rd December 2024, 5 pm',
    },
    {
      title: 'Immigration Policy Update',
      description: 'New UK government immigration policy announcement',
    },
    {
      title: 'BRP Expiration Reminder',
      description: 'Deadline on 31st December. Get your visa ASAP.',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bell className="h-4 w-4" />
          <span>Notifications</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="p-3 rounded-lg hover:bg-accent transition-colors"
            >
              <h4 className="font-medium">{notification.title}</h4>
              <p className="text-sm text-muted-foreground">
                {notification.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}