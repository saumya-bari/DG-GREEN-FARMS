
export const Footer = () => {
  return (
    <footer className="py-20 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-headline text-3xl tracking-widest text-primary uppercase">Verdant Luxe</span>
              <span className="text-[12px] tracking-[0.5em] uppercase text-muted-foreground -mt-1">Reserve</span>
            </div>
            <p className="text-muted-foreground font-light max-w-sm leading-relaxed mb-8">
              An exclusive estate designed for those who value privacy, nature, and the finer things in life. Your escape to the forest starts here.
            </p>
          </div>

          <div>
            <h4 className="text-white tracking-widest uppercase text-xs font-bold mb-6">Experience</h4>
            <ul className="space-y-4 text-muted-foreground text-sm font-light uppercase tracking-widest">
              <li><a href="#experience" className="hover:text-primary">The Sanctuary</a></li>
              <li><a href="#amenities" className="hover:text-primary">Amenities</a></li>
              <li><a href="#architect" className="hover:text-primary">Architect AI</a></li>
              <li><a href="#reviews" className="hover:text-primary">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white tracking-widest uppercase text-xs font-bold mb-6">Inquiries</h4>
            <ul className="space-y-4 text-muted-foreground text-sm font-light">
              <li>Sanctuary Blvd, Forest Edge</li>
              <li>+1 (800) LUXE-RES</li>
              <li>concierge@verdantluxe.com</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-muted-foreground text-[10px] tracking-[0.3em] uppercase">
          <p>© {new Date().getFullYear()} Verdant Luxe Reserve. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
