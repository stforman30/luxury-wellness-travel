import { properties } from './properties'

export function getWellnessRecommendations(answers: Record<string, string>) {
  const { goal, activity, pace, vibe } = answers
  
  // Simple matching logic based on user answers
  let scoreMap: Record<string, number> = {}
  
  properties.forEach(property => {
    let score = 0
    
    // Score based on goal
    if (goal === 'recovery' && property.wellnessScore > 8) score += 30
    if (goal === 'adventure' && property.adventureScore > 8) score += 30
    if (goal === 'balance' && property.wellnessScore > 7 && property.adventureScore > 7) score += 30
    if (goal === 'longevity' && property.wellnessScore > 8) score += 30
    
    // Score based on activity
    if (activity === 'hiking' && property.tags.includes('Hiking')) score += 20
    if (activity === 'water' && (property.tags.includes('Water Sports') || property.tags.includes('Surfing'))) score += 20
    if (activity === 'skiing' && property.tags.includes('Mountains')) score += 20
    if (activity === 'wellness' && property.tags.includes('Wellness')) score += 20
    
    // Score based on pace
    if (pace === 'slow' && property.wellnessScore > 8) score += 15
    if (pace === 'active' && property.adventureScore > 7) score += 15
    if (pace === 'balanced' && property.wellnessScore > 7 && property.adventureScore > 6) score += 15
    if (pace === 'intense' && property.adventureScore > 8) score += 15
    
    // Score based on vibe
    if (vibe === 'serene' && property.wellnessScore > 8) score += 15
    if (vibe === 'social' && property.tags.includes('Luxury')) score += 15
    if (vibe === 'solitary' && property.tags.includes('Nature')) score += 15
    if (vibe === 'transformative' && property.tags.includes('Transformation')) score += 15
    
    scoreMap[property.id] = score
  })
  
  // Return top 4 properties sorted by score
  return properties
    .map(p => ({ ...p, score: scoreMap[p.id] || 0 }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
}
