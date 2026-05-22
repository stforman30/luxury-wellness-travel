export interface Property {
  id: string
  name: string
  location: string
  country: string
  description: string
  emoji: string
  tags: string[]
  wellnessScore: number
  adventureScore: number
  luxuryScore: number
  priceRange: string
}

export const properties: Property[] = [
  {
    id: '1',
    name: 'Aman Jaipur',
    location: 'Jaipur, India',
    country: 'India',
    description: 'A palatial retreat with Ayurvedic wellness, yoga, and cultural immersion in the pink city.',
    emoji: '🏰',
    tags: ['Wellness', 'Yoga', 'Ayurveda', 'Luxury', 'Cultural'],
    wellnessScore: 9,
    adventureScore: 6,
    luxuryScore: 10,
    priceRange: '$$$$',
  },
  {
    id: '2',
    name: 'Six Senses Bhutan',
    location: 'Paro, Bhutan',
    country: 'Bhutan',
    description: 'Luxury wellness retreat with hiking, meditation, and pristine mountain beauty.',
    emoji: '⛰️',
    tags: ['Hiking', 'Wellness', 'Meditation', 'Mountains', 'Adventure'],
    wellnessScore: 10,
    adventureScore: 8,
    luxuryScore: 9,
    priceRange: '$$$$',
  },
  {
    id: '3',
    name: 'Rosewood Tucker Ranch',
    location: 'Utah, USA',
    country: 'USA',
    description: 'Desert wellness resort with horseback riding, hiking trails, and spa recovery.',
    emoji: '🤠',
    tags: ['Adventure', 'Hiking', 'Spa', 'Desert', 'Wellness'],
    wellnessScore: 8,
    adventureScore: 8,
    luxuryScore: 9,
    priceRange: '$$$',
  },
  {
    id: '4',
    name: 'Sensei Lanai',
    location: 'Lanai, Hawaii',
    country: 'USA',
    description: 'Transformational wellness sanctuary with integrated fitness, nutrition, and ocean recovery.',
    emoji: '🌊',
    tags: ['Wellness', 'Fitness', 'Recovery', 'Ocean', 'Transformation'],
    wellnessScore: 10,
    adventureScore: 7,
    luxuryScore: 10,
    priceRange: '$$$$',
  },
  {
    id: '5',
    name: 'Amanwella',
    location: 'Tangalle, Sri Lanka',
    country: 'Sri Lanka',
    description: 'Coastal wellness retreat with yoga, surfing access, and Ayurvedic treatments.',
    emoji: '🏄',
    tags: ['Surfing', 'Yoga', 'Beach', 'Wellness', 'Water Sports'],
    wellnessScore: 8,
    adventureScore: 7,
    luxuryScore: 9,
    priceRange: '$$$',
  },
  {
    id: '6',
    name: 'Explora Atacama',
    location: 'San Pedro de Atacama, Chile',
    country: 'Chile',
    description: 'All-inclusive adventure wellness with guided hikes, stargazing, and desert recovery.',
    emoji: '⭐',
    tags: ['Hiking', 'Adventure', 'Desert', 'Exploration', 'Nature'],
    wellnessScore: 7,
    adventureScore: 9,
    luxuryScore: 8,
    priceRange: '$$$',
  },
]
