import {Link} from "react-router"
import { CalendarDays, Search, Ticket } from "lucide-react"

import { Button } from "../components/ui/button.tsx"
import { MainNav } from "../components/MainNav.tsx"

export default function Home() {
  // Featured events - in a real app, these would come from a database
  const featuredEvents = [
    {
      id: "1",
      title: "Summer Music Festival",
      date: "June 15-17, 2024",
      location: "Central Park",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "2",
      title: "Tech Conference",
      date: "July 10-12, 2024",
      location: "Convention Center",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "3",
      title: "Art Exhibition",
      date: "August 5-20, 2024",
      location: "City Gallery",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 text-center px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Discover Amazing Events</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find and book tickets for concerts, festivals, conferences, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/events">
                  <Ticket className="mr-2 h-5 w-5" />
                  Browse Events
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Search className="mr-2 h-5 w-5" />
                Search Events
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Featured Events</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredEvents.map((event) => (
                <Link
                  key={event.id}
                  to={`/events/${event.id}`}
                  className="group block overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={event.imageUrl || "/placeholder.svg"}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-1">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="text-muted-foreground">{event.location}</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/events">View All Events</Link>
              </Button>
            </div>
          </div>
        </section>
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
