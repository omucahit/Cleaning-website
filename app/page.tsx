import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Leaf, Clock, Award, CheckCircle } from "lucide-react";

const features = [
  {
    name: "Professional Staff",
    description: "Trained and vetted cleaning professionals",
    icon: Star,
  },
  {
    name: "Insured & Bonded",
    description: "Your property is protected",
    icon: Shield,
  },
  {
    name: "Eco-Friendly",
    description: "Green cleaning products",
    icon: Leaf,
  },
  {
    name: "Flexible Scheduling",
    description: "Book at your convenience",
    icon: Clock,
  },
  {
    name: "Satisfaction Guaranteed",
    description: "100% satisfaction or money back",
    icon: Award,
  },
  {
    name: "Detailed Service",
    description: "Thorough cleaning every time",
    icon: CheckCircle,
  },
];

const testimonials = [
  {
    content: "The best cleaning service I've ever used. My home has never looked better!",
    author: "Sarah Johnson",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    content: "Professional, thorough, and always on time. Highly recommended!",
    author: "Michael Chen",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
          alt="Beautiful clean family home interior"
          fill
          className="object-cover brightness-[0.65]"
          priority
        />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Creating Happy, Healthy Homes
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto">
            Let us take care of your home with our family-friendly, eco-conscious cleaning services. 
            Your family's comfort is our priority.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="text-lg">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for a spotless space
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We deliver exceptional cleaning services with attention to detail and commitment to quality.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="flex flex-col justify-between">
                  <CardContent className="pt-6">
                    <div className="relative">
                      <p className="text-lg leading-8 text-gray-600">"{testimonial.content}"</p>
                    </div>
                    <div className="mt-6 flex items-center gap-x-4">
                      <Image
                        className="h-10 w-10 rounded-full bg-gray-50"
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={40}
                        height={40}
                      />
                      <div>
                        <div className="text-sm font-semibold leading-6 text-gray-900">{testimonial.author}</div>
                        <div className="text-sm leading-6 text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready for a Cleaner Space?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Book your cleaning service today and experience the difference of professional cleaning.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary">
                Book Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}