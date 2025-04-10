const Projects = () => {
  return (
    <div id="products" className="my-20 text-gray-600">
        <h2 className="text-4xl font-bold text-center text-blue-950 my-3">Our Products</h2>
        <h4 className="text-xl text-center my-5">Innovative solutions designed for real-world impact</h4>
        <div className="flex flex-col gap-6 md:flex-row">
        <div className="relative rounded-md shadow-md flex flex-col basis-full gap-1 p-3 bg-[rgb(48,204,247,0.2)]">
            <h3 className="text-3xl font-bold text-center my-3 text-transparent bg-clip-text bg-gradient-to-r from-[rgba(51,51,153,0.8)] to-[rgb(48,204,247)]">Effico</h3>
            <p className="font-bold text-center my-3 text-xl">The Smarter Way to Study</p>
            <p className="text-lg">Effico is an AI-powered study assistant designed for students who want to optimize learning, boost productivity, and stay ahead. With personalized recommendations and study tracking, Effico makes every session count.</p>
            <div className="w-full flex">
              <button className="w-10/12 md:absolute bottom-1 left-0 right-0 text-lg my-3 text-white p-1.5 rounded-md mx-auto bg-gradient-to-r from-[rgba(51,51,153,0.8)] to-[rgb(48,204,247,0.8)] hover:from-[rgba(51,51,153)] hover:to-[rgb(48,204,247)]" >Discover Effico</button>
            </div>
        </div>
        <div className="relative rounded-md shadow-md flex flex-col basis-full gap-3 p-3 bg-[rgb(174,0,255,0.2)]">
            <h3 className="text-3xl font-bold text-center my-3 text-transparent bg-clip-text bg-gradient-to-r from-[rgba(255,0,204,0.8)] to-[rgb(140,0,255)]">FitTok </h3>
            <p className="text-xl font-bold text-center my-3">Where Fitness Meets Community</p>
            <p className="text-lg" >FitTok transforms workouts into dynamic challenges and competitions that keep users engaged, motivated, and accountable. Fitness should be fun, and with FitTok, every step, rep, and move counts.</p>
            <div className="w-full flex">
              <button className="w-10/12 md:absolute bottom-1 left-0 right-0 text-lg my-3 text-white p-1.5 rounded-md mx-auto bg-gradient-to-r from-[rgba(255,0,204,0.8)] hover:to-[rgb(140,0,255,0.8)] hover:from-[rgba(255,0,204)] to-[rgb(140,0,255)]" >Explore FitTok</button>
            </div>
        </div>
        <div className="relative rounded-md shadow-md flex flex-col basis-full gap-3 p-3 bg-[rgba(255,208,0,0.2)]">
            <h3 className="text-3xl font-bold text-center my-3 text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,98,0)] to-[rgb(255,208,0)]">CoupleSync</h3>
            <p className="text-xl font-bold text-center my-3">Redefining relational dynamics through technology</p>
            <p className="text-lg mb-10">AI-powered relationship app designed to help couples communicate better, resolve conflicts faster, and grow stronger together. Whether you're navigating a tough conversation or just want to understand your partner more deeply, CoupleSync acts as your personal relationship coach, mediator, and emotional translator all in one.</p>
            <div className="w-full flex">
              <button className="w-10/12 md:absolute bottom-1 left-0 right-0 text-lg my-3 text-white p-1.5 rounded-md mx-auto bg-gradient-to-r from-[rgb(255,98,0,0.8)] to-[rgb(255,208,0,0.8)] hover:from-[rgb(255,98,0)] hover:to-[rgb(255,208,0)]" >Explore FitTok</button>
            </div>
        </div>
        </div>
        <p className="text-center my-8 text-lg">More groundbreaking products are coming soon.</p>
    </div>
  )
}

export default Projects