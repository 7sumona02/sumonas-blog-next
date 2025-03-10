export default function BlogCard() {
    return (
      <div className="p-6 rounded-lg w-[28rem] flex-shrink-0">
        <div className="relative overflow-hidden rounded-lg">
          <img src="/blog.jpg" alt="Scroll Animation" className="w-[30vw] h-[28vh] object-cover" />
        </div>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">June 3, 2024</p>
          <h2 className="text-lg font-bold mt-2">Mask Section Transition</h2>
          <p className="text-neutral-200 tracking-tight text-sm mt-1">
            A website tutorial featuring a scroll animation using an SVG Mask to create a section transition, made with React, Framer Motion. Inspired by:
            <a href="https://axelvanhessche.com/" className="text-primary hover:underline">
              https://axelvanhessche.com/
            </a>
            . Pictures by Eric Asamoah, Inka and Niclas Lindergård, Daniel Ribar.
          </p>
        </div>
      </div>
    )
  }