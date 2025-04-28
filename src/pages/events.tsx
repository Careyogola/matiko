"use client"

import { useState } from "react"
import { CalendarDays, Filter, MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Ticket } from "lucide-react"
import Link from "next/link"

// Sample event data - in a real app, this would come from an API or database
const events = [
  {
    id: "1",
    title: "Summer Music Festival",
    date: "June 15-17, 2024",
    time: "12:00 PM - 11:00 PM",
    location: "Central Park, New York",
    category: "Music",
    price: "$75",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "2",
    title: "Tech Conference 2024",
    date: "July 10-12, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Convention Center, San Francisco",
    category: "Technology",
    price: "$299",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    title: "Art Exhibition: Modern Masters",
    date: "August 5-20, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "City Gallery, Chicago",
    category: "Art",
    price: "$25",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "4",
    title: "Food & Wine Festival",
    date: "September 8-10, 2024",
    time: "11:00 AM - 8:00 PM",
    location: "Waterfront Park, Seattle",
    category: "Food",
    price: "$45",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "5",
    title: "Comedy Night Special",
    date: "June 25, 2024",
    time: "8:00 PM - 10:30 PM",
    location: "Laugh Factory, Los Angeles",
    category: "Entertainment",
    price: "$35",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "6",
    title: "Business Leadership Summit",
    date: "July 20-21, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Grand Hotel, Boston",
    category: "Business",
    price: "$199",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "7",
    title: "Indie Film Festival",
    date: "August 15-18, 2024",
    time: "Various times",
    location: "Cinema Complex, Austin",
    category: "Film",
    price: "$50",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "8",
    title: "Yoga & Wellness Retreat",
    date: "September 15-17, 2024",
    time: "7:00 AM - 7:00 PM",
    location: "Mountain Resort, Denver",
    category: "Wellness",
    price: "$150",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
]

const categories = ["Music", "Technology", "Art", "Food", "Entertainment", "Business", "Film", "Wellness"]

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Filter events based on search query and selected category
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory ? event.category === selectedCategory : true

    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold">Discover Events</h1>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search events or locations..."
                className="pl-8 w-full md:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[240px] p-4">
                <div className="space-y-4">
                  <h4 className="font-medium">Categories</h4>
                  <Separator />
                  <div className="grid gap-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategory === category}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedCategory(category)
                            } else {
                              setSelectedCategory(null)
                            }
                          }}
                        />
                        <Label htmlFor={`category-${category}`}>{category}</Label>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between pt-2">
                    <Button variant="outline" size="sm" onClick={() => setSelectedCategory(null)}>
                      Reset
                    </Button>
                    <Button size="sm">Apply</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Select>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-asc">Date (Earliest)</SelectItem>
                <SelectItem value="date-desc">Date (Latest)</SelectItem>
                <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                <SelectItem value="price-desc">Price (High to Low)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedCategory && (
          <div className="mb-6 flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Filtered by:</span>
            <Badge variant="secondary" className="flex items-center gap-1">
              {selectedCategory}
              <button className="ml-1 rounded-full hover:bg-muted" onClick={() => setSelectedCategory(null)}>
                ✕
              </button>
            </Badge>
          </div>
        )}

        {filteredEvents.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Ticket className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold mb-2">No events found</h2>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory(null)
              }}
            >
              Clear filters
            </Button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={event.imageUrl || "/placeholder.svg"}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-4">
                  <Badge className="self-start mb-2">{event.category}</Badge>
                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-1 text-sm">
                    <CalendarDays className="mr-2 h-4 w-4 shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-3 text-sm">
                    <MapPin className="mr-2 h-4 w-4 shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="mt-auto pt-2 border-t flex items-center justify-between">
                    <span className="font-medium">{event.price}</span>
                    <Button size="sm" variant="secondary">
                      View Details
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {filteredEvents.length > 0 && (
          <div className="mt-12 flex justify-center">
            <Button variant="outline">Load More Events</Button>
          </div>
        )}
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Ticket className="h-5 w-5" />
            <span className="font-semibold">EventTix</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EventTix. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
