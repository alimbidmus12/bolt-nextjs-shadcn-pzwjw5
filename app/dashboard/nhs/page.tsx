import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stethoscope, Phone, Calendar, FileText } from "lucide-react";

export default function NHSPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Accessing the NHS</h1>
        <p className="text-muted-foreground mt-2">
          Everything you need to know about healthcare in the UK
        </p>
      </div>

      <Tabs defaultValue="registration" className="space-y-6">
        <TabsList>
          <TabsTrigger value="registration">Registration</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="emergency">Emergency Care</TabsTrigger>
          <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
        </TabsList>

        <TabsContent value="registration" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>How to Register with a GP</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <Stethoscope className="h-6 w-6 text-primary" />
                      <div>
                        <h4 className="font-semibold">Find a GP Surgery</h4>
                        <p className="text-sm text-muted-foreground">
                          Locate your nearest GP surgery
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <FileText className="h-6 w-6 text-primary" />
                      <div>
                        <h4 className="font-semibold">Required Documents</h4>
                        <p className="text-sm text-muted-foreground">
                          What you need to register
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Emergency Contacts</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <Phone className="h-6 w-6 text-primary" />
                        <div>
                          <h4 className="font-semibold">NHS 111</h4>
                          <p className="text-sm text-muted-foreground">
                            For non-emergency medical help
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <Calendar className="h-6 w-6 text-primary" />
                        <div>
                          <h4 className="font-semibold">Book Appointment</h4>
                          <p className="text-sm text-muted-foreground">
                            Schedule a GP visit
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Add other tab contents as needed */}
      </Tabs>
    </div>
  );
}