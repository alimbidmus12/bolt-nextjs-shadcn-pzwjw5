import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageCircle, ThumbsUp } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center space-x-4 p-6">
          <Avatar>
            <AvatarImage src="/avatars/admin.png" alt="Admin" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">We are live and running</h3>
            <p className="text-sm text-muted-foreground">
              Posted by Admin • {new Date().toLocaleDateString()}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Diasporan is the first platform in the UK to offer support to new immigrants.
            We're excited to help you navigate your journey in the UK with resources,
            community support, and expert guidance.
          </p>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="h-4 w-4 mr-2" />
              Like
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              Comment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}