import { Button } from "@mantine/core"
import { r } from "app/router"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <section className="flex flex-col flex-1 justify-center">
      <div className="flex flex-col gap-6 justify-between sm:gap-10 md:gap-16 lg:flex-row">
        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:py-24 xl:w-5/12">

          <h1 className="mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
            Revolutionary way to build the web
          </h1>

          <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random.
          </p>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
          <Button size="md" component={Link} to={r['auth.register']}>Zaczynamy</Button>
          </div>
        </div>

        <div className="overflow-hidden h-48 bg-gray-100 rounded-lg shadow-lg lg:h-auto xl:w-5/12">
          <img
            src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div></section>
    </>
  )
}

export default Home
