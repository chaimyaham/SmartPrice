import HeroCarousel from "@/components/HeroCarousel"
import SearchBar from "@/components/SearchBar"
import Image from "next/image"


const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">

          <div className="flex flex-col justify-center">

            <p className="small-text">Smart Shopping start here
            <Image src="/assets/icons/arrow-right.svg" alt="arrow right" height={16} width={16} />
            </p>
            <h1 className="head-text">Unleash the power of 
            <span className="text-primary"> SmartPrice </span>
             </h1>
             <p className="mt-6"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi minus, offic iis aliquam vitae delectus excepturi.</p>

             <SearchBar/>
          </div>

          <HeroCarousel/>

        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">

          {['Apple iphone', 'Android' , 'Book' , 'sneakers'].map(
            (product)=>(
              <div>{product}</div>
            )
          )}

        </div>

      </section>
    
    </>
  )
}

export default Home