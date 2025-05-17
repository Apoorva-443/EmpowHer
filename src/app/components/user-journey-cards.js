import { Book, Video, ShoppingBag, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function UserJourneyCards() {
  const journeys = [
    {
      title: "Learner Journey",
      description:
        "Develop new skills, earn badges, and track your progress through interactive courses designed for women.",
      icon: <Book className="h-12 w-12 text-pink-500" />,
      path: "/learn",
      cta: "Start Learning",
    },
    {
      title: "Mentor Channel",
      description: "Share your knowledge and create video channels to help other women develop valuable skills.",
      icon: <Video className="h-12 w-12 text-purple-500" />,
      path: "/mentor",
      cta: "Become a Mentor",
    },
    {
      title: "Seller Marketplace",
      description: "Showcase and sell your products or services to a supportive community of buyers.",
      icon: <ShoppingBag className="h-12 w-12 text-pink-500" />,
      path: "/sell",
      cta: "Start Selling",
    },
    {
      title: "Buyer Access",
      description: "Browse and purchase unique products and services created by talented women entrepreneurs.",
      icon: <ShoppingCart className="h-12 w-12 text-purple-500" />,
      path: "/buy",
      cta: "Start Shopping",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Choose Your Path</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              EmpowHer offers four unique journeys to help you grow, connect, and succeed.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {journeys.map((journey) => (
            <Card key={journey.title} className="flex flex-col h-full transition-all duration-200 hover:shadow-lg">
              <CardHeader>
                <div className="flex justify-center mb-2">{journey.icon}</div>
                <CardTitle className="text-xl">{journey.title}</CardTitle>
                <CardDescription>{journey.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-4">
                <Link href={journey.path} className="w-full">
                  <Button className="w-full">{journey.cta}</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
