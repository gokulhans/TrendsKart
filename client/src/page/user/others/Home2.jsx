
import { Search, User, Heart, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link, NavLink } from 'react-router-dom'

  import HomeImg from "../../../assets/home.png";

export default function Home2() {
  const categories = [
    'Sneakers', 'Chappals', 'Perfume', 'Specs', 'Watch',
    'Airpod', 'Airbuds', 'Headset', 'Earphones', 'Gadgets'
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <section className="relative bg-[#C84332] px-4 py-12">
          <div className="container mx-auto">
            <div className="relative mx-auto max-w-4xl">
              <Button
                className="absolute -left-12 top-1/2 -translate-y-1/2 rounded-full bg-white"
                size="icon"
                variant="ghost"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                className="absolute -right-12 top-1/2 -translate-y-1/2 rounded-full bg-white"
                size="icon"
                variant="ghost"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              <img
                alt="White Nike Air Force 1 Sneakers"
                className="mx-auto"
                height={400}
                width={800}
                src={HomeImg}
              />
              <div className="mt-8 text-center">
                <Button className="rounded-full bg-white px-8 text-black hover:bg-gray-100">
                  Shop now
                </Button>
              </div>
              <div className="mt-6 flex justify-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white opacity-50" />
                <div className="h-2 w-2 rounded-full bg-white" />
                <div className="h-2 w-2 rounded-full bg-white opacity-50" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}