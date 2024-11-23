import { Button } from "~/components/ui/button"
import { CalendarHeartIcon, CircleDollarSign, Gift, Plane } from 'lucide-react'
import { Link } from "@remix-run/react";
import { Image } from '@shopify/hydrogen';

export default function EcoBottleLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Love Story, One Month at a Time.
            </h1>
            <p className="text-xl mb-8 text-gray-600">Design a personalized couple's calendar that celebrates you!</p>
            <div className="mb-8">
              <Link to={"/"}>
                <Button className="bg-blue-500 text-white hover:bg-blue-600"> <CalendarHeartIcon className="mr-2 h-4 w-4" />
                  Start Your Calendar
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/display-calendar.jpg"
                alt="EcoBottle"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why make a Calendar?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Gift className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">A Perfect Gift</h3>
                <p className="text-gray-600">Surprise your loved one with a thoughtful, personalized calendar that celebrates your relationship </p>
              </div>
              <div className="text-center">
                <Plane className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
                <p className="text-gray-600">Receive your custom calendar quickly, so you can start planning your special moments right away </p>
              </div>
              <div className="text-center">
                <CircleDollarSign className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Risk Free</h3>
                <p className="text-gray-600">Return your Calendar within 30 days and get your money back, we're confident you'll love your couple's calendar </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="py-20 bg-blue-500 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Spark Your Romance?</h2>
            <p className="text-xl mb-8">Create your personalized couple's calendar and start planning unforgettable moments together!</p>
            <Link to={"/"}>
              <Button className="bg-white text-blue-500 hover:bg-blue-50">
                <CalendarHeartIcon className="mr-2 h-4 w-4" />
                Create Your Calendar
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

