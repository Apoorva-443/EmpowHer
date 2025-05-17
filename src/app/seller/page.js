"use client"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingBag, Tag, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function SellPage() {
  const categories = [
    {
      id: 1,
      name: "Handcrafted Textiles",
      description: "Traditional and modern textile products including clothing, home decor, and accessories.",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-pink-100 dark:bg-pink-950/30",
    },
    {
      id: 2,
      name: "Organic Food Products",
      description: "Homemade food items, preserves, spices, and organic produce.",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-purple-100 dark:bg-purple-950/30",
    },
    {
      id: 3,
      name: "Artisanal Crafts",
      description: "Handmade pottery, jewelry, and decorative items showcasing traditional techniques.",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-pink-100 dark:bg-pink-950/30",
    },
    {
      id: 4,
      name: "Digital Products",
      description: "E-books, templates, digital art, and other downloadable creations.",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-purple-100 dark:bg-purple-950/30",
    },
    {
      id: 5,
      name: "Services",
      description: "Consulting, teaching, design services, and other expertise-based offerings.",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-pink-100 dark:bg-pink-950/30",
    },
    {
      id: 6,
      name: "Beauty & Wellness",
      description: "Natural beauty products, herbal remedies, and wellness items.",
      icon: "/placeholder.svg?height=80&width=80",
      color: "bg-purple-100 dark:bg-purple-950/30",
    },
  ]

  const successStories = [
    {
      id: 1,
      name: "Meena's Textiles",
      description: "From a small home-based operation to a thriving business with international customers.",
      image: "/placeholder.svg?height=200&width=200",
      revenue: "₹45,000/month",
      products: 24,
      category: "Handcrafted Textiles",
    },
    {
      id: 2,
      name: "Lakshmi's Organic Spices",
      description: "Traditional family recipes turned into a successful spice blend business.",
      image: "/placeholder.svg?height=200&width=200",
      revenue: "₹38,000/month",
      products: 12,
      category: "Organic Food Products",
    },
    {
      id: 3,
      name: "Priya's Digital Designs",
      description: "Teaching digital skills to other women while selling beautiful digital art templates.",
      image: "/placeholder.svg?height=200&width=200",
      revenue: "₹52,000/month",
      products: 35,
      category: "Digital Products",
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
            <Link href="/mentor" className="text-sm font-medium transition-colors hover:text-primary">
              Mentor
            </Link>
            <Link href="/sell" className="text-sm font-medium transition-colors hover:text-primary text-primary">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Seller Marketplace</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Showcase and sell your products or services to a supportive community of buyers.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600">
                  Create Seller Account
                </Button>
                <Button size="lg" variant="outline">
                  Seller Guidelines
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Product Categories</h2>
              <p className="text-muted-foreground">
                Explore the different types of products and services you can sell on our platform.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className={`flex flex-col h-full transition-all duration-200 hover:shadow-lg ${category.color}`}
                >
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src={category.icon || "/placeholder.svg"}
                        alt={category.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-4">
                    <Button className="w-full">
                      Explore Category
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Success Stories</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Meet women who have transformed their skills into thriving businesses.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {successStories.map((story) => (
                <Card key={story.id} className="flex flex-col h-full transition-all duration-200 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        width={120}
                        height={120}
                        className="rounded-full"
                      />
                    </div>
                    <Badge className="mx-auto mb-2">{story.category}</Badge>
                    <CardTitle className="text-xl text-center">{story.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 text-center">
                    <p className="text-muted-foreground">{story.description}</p>
                    <div className="flex justify-between mt-4 px-6">
                      <div className="flex flex-col items-center">
                        <TrendingUp className="h-5 w-5 text-pink-500 mb-1" />
                        <span className="text-sm font-medium">{story.revenue}</span>
                        <span className="text-xs text-muted-foreground">Monthly Revenue</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <ShoppingBag className="h-5 w-5 text-purple-500 mb-1" />
                        <span className="text-sm font-medium">{story.products}</span>
                        <span className="text-xs text-muted-foreground">Products</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline">Read Full Story</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Start Selling Today</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Turn your skills into income with our easy-to-use selling platform designed for women entrepreneurs.
                  </p>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500/20">
                      <span className="text-sm font-bold text-pink-500">1</span>
                    </div>
                    <span>Create your seller profile with your story and expertise</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500/20">
                      <span className="text-sm font-bold text-pink-500">2</span>
                    </div>
                    <span>Add your products or services with photos and descriptions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500/20">
                      <span className="text-sm font-bold text-pink-500">3</span>
                    </div>
                    <span>Set your prices and shipping options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500/20">
                      <span className="text-sm font-bold text-pink-500">4</span>
                    </div>
                    <span>Connect with buyers and grow your business</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-600">Create Your Shop</Button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-950/30 dark:to-purple-950/30 p-6 flex items-center justify-center">
                <div className="max-w-sm space-y-4 text-center">
                  <Tag className="h-16 w-16 mx-auto text-purple-500" />
                  <h3 className="text-2xl font-bold">Low Fees, High Support</h3>
                  <p className="text-muted-foreground">
                    We charge minimal fees and provide maximum support to help women entrepreneurs succeed.
                  </p>
                  <div className="flex justify-between px-6 py-4 bg-background rounded-lg">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-pink-500">5%</p>
                      <p className="text-xs text-muted-foreground">Platform Fee</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-purple-500">24/7</p>
                      <p className="text-xs text-muted-foreground">Seller Support</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-pink-500">7d</p>
                      <p className="text-xs text-muted-foreground">Fast Payouts</p>
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
