
"use client"

import { useState } from 'react'
import { aiCelebrationsArchitect, AiCelebrationsArchitectOutput } from '@/ai/flows/ai-celebrations-architect-flow'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Sparkles, Loader2, CalendarHeart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const AICelebrations = () => {
  const [loading, setLoading] = useState(false)
  const [guestCount, setGuestCount] = useState(10)
  const [eventType, setEventType] = useState('birthday party')
  const [result, setResult] = useState<AiCelebrationsArchitectOutput | null>(null)

  const handleArchitect = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const data = await aiCelebrationsArchitect({ guestCount, eventType })
      setResult(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="architect" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <Sparkles className="w-full h-full text-primary" strokeWidth={0.5} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary tracking-[0.4em] uppercase text-xs mb-4 block">The Alchemist of Events</span>
            <h2 className="font-headline text-4xl md:text-6xl text-white mb-8">AI Celebrations Architect</h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10">
              Planning a gathering? Our resident AI Architect crafts bespoke themes and 
              curates gourmet menus perfectly tailored to the intimacy of your event.
            </p>

            <form onSubmit={handleArchitect} className="space-y-6 max-w-md">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-muted-foreground uppercase text-[10px] tracking-widest">Guest Count</Label>
                  <Input 
                    type="number" 
                    value={guestCount} 
                    onChange={(e) => setGuestCount(Number(e.target.value))} 
                    className="bg-background/50 border-white/10 text-white h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground uppercase text-[10px] tracking-widest">Event Nature</Label>
                  <Select value={eventType} onValueChange={setEventType}>
                    <SelectTrigger className="bg-background/50 border-white/10 text-white h-12">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent className="luxury-glass text-white">
                      {['birthday party', 'corporate retreat', 'wedding anniversary', 'family reunion', 'romantic getaway'].map(t => (
                        <SelectItem key={t} value={t} className="capitalize">{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                disabled={loading}
                className="w-full bg-primary text-background hover:bg-primary/80 h-14 tracking-widest uppercase text-sm"
              >
                {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2" size={18} />}
                Architect My Celebration
              </Button>
            </form>
          </div>

          <div className="min-h-[400px] flex items-center justify-center">
            {!result && !loading && (
              <div className="text-center p-12 border border-dashed border-white/10 rounded-2xl flex flex-col items-center">
                <CalendarHeart className="text-primary/20 mb-6" size={80} strokeWidth={0.5} />
                <p className="text-muted-foreground font-light">Enter your details to generate <br/> a personalized event proposal.</p>
              </div>
            )}

            {loading && (
              <div className="flex flex-col items-center animate-pulse">
                <Loader2 className="text-primary animate-spin mb-4" size={48} />
                <p className="text-primary tracking-widest uppercase text-xs">Architecting Excellence...</p>
              </div>
            )}

            {result && !loading && (
              <Card className="luxury-glass border-primary/20 animate-fade-in w-full">
                <CardHeader className="border-b border-primary/10 pb-6">
                  <CardTitle className="font-headline text-primary text-3xl">Your Curated Proposal</CardTitle>
                </CardHeader>
                <CardContent className="pt-8 space-y-8">
                  <div>
                    <h4 className="text-xs tracking-[0.3em] uppercase text-primary font-bold mb-3">Event Theme</h4>
                    <p className="text-white text-lg font-light leading-relaxed">
                      {result.eventTheme}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs tracking-[0.3em] uppercase text-primary font-bold mb-3">Gourmet Dinner Menu</h4>
                    <div className="whitespace-pre-line text-muted-foreground font-light text-sm italic border-l-2 border-primary/20 pl-6 py-2">
                      {result.dinnerMenu}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
