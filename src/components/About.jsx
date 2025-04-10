import { Briefcase, Rocket, Search, TrendingUp } from "lucide-react"
const About = () => {
  return (
    <div id="about" className="text-gray-600 my-10 text-lg md:w-3/4 mx-auto">
      <h2 className="text-4xl text-blue-950 font-bold text-center my-3">About Us</h2>
      <p className="text-xl text-center mb-14">Good Tech HQ is built on a single, unwavering mission, to create technology that makes a difference.</p>
      <p>We believe that innovation is not just about building products; it's about identifying problems, engineering solutions, and ensuring lasting impact. Our approach is structured into four core divisions, each essential to the product journey:</p>
      <div className="my-10 text-blue-950 grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="lab shadow-md rounded-md p-7 flex flex-col gap-3 items-start bg-[rgba(51,51,153,0.2)]">
        <Search size={48} stroke="rgba(51,51,153,0.8)"/>
        <h3 className="font-bold">Lab</h3>
        <p>The birthplace of ideas. We explore, experiment, and refine groundbreaking concepts. </p>
      </div>

      <div className="studio shadow-md rounded-md p-7 flex flex-col gap-3 items-start bg-[rgba(255,0,204,0.2)]">
        <Briefcase size={48} stroke="rgba(255,0,204,0.8)"/>
        <h3 className="font-bold">Studio</h3>
        <p>Where ideas take shape. Through cutting-edge development and design, we bring concepts to life.</p>
      </div>

      <div className="launchpad shadow-md rounded-md p-7 flex flex-col gap-3 items-start bg-[rgba(51,51,153,0.2)]">
        <Rocket size={48} stroke="rgba(51,51,153,0.8)"/>
        <h3 className="font-bold">Launchpad</h3>
        <p>Where products meet the world. We drive market adoption and scale growth.</p>
      </div>

      <div className="observatory shadow-md rounded-md p-3 flex flex-col gap-3 items-start bg-[rgba(255,0,204,0.2)]">
        <TrendingUp size={48} stroke="rgba(255,0,204,0.8)"/>
        <h3 className="font-bold">Observatory</h3>
        <p>The birthplace of ideas. We explore, experiment, and refine groundbreaking concepts. </p>
      </div>
      </div>
    
      <p className="my-10" >From FitTok, a social fitness movement, to Effico AI, a smart study assistant, Good Tech HQ is committed to building solutions that redefine how people engage, learn, and thrive.</p>
      <p className="text-blue-950 font-bold text-lg text-center">Innovation isn't an event. It's a process. And we own every step.</p>
      
      <div className="flex items-center my-5">
      <button onClick={() => {
            const section = document.getElementById('git');
            section?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-950 text-white p-2 rounded-md mx-auto border-2 border-blue-950 hover:bg-white hover:text-blue-950">Get in Touch</button>
      </div>
      
    </div>
  )
}

export default About