import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Video, Users, Star } from "lucide-react"

export default function MentorPage() {
  const mentorChannels = [
    {
      id: 1,
      title: "Digital Skills for Beginners",
      description: "Learn how to use smartphones, apps, and basic internet skills.",
      author: "Priya Sharma",
      subscribers: 245,
      videos: 12,
      rating: 4.8,
      category: "Digital Literacy",
    },
    {
      id: 2,
      title: "Financial Planning for Women",
      description: "Simple strategies for saving money and planning for the future.",
      author: "Anita Desai",
      subscribers: 189,
      videos: 8,
      rating: 4.7,
      category: "Financial Skills",
    },
    {
      id: 3,
      title: "Traditional Crafts to Modern Business",
      description: "Turn your traditional craft skills into a profitable business.",
      author: "Lakshmi Patel",
      subscribers: 312,
      videos: 15,
      rating: 4.9,
      category: "Entrepreneurship",
    },
    {
      id: 4,
      title: "Organic Farming Techniques",
      description: "Learn sustainable farming methods for better yields and healthier crops.",
      author: "Meena Reddy",
      subscribers: 276,
      videos: 18,
      rating: 4.6,
      category: "Agriculture",
    },
    {
      id: 5,
      title: "Effective Communication Skills",
      description: "Develop confidence in speaking and expressing yourself clearly.",
      author: "Sunita Gupta",
      subscribers: 203,
      videos: 10,
      rating: 4.7,
      category: "Personal Development",
    },
    {
      id: 6,
      title: "Health and Wellness for Women",
      description: "Simple practices for maintaining good health and wellbeing.",
      author: "Dr. Kavita Singh",
      subscribers: 287,
      videos: 14,
      rating: 4.8,
      category: "Health",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                EmpowHer
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/learn" className="text-sm font-medium transition-colors hover:text-primary">
              Learn
            </Link>
            <Link href="/mentor" className="text-sm font-medium transition-colors hover:text-primary text-primary">
              Mentor
            </Link>
            <Link href="/sell" className="text-sm font-medium transition-colors hover:text-primary">
              Sell
            </Link>
            <Link href="/buy" className="text-sm font-medium transition-colors hover:text-primary">
              Buy
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mentor Channel</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Share your knowledge and create video channels to help other women develop valuable skills.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600">
                  Create Your Channel
                </Button>
                <Button size="lg" variant="outline">
                  Mentor Guidelines
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Popular Mentor Channels</h2>
              <p className="text-muted-foreground">Learn from these successful mentors or create your own channel.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              {mentorChannels.map((channel) => (
                <Card key={channel.id} className="flex flex-col h-full transition-all duration-200 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="mb-2">
                        {channel.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-yellow-500">
                        <Star className="h-4 w-4 fill-yellow-500" />
                        <span>{channel.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{channel.title}</CardTitle>
                    <CardDescription>{channel.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div className="text-sm">
                        <span className="font-medium">Mentor:</span> {channel.author}
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Video className="h-4 w-4" />
                          <span>{channel.videos} videos</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{channel.subscribers} subscribers</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      View Channel
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Become a Mentor</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Share your knowledge and skills with other women in your community and around the world.
                  </p>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500/20">
                      <span className="text-sm font-bold text-pink-500">1</span>
                    </div>
                    <span>Complete at least 3 courses in your area of expertise</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500/20">
                      <span className="text-sm font-bold text-pink-500">2</span>
                    </div>
                    <span>Create a mentor profile highlighting your skills and experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500/20">
                      <span className="text-sm font-bold text-pink-500">3</span>
                    </div>
                    <span>Record and upload your first video lesson</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500/20">
                      <span className="text-sm font-bold text-pink-500">4</span>
                    </div>
                    <span>Engage with your community and grow your channel</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-600">Apply to Become a Mentor</Button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-950/30 dark:to-purple-950/30 p-6 flex items-center justify-center">
                <div className="max-w-sm space-y-4 text-center">
                  <Video className="h-16 w-16 mx-auto text-purple-500" />
                  <h3 className="text-2xl font-bold">Create Your Channel</h3>
                  <p className="text-muted-foreground">
                    Our simple video recording and uploading tools make it easy to share your knowledge, even with
                    limited internet connectivity.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn How It Works
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
