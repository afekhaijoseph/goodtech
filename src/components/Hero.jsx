import { ArrowRight } from "lucide-react"
const Hero = () => {
  return (
    <div className="text-center my-10 flex flex-col gap-10 md:w-2/3 md:mx-auto">
     <h1 className="text-5xl text-blue-950 font-bold leading-tight">From Ideas to Impact - <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(255,0,204,0.8)] to-[rgb(51,51,153,0.8)]">Innovating for a Smarter Future</span></h1>
     <h2 className="text-2xl text-gray-600 leading-normal my-5">Good Tech HQ is more than a tech company. We are the driving force behind transformative products that reshape industries and improve lives. By merging innovation, strategy, and execution, we turn bold ideas into tangible, lasting solutions.</h2>
     <div className="flex items-center gap-2 bg-blue-950 text-lg font-semibold text-white py-2 px-4 rounded-md mx-auto my-5 border-2 border-blue-950 hover:text-blue-950 hover:bg-white">
        <button onClick={() => {
            const section = document.getElementById('products');
            section?.scrollIntoView({ behavior: 'smooth' });
            }}>Explore Our Solutions</button>
        <ArrowRight className=""/>
      </div>
    </div>
  )
}

export default Hero