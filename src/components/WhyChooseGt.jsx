import React from 'react'
import {Rocket, Award, TrendingUp, PersonStanding} from 'lucide-react'

const WhyChooseGt = () => {
  return (
    <div id="whychoose" className='text-gray-500'>
        <h2 className='text-4xl font-bold text-blue-950 text-center my-16' >Why Choose Good Tech HQ?</h2>  
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:w-'>
        <div className='shadow-md border-2 border-gray-100 p-3'>
            <Rocket size={48} stroke={'rgba(51,51,153,0.8)'}/>
            <div>
               <h3 className='text-lg font-bold text-blue-950 my-3'>End-to-End Innovation</h3>
               <p>We don’t just build products; we launch, scale, and optimize them for long-term success.</p>
            </div>
        </div>

        <div className='shadow-md border-2 border-gray-100 p-3'>
            <PersonStanding size={48} stroke={'rgba(255,0,204,0.8)'}/>
            <div>
               <h3 className='text-lg font-bold text-blue-950 my-3'>Tech-Driven, Human-Centered</h3>
               <p>Every solution is designed with purpose, solving real problems for real people.</p>
            </div>
        </div>

        <div className='shadow-md border-2 border-gray-100 p-3'>
            <Award size={48} stroke={'rgba(51,51,153,0.8)'}/>
            <div>
              <h3 className='text-lg font-bold text-blue-950 my-3'>Strategic Execution</h3>
              <p>From concept to commercialization, our approach is structured, data-driven, and results-oriented.</p>
            </div>
        </div>

        <div className='shadow-md border-2 border-gray-100 p-3'>
            <TrendingUp size={48} stroke={'rgba(255,0,204,0.8)'}/>
            <div>
               <h3 className='text-lg font-bold text-blue-950 my-3'>Sustainable Growth</h3>
               <p>Beyond launch, we ensure continuous optimization, scalability, and long-term excellence.</p>
            </div>
        </div>
        </div>
        
        <p className='font-bold text-lg text-center text-blue-950 my-10'>Good Tech HQ is not just a company. It’s an ecosystem where vision meets execution.</p>
        <div className="flex items-center my-5">
        <button className="bg-gradient-to-r from-[rgb(255,0,204,0.8)] to-[rgb(51,51,153,0.8)] text-white p-2 rounded-md mx-auto hover:from-[rgb(255,0,204)] hover:to-[rgb(51,51,153)] transition-colors duration-300 ease-in-out" >Partner With Us</button>
      </div>
    </div>
  )
}

export default WhyChooseGt