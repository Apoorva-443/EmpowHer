import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Heart, Star, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function BuyPage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Hand-Embroidered Cotton Scarf",
      description: "Beautiful traditional embroidery on soft cotton fabric.",
      price: "₹850",
      image: "/placeholder.svg?height=300&width=300",
      seller: "Meena's Textiles",
      rating: 4.8,
      reviews: 24,
      category: "Handcrafted Textiles",
    },
    {
      id: 2,
      name: "Organic Spice Gift Box",
      description: "Set of 6 premium organic spice blends in a handcrafted wooden box.",
      price: "₹1,200",
      image: "/placeholder.svg?height=300&width=300",
      seller: "Lakshmi's Organic Spices",
      rating: 4.9,
      reviews: 36,
      category: "Organic Food Products",
    },
    {
      id: 3,
      name: "Terracotta Jewelry Set",
      description: "Handcrafted earrings and necklace made with traditional techniques.",
      price: "₹950",
      image: "/placeholder.svg?height=300&width=300",
      seller: "Anita's Artisanal Crafts",
      rating: 4.7,
      reviews: 18,
      category: "Artisanal Crafts",
    },
    {
      id: 4,
      name: "Digital Business Planner",
      description: "Comprehensive digital planner for women entrepreneurs.",
      price: "₹499",
      image: "/placeholder.svg?height=300&width=300",
      seller: "Priya's Digital Designs",
      rating: 4.9,
      reviews: 42,
      category: "Digital Products",
    },
    {
      id: 5,
      name: "Natural Skincare Set",
      description: "Handmade soaps, creams, and oils using traditional herbal recipes.",
      price: "₹1,500",
      image: "/placeholder.svg?height=300&width=300",
      seller: "Sunita's Natural Beauty",
      rating: 4.8,
      reviews: 29,
      category: "Beauty & Wellness",
    },
    {
      id: 6,
      name: "Business Coaching Session",
      description: "One-hour personalized coaching for women entrepreneurs.",
      price: "₹2,000",
      image: "/placeholder.svg?height=300&width=300",
      seller: "Kavita's Business Mentoring",
      rating: 5.0,
      reviews: 15,
      category: "Services",
    },
  ]

  const categories = [
    "Handcrafted Textiles",
    "Organic Food Products",
    "Artisanal Crafts",
    "Digital Products",
    "Services",
    "Beauty & Wellness",
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
            <Link href="/sell" className="text-sm font-medium transition-colors hover:text-primary">
              Sell
            </Link>
            <Link href="/buy" className="text-sm font-medium transition-colors hover:text-primary text-primary">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Marketplace</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Browse and purchase unique products and services created by talented women entrepreneurs.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="search" placeholder="Search products..." className="max-w-lg flex-1" />
                  <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="text-sm py-1 px-3 cursor-pointer hover:bg-muted">
                  {category}
                </Badge>
              ))}
            </div>
            <div className="flex flex-col items-start gap-4 mb-6">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Featured Products</h2>
              <p className="text-muted-foreground">Discover unique items created by talented women entrepreneurs.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="flex flex-col h-full transition-all duration-200 hover:shadow-lg">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80"
                      >
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">Add to wishlist</span>
                      </Button>
                      <Badge className="absolute left-2 top-2">{product.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 p-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">{product.price}</span>
                        <div className="flex items-center gap-1 text-sm text-yellow-500">
                          <Star className="h-4 w-4 fill-yellow-500" />
                          <span>
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span>Seller: {product.seller}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">
                      View Product
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Shop With Us</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  When you purchase from EmpowHer, you're supporting women entrepreneurs and their communities.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-950/30">
                  <Heart className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold">Support Women</h3>
                <p className="text-muted-foreground">
                  Every purchase directly supports a woman entrepreneur and her family.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-950/30">
                  <Star className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold">Quality Products</h3>
                <p className="text-muted-foreground">
                  Handcrafted items and services created with skill and attention to detail.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-950/30">
                  <Search className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold">Discover Stories</h3>
                <p className="text-muted-foreground">
                  Learn about the women behind the products and their inspiring journeys.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
