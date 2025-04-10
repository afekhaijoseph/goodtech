import { Mail } from "lucide-react"
const GetInTouch = () => {
  return (
    <div id="git" className="text-gray-500">
        <h2 className='text-4xl font-bold text-blue-950 text-center mb-6 mt-10'>Get in Touch</h2>
        <h3 className="text-xl text-center mb-14" >Have questions or want to discuss a potential collaboration? We'd love to hear from you.</h3>
        <div className="flex flex-col  mx-auto  md:flex-row md:w-3/4 md:gap-10 md:items-center">
        <form className="flex flex-col gap-2 basis-full" action="">
            <div className="flex gap-2">
                <label htmlFor="name"></label>
                <input className="w-full border-2 border-gray-200 p-1 rounded-md" placeholder="Name" type="text" required />
            </div>
            <div className="flex gap-2">
                <label htmlFor="email"></label>
                <input className="w-full border-2 border-gray-200 p-1 rounded-md" placeholder="Email" type="text" required />
            </div>
            <div className="flex gap-2">
                <label htmlFor="message"></label>
                <textarea placeholder="Message" rows="6" className="w-full border-2 border-gray-200 p-1 rounded-md" required/>
            </div>
            <div className="">
          <button className="bg-blue-950 text-white p-2 rounded-md mx-auto w-full">Send Message</button>
        </div>
        </form>

        <div className="my-10 basis-full">
            <h3 className="text-lg font-bold text-blue-950 mb-5">Contact Information</h3>
            <div className="flex items-center gap-2 my-4">
                <Mail size={48} stroke="rgba(51,51,153)"/>
                <div>
                    <p className="text-bold text-blue-950">Email</p>
                    <a   className="text-blue-500" href="info@goodtechhq.com">info@goodtechhq.com</a>
                </div>
            </div>
            <div className="mb-5">
                <p className="font-bold text-blue-950 text-lg ">Location</p>
                <p>123 Innovation Drive</p>
                <p>Tech Valley, CA 94103</p>
            </div>
            <div>
                <p className="font-bold text-lg text-blue-950" >Follow us</p>
                <div className="flex gap-2">
                    <p>LinkedIn</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
        </div>
        

       

    </div>
  )
}

export default GetInTouch