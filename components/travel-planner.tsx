"use client"

import { useState } from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Users, Calendar, Sparkles, ArrowRight } from "lucide-react"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

interface Destination {
  name: string
  coordinates: [number, number]
  country: string
}

const popularDestinations: Destination[] = [
  { name: "Bali", coordinates: [115.188, -8.409], country: "Indonesia" },
  { name: "Tuscany", coordinates: [11.255, 43.771], country: "Italy" },
  { name: "Costa Rica", coordinates: [-84.09, 9.748], country: "Costa Rica" },
  { name: "Thailand", coordinates: [100.501, 13.756], country: "Thailand" },
  { name: "Portugal", coordinates: [-9.139, 38.722], country: "Portugal" },
  { name: "Morocco", coordinates: [-7.989, 31.629], country: "Morocco" },
  { name: "Greece", coordinates: [23.727, 37.983], country: "Greece" },
  { name: "Sri Lanka", coordinates: [79.861, 6.927], country: "Sri Lanka" },
]

export function TravelPlanner() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)
  const [duration, setDuration] = useState([7])
  const [travelers, setTravelers] = useState("2")
  const [travelGoal, setTravelGoal] = useState("")
  const [step, setStep] = useState(1)

  const handleMarkerClick = (destination: Destination) => {
    setSelectedDestination(destination)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  if (step === 2) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-sans text-4xl md:text-5xl font-light tracking-tight mb-6">
            Your journey awaits
          </h2>
          <p className="font-[family-name:var(--font-body)] text-muted-foreground text-lg leading-relaxed mb-8">
            We&apos;re crafting a personalized wellness experience for{" "}
            <span className="text-foreground font-medium">{travelers} traveler{travelers !== "1" ? "s" : ""}</span> in{" "}
            <span className="text-foreground font-medium">{selectedDestination?.name || "your chosen destination"}</span> for{" "}
            <span className="text-foreground font-medium">{duration[0]} days</span>.
          </p>
          <p className="font-[family-name:var(--font-body)] text-muted-foreground mb-10">
            Our wellness concierge will reach out within 24 hours with curated retreat options.
          </p>
          <Button
            onClick={() => setStep(1)}
            variant="outline"
            className="font-[family-name:var(--font-body)]"
          >
            Plan another trip
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Map Section */}
      <div className="lg:w-1/2 h-[50vh] lg:h-screen relative bg-muted/30">
        <div className="absolute inset-0">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 120,
              center: [20, 20],
            }}
            className="w-full h-full"
          >
            <ZoomableGroup>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="oklch(0.92 0.02 160)"
                      stroke="oklch(0.85 0.02 160)"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "oklch(0.88 0.03 160)", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>
              {popularDestinations.map((destination) => (
                <Marker
                  key={destination.name}
                  coordinates={destination.coordinates}
                  onClick={() => handleMarkerClick(destination)}
                >
                  <g
                    className="cursor-pointer transition-transform hover:scale-125"
                    style={{
                      transform: selectedDestination?.name === destination.name ? "scale(1.3)" : "scale(1)",
                    }}
                  >
                    <circle
                      r={selectedDestination?.name === destination.name ? 8 : 6}
                      fill={selectedDestination?.name === destination.name ? "oklch(0.45 0.08 160)" : "oklch(0.55 0.08 160)"}
                      stroke="#fff"
                      strokeWidth={2}
                    />
                  </g>
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
        </div>
        
        {/* Map Legend */}
        <div className="absolute bottom-6 left-6 right-6 lg:right-auto">
          <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border">
            <p className="font-[family-name:var(--font-body)] text-sm text-muted-foreground mb-3">
              Select a destination on the map
            </p>
            <div className="flex flex-wrap gap-2">
              {popularDestinations.map((dest) => (
                <button
                  key={dest.name}
                  onClick={() => handleMarkerClick(dest)}
                  className={`font-[family-name:var(--font-body)] text-xs px-3 py-1.5 rounded-full transition-colors ${
                    selectedDestination?.name === dest.name
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground"
                  }`}
                >
                  {dest.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 flex items-center justify-center px-6 py-12 lg:py-0">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <p className="font-[family-name:var(--font-body)] text-sm uppercase tracking-widest text-muted-foreground mb-3">
              Serenova
            </p>
            <h1 className="font-sans text-4xl md:text-5xl font-light tracking-tight text-balance mb-4">
              Plan your wellness escape
            </h1>
            <p className="font-[family-name:var(--font-body)] text-muted-foreground text-lg leading-relaxed">
              Tell us about your ideal retreat and we&apos;ll curate the perfect experience.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Destination */}
            <div className="space-y-3">
              <Label className="font-[family-name:var(--font-body)] text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Destination
              </Label>
              <div className="relative">
                <Input
                  value={selectedDestination ? `${selectedDestination.name}, ${selectedDestination.country}` : ""}
                  placeholder="Select on map or type here..."
                  onChange={(e) => {
                    if (!e.target.value) {
                      setSelectedDestination(null)
                    }
                  }}
                  className="font-[family-name:var(--font-body)] h-12 bg-card"
                  readOnly
                />
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-4">
              <Label className="font-[family-name:var(--font-body)] text-sm font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                Duration: {duration[0]} days
              </Label>
              <Slider
                value={duration}
                onValueChange={setDuration}
                min={3}
                max={30}
                step={1}
                className="py-2"
              />
              <div className="flex justify-between font-[family-name:var(--font-body)] text-xs text-muted-foreground">
                <span>3 days</span>
                <span>30 days</span>
              </div>
            </div>

            {/* Travelers */}
            <div className="space-y-3">
              <Label className="font-[family-name:var(--font-body)] text-sm font-medium flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Travelers
              </Label>
              <Select value={travelers} onValueChange={setTravelers}>
                <SelectTrigger className="font-[family-name:var(--font-body)] h-12 bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1" className="font-[family-name:var(--font-body)]">1 traveler (Solo retreat)</SelectItem>
                  <SelectItem value="2" className="font-[family-name:var(--font-body)]">2 travelers (Couples retreat)</SelectItem>
                  <SelectItem value="3" className="font-[family-name:var(--font-body)]">3 travelers</SelectItem>
                  <SelectItem value="4" className="font-[family-name:var(--font-body)]">4 travelers</SelectItem>
                  <SelectItem value="5+" className="font-[family-name:var(--font-body)]">5+ travelers (Group retreat)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Travel Goal */}
            <div className="space-y-3">
              <Label className="font-[family-name:var(--font-body)] text-sm font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                What&apos;s your wellness goal?
              </Label>
              <Textarea
                value={travelGoal}
                onChange={(e) => setTravelGoal(e.target.value)}
                placeholder="E.g., I want to disconnect from work, practice daily yoga, and focus on mindful eating..."
                className="font-[family-name:var(--font-body)] min-h-[120px] bg-card resize-none"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="w-full h-14 font-[family-name:var(--font-body)] text-base gap-2"
              disabled={!selectedDestination}
            >
              Find my perfect retreat
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          <p className="font-[family-name:var(--font-body)] text-xs text-muted-foreground text-center mt-6">
            No commitment required. Our concierge will contact you with personalized options.
          </p>
        </div>
      </div>
    </div>
  )
}
