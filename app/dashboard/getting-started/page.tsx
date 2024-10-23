import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, FileText, BookOpen, CheckCircle } from "lucide-react";

export default function GettingStartedPage() {
  const guides = [
    {
      title: "Welcome to the UK",
      description: "Essential first steps for new arrivals",
      icon: <PlayCircle className="h-6 w-6" />,
      duration: "10 mins",
    },
    {
      title: "Understanding Your Rights",
      description: "Know your legal rights and responsibilities",
      icon: <FileText className="h-6 w-6" />,
      duration: "15 mins",
    },
    {
      title: "Setting Up Your Life",
      description: "Banking, housing, and utilities guide",
      icon: <BookOpen className="h-6 w-6" />,
      duration: "20 mins",
    },
    {
      title: "Healthcare System",
      description: "Navigating the NHS and healthcare services",
      icon: <CheckCircle className="h-6 w-6" />,
      duration: "12 mins",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Getting Started</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to your new life in the UK. Let's get you started with the essentials.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {guides.map((guide, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="text-primary">{guide.icon}</div>
              <div>
                <CardTitle>{guide.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {guide.description}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Duration: {guide.duration}
                </span>
                <Button>Start Guide</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}