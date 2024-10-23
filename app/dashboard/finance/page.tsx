import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiggyBank, CreditCard, LineChart, Building } from "lucide-react";

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Finance Management</h1>
        <p className="text-muted-foreground mt-2">
          Tools and resources to help you manage your finances in the UK
        </p>
      </div>

      <Tabs defaultValue="banking" className="space-y-6">
        <TabsList>
          <TabsTrigger value="banking">Banking</TabsTrigger>
          <TabsTrigger value="budgeting">Budgeting</TabsTrigger>
          <TabsTrigger value="investments">Investments</TabsTrigger>
          <TabsTrigger value="taxes">Taxes</TabsTrigger>
        </TabsList>

        <TabsContent value="banking" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Building className="h-6 w-6 text-primary" />
                  <CardTitle>UK Bank Accounts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Learn about different types of UK bank accounts and how to open one.
                </p>
                <Button>Compare Banks</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                  <CardTitle>Credit Building</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Tips and strategies for building your UK credit score.
                </p>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Add other tab contents as needed */}
      </Tabs>
    </div>
  );
}