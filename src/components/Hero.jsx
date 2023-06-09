import { logo } from '../assets'

const Hero = () => {
  return (
    // Create header
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

            <button className="black_btn" type="button" onClick={() => window.open('https://github.com/markii1607')}>GitHub</button>
        </nav>

        {/* Body */}
        <h1 className="head_text">
            Summarize Articles with <br className='max-md:hidden' />
            <span className="orange_gradient">OpenAI GPT-4</span>
        </h1>
        <h2 className="desc">
            Simplify your reading with Sumz AI, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
        </h2>
    </header>
  )
}

export default Hero