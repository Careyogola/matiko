"use client"
import { useState } from "react"
import {Link} from "react-router"
import { Menu, Ticket, X } from "lucide-react"

import { Button } from "./ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <Ticket className="h-5 w-5" />
          <span>EventTix</span>
        </Link>

        <nav className="hidden md:flex mx-6 flex-1 items-center gap-6 text-sm">
          <Link to="/events" className="transition-colors hover:text-foreground/80">
            Events
          </Link>
          <Link to="/venues" className="transition-colors hover:text-foreground/80">
            Venues
          </Link>
          <Link to="/about" className="transition-colors hover:text-foreground/80">
            About
          </Link>
          <Link to="/contact" className="transition-colors hover:text-foreground/80">
            Contact
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <ModeToggle />
          <div className="hidden md:flex gap-2">
            <Button variant="outline" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex h-16 items-center justify-between px-4 border-b">
            <Link to="/" className="flex items-center gap-2 font-semibold" onClick={() => setIsMenuOpen(false)}>
              <Ticket className="h-5 w-5" />
              <span>EventTix</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="grid gap-2 p-4 text-lg">
            <Link to="/events" className="flex py-3 border-b border-border" onClick={() => setIsMenuOpen(false)}>
              Events
            </Link>
            <Link to="/venues" className="flex py-3 border-b border-border" onClick={() => setIsMenuOpen(false)}>
              Venues
            </Link>
            <Link to="/about" className="flex py-3 border-b border-border" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="flex py-3 border-b border-border" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  Log in
                </Link>
              </Button>
              <Button className="w-full" asChild>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  Sign up
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
