import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Building2, Home, Briefcase, CalendarCheck, Truck } from "lucide-react";

const services = [
  {
    title: "Residential Cleaning",
    description: "Regular home cleaning tailored to your needs",
    features: [
      "Deep cleaning of all rooms",
      "Kitchen and bathroom sanitization",
      "Dusting and vacuuming",
      "Window sill and baseboard cleaning"
    ],
    icon: Home,
    price: "From $120",
    duration: "2-3 hours"
  },
  {
    title: "Commercial Cleaning",
    description: "Professional cleaning for offices and businesses",
    features: [
      "Office space cleaning",
      "Break room sanitization",
      "Restroom maintenance",
      "Trash removal and recycling"
    ],
    icon: Building2,
    price: "Custom quote",
    duration: "Flexible scheduling"
  },
  {
    title: "Deep Cleaning",
    description: "Thorough cleaning for those special occasions",
    features: [
      "Inside cabinet cleaning",
      "Appliance deep cleaning",
      "Wall and ceiling dusting",
      "Detailed floor cleaning"
    ],
    icon: Sparkles,
    price: "From $200",
    duration: "4-6 hours"
  },
  {
    title: "Move In/Out Cleaning",
    description: "Fresh start for your new space",
    features: [
      "Complete property cleaning",
      "Cabinet and drawer cleaning",
      "Appliance cleaning",
      "Floor deep cleaning"
    ],
    icon: Truck,
    price: "From $250",
    duration: "5-7 hours"
  },
  {
    title: "Office Cleaning",
    description: "Keep your workplace pristine",
    features: [
      "Workspace sanitization",
      "Common area cleaning",
      "Kitchen and break room cleaning",
      "Evening/weekend service available"
    ],
    icon: Briefcase,
    price: "Custom quote",
    duration: "Flexible scheduling"
  },
  {
    title: "Recurring Service",
    description: "Regular cleaning on your schedule",
    features: [
      "Weekly, bi-weekly, or monthly",
      "Consistent cleaning team",
      "Customized cleaning plan",
      "Priority scheduling"
    ],
    icon: CalendarCheck,
    price: "From $100/visit",
    duration: "2-3 hours"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Cleaning Services
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Professional cleaning services tailored to your needs. Choose from our range of services 
            designed to keep your space spotless and healthy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col h-full">
              <CardHeader>
                <div className="mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto space-y-2">
                  <p className="text-lg font-semibold text-gray-900">{service.price}</p>
                  <p className="text-sm text-gray-600">{service.duration}</p>
                  <Button className="w-full mt-4">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Not sure which service is right for you?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation. We'll help you choose the perfect cleaning plan 
              for your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Get a Quote
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}