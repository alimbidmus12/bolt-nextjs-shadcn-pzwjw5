import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Building2, Clock } from "lucide-react";

export default function JobPortalPage() {
  const jobs = [
    {
      title: "Software Engineer",
      company: "Tech Solutions UK",
      location: "London",
      type: "Full-time",
      salary: "£45,000 - £65,000",
      posted: "2 days ago",
    },
    {
      title: "NHS Nurse",
      company: "NHS Trust",
      location: "Manchester",
      type: "Full-time",
      salary: "£27,000 - £32,000",
      posted: "1 day ago",
    },
    {
      title: "Financial Analyst",
      company: "Global Finance Ltd",
      location: "Edinburgh",
      type: "Full-time",
      salary: "£35,000 - £45,000",
      posted: "3 days ago",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Job Portal</h1>
        <p className="text-muted-foreground mt-2">
          Find your next career opportunity in the UK
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search jobs..." className="pl-8" />
            </div>
            <div className="flex-1">
              <Input placeholder="Location" />
            </div>
            <Button>Search</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {jobs.map((job, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <Building2 className="h-4 w-4 mr-2" />
                      {job.company}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {job.posted}
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-right">
                  <Badge>{job.type}</Badge>
                  <p className="text-sm font-medium">{job.salary}</p>
                  <Button>Apply Now</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}