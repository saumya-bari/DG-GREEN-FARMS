
"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { format } from 'date-fns'
import { CalendarIcon, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'

export const Booking = () => {
  const [date, setDate] = useState<Date>()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Inquiry Sent",
      description: "Our concierge will contact you within 24 hours to confirm your sanctuary booking.",
    })
  }

  return (
    <section id="booking" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-primary tracking-[0.4em] uppercase text-xs mb-4 block">Secure Your Date</span>
          <h2 className="font-headline text-4xl md:text-6xl text-white">Inquiry Management</h2>
        </div>

        <div className="luxury-glass p-8 md:p-12 rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label className="text-muted-foreground uppercase text-[10px] tracking-widest">Full Name</Label>
                <Input required className="bg-background/40 border-white/10 h-12" placeholder="Alexander Sterling" />
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground uppercase text-[10px] tracking-widest">Email Address</Label>
                <Input required type="email" className="bg-background/40 border-white/10 h-12" placeholder="alex@luxe.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label className="text-muted-foreground uppercase text-[10px] tracking-widest">Planned Stay Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal bg-background/40 border-white/10 h-12",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 luxury-glass">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="bg-background border-white/10 text-white"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground uppercase text-[10px] tracking-widest">Guest Count</Label>
                <Input type="number" className="bg-background/40 border-white/10 h-12" placeholder="2-50 Guests" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-muted-foreground uppercase text-[10px] tracking-widest">Special Instructions</Label>
              <Textarea 
                className="bg-background/40 border-white/10 min-h-[120px] resize-none" 
                placeholder="Share any dietary requirements or event specifics..." 
              />
            </div>

            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white h-16 tracking-widest uppercase text-base">
              <Send className="mr-2" size={18} /> Send Sanctuary Inquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
