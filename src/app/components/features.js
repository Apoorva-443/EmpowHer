import { Award, Globe, Zap, Heart, Lightbulb, Users } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Award className="h-10 w-10 text-pink-500" />,
      title: "Skill Badges",
      description: "Earn recognition for your achievements and showcase your growing expertise.",
    },
    {
      icon: <Globe className="h-10 w-10 text-purple-500" />,
      title: "Global Community",
      description: "Connect with women from around the world to share knowledge and support.",
    },
    {
      icon: <Zap className="h-10 w-10 text-pink-500" />,
      title: "Low-Bandwidth Optimized",
      description: "Access content even with limited internet connectivity in rural areas.",
    },
    {
      icon: <Heart className="h-10 w-10 text-purple-500" />,
      title: "Supportive Environment",
      description: "Learn and grow in a safe, encouraging space designed for women.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-pink-500" />,
      title: "Empowerment Library",
      description: "Access a wealth of educational resources tailored to your needs.",
    },
    {
      icon: <Users className="h-10 w-10 text-purple-500" />,
      title: "Mentorship Opportunities",
      description: "Learn from experienced mentors or become one yourself as you progress.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Platform Features</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Designed with empathy and accessibility to support women with varying technical proficiencies.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
