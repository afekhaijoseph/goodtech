import { Combine, TrendingUp, Briefcase } from "lucide-react"
const Ecosystem = () => {
  return (
    <div className="text-gray-500" >
        <h2 className="text-4xl text-blue-950 font-bold text-center my-3">Join Our Ecosystem</h2>
        <p className="text-xl text-center mb-14">Good Tech HQ thrives on collaboration, bold thinking, and shared ambition. If you are an innovator, investor, or entrepreneur looking to shape the future, there’s a place for you here. Opportunities include:</p>
        <div className="flex flex-col gap-6 md:flex-row md:w-3/4 mx-auto">
        <div className="flex flex-col items-center gap-2 border border-gray-200 p-3 shadow-md basis-full" >
          <div className="rounded-full p-3 bg-gray-200">
            <Combine size={48} stroke="rgba(51,51,153)"/>  
          </div>
            <h3 className="text-blue-950 font-bold" >Collaborate</h3>
            <p className="text-center" >Partner with us to develop groundbreaking solutions.</p>
        </div>
        <div className="flex flex-col items-center gap-2 border border-gray-200 p-3 shadow-md basis-full" >
          <div className="rounded-full p-3 bg-gray-200">
            <TrendingUp size={48} stroke="rgba(51,51,153)"/>
          </div>
            <h3 className="text-blue-950 font-bold" >Invest</h3>
            <p className="text-center">Back high-impact ideas with significant growth potential.</p>
        </div>
        <div className="flex flex-col items-center gap-2 border border-gray-200 p-3 shadow-md basis-full" >
          <div className="rounded-full p-3 bg-gray-200">
             <Briefcase size={48} stroke="rgba(51,51,153)"/>
          </div>
            <h3 className="text-blue-950 font-bold">Careers</h3>
            <p className="text-center">Join a team where innovation, strategy, and execution converge.</p>
        </div>
        </div>
        <p className="text-center my-5 text-blue-950 font-semibold">Let’s build the future together.</p>
        <div className="flex items-center my-5">
          <button className="bg-gradient-to-r from-[rgb(255,0,204,0.8)] to-[rgb(51,51,153,0.8)] text-white p-2 rounded-md mx-auto hover:from-[rgb(255,0,204)] hover:to-[rgb(51,51,153)] transition-colors duration-300 ease-in-out" >Let's connect</button>
        </div>
    </div>
  )
}
export default Ecosystem