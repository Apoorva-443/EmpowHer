import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, CheckCircle } from "lucide-react"

export default function LearnPage() {
  const courses = [
    {
      id: 1,
      title: "Digital Literacy Fundamentals",
      description: "Learn the basics of using smartphones, internet, and digital tools.",
      progress: 0,
      level: "Beginner",
      modules: 5,
      estimatedTime: "2 hours",
      badge: "Digital Basics",
    },
    {
      id: 2,
      title: "Financial Independence",
      description: "Understand personal finance, savings, and basic investment concepts.",
      progress: 0,
      level: "Beginner",
      modules: 6,
      estimatedTime: "3 hours",
      badge: "Finance Fundamentals",
    },
    {
      id: 3,
      title: "Entrepreneurship Essentials",
      description: "Discover the fundamentals of starting and running a small business.",
      progress: 0,
      level: "Intermediate",
      modules: 8,
      estimatedTime: "4 hours",
      badge: "Entrepreneur Starter",
    },
    {
      id: 4,
      title: "Craft Skills for Business",
      description: "Turn traditional crafting skills into profitable business opportunities.",
      progress: 0,
      level: "Intermediate",
      modules: 7,
      estimatedTime: "3.5 hours",
      badge: "Craft Business",
    },
    {
      id: 5,
      title: "Digital Marketing Basics",
      description: "Learn how to promote your products and services online.",
      progress: 0,
      level: "Intermediate",
      modules: 6,
      estimatedTime: "3 hours",
      badge: "Digital Marketer",
    },
    {
      id: 6,
      title: "Leadership & Communication",
      description: "Develop essential leadership and communication skills.",
      progress: 0,
      level: "Advanced",
      modules: 8,
      estimatedTime: "4 hours",
      badge: "Effective Leader",
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
            <Link href="/learn" className="text-sm font-medium transition-colors hover:text-primary text-primary">
              Learn
            </Link>
            <Link href="/mentor" className="text-sm font-medium transition-colors hover:text-primary">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Learner Journey</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Develop new skills, earn badges, and track your progress through interactive courses designed for
                  women.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600">
                  My Learning Dashboard
                </Button>
                <Button size="lg" variant="outline">
                  View My Badges
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Available Courses</h2>
              <p className="text-muted-foreground">
                Start your learning journey with these carefully designed courses.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              {courses.map((course) => (
                <Card key={course.id} className="flex flex-col h-full transition-all duration-200 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="mb-2">
                        {course.level}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.modules} modules</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="h-4 w-4 text-pink-500" />
                        <span>Badge: {course.badge}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Estimated time: {course.estimatedTime}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Start Course
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Your Learning Path</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  As you complete courses, you'll earn badges and unlock new opportunities.
                </p>
              </div>
              <div className="w-full max-w-3xl mt-8">
                <div className="relative">
                  <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-border" />
                  <div className="space-y-12">
                    <div className="relative flex flex-col items-center">
                      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background bg-pink-500 p-2">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div className="mt-8 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                        <h3 className="text-xl font-bold">Start as a Learner</h3>
                        <p className="text-muted-foreground">
                          Begin your journey by taking courses and developing new skills.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background bg-muted p-2">
                        <CheckCircle className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="mt-8 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                        <h3 className="text-xl font-bold">Become a Mentor</h3>
                        <p className="text-muted-foreground">
                          After earning specific badges, you can create your own mentor channel to share knowledge.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background bg-muted p-2">
                        <CheckCircle className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="mt-8 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                        <h3 className="text-xl font-bold">Start Selling</h3>
                        <p className="text-muted-foreground">
                          Apply your skills by creating products or services to sell in the marketplace.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
