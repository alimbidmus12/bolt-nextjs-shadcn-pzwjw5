import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, AlertCircle, CheckCircle } from "lucide-react";

export default function ImmigrationPage() {
  const visaTypes = [
    {
      title: "Skilled Worker Visa",
      description: "For those with a job offer from a UK employer",
      requirements: ["Job offer", "Minimum salary", "English language"],
      processingTime: "3-8 weeks",
      status: "Popular",
    },
    {
      title: "Student Visa",
      description: "For those accepted into UK educational institutions",
      requirements: ["Acceptance letter", "Maintenance funds", "English language"],
      processingTime: "3 weeks",
      status: "Open",
    },
    {
      title: "Family Visa",
      description: "Join family members already in the UK",
      requirements: ["Family relationship proof", "Financial requirement", "Accommodation"],
      processingTime: "12 weeks",
      status: "Complex",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Immigration Pathways</h1>
        <p className="text-muted-foreground mt-2">
          Understand your options for living and working in the UK
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-yellow-500" />
            <span>Important Update</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Recent changes to immigration rules may affect your application. Please check the latest guidelines.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visaTypes.map((visa, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{visa.title}</CardTitle>
                <Badge variant={visa.status === "Popular" ? "default" : "secondary"}>
                  {visa.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{visa.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Requirements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {visa.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  Processing time: {visa.processingTime}
                </div>
                <Button className="w-full">Learn More</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}