import React from 'react'
import { ChevronDown } from 'lucide-react'
import { useState} from 'react'

const Faqs = () => {
  const faqData = [
    {question: "What kind of products does Good Tech HQ build?", answer: "We focus on technology-driven solutions to everyday problems across various verticals- fitness, education, productivity, romance, etc. ensuring every product is designed for real impact." },
    {question: "Do you accept external product ideas or partnerships?", answer: "Yes. We actively collaborate with startups, investors, and industry leaders to bring groundbreaking ideas to life." },
    {question: "How can I be part of Good Tech HQ?", answer: "You can partner, invest, or join our team. Reach out to explore collaboration opportunities." }
  ]
    const [openIndex, setOpenIndex] = useState(null);
    const handleClick = (e) => {
      const index = e.target.closest("[data-index]")?.dataset.index;
    if (index === undefined) return;
    setOpenIndex((prev) => (prev === index ? null : index));
    }
  return (
    <div id="faqs" className="text-lg py-3 md:w-3/4 mx-auto" onClick={handleClick}>

        <h2 className='text-4xl font-bold text-blue-950 text-center my-16'>Frequently Asked Questions</h2>
        <div>
        {faqData.map((item, index)=>{
          const isOpen = openIndex === index.toString();
          return (
            <div className='border-b border-gray-300 p-3' key={index} data-index={index}>
               <div className='w-full flex items-center'>
                 <p className='flex-grow text-blue-950 font-semibold'>{item.question}</p>
                 <div>
                   <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} size={24} color={'#1e1b4b'}/> 
                 </div>
               </div>
               <p className='text-base text-gray-500'>{isOpen&&item.answer}</p>
           </div>  
          )
          })}
        </div>

        <div className="flex items-center my-5">
          <button className="bg-gradient-to-r from-[rgb(255,0,204,0.8)] to-[rgb(51,51,153,0.8)] text-white p-2 rounded-md mx-auto hover:from-[rgb(255,0,204)] hover:to-[rgb(51,51,153)] transition-colors duration-300 ease-in-out" >Contact Us
          </button>
        </div>
    </div>
  )
}
export default Faqs








