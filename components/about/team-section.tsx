import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "With over 15 years of experience in the cleaning industry, Sarah founded our company with a vision of providing exceptional service and creating healthy spaces."
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Michael ensures our day-to-day operations run smoothly and maintains our high standards of service quality across all projects."
  },
  {
    name: "Emily Rodriguez",
    role: "Customer Success Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Emily is dedicated to ensuring our clients receive the best possible service and experience with every interaction."
  }
];

export function TeamSection() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The dedicated professionals behind our exceptional service
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-primary mt-1">{member.role}</p>
                  <p className="mt-4 text-gray-600">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}