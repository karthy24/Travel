import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
interface CampProps{
  backgroundImage:string;
  title:string;
  subtitle:string;
  peopleJoined:string;
}

const CampSite =({backgroundImage,title,subtitle,peopleJoined}:
  CampProps ) =>{
  return(
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}
    bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between
      p-6 lg:px-20 lg:py-10">
          <div className="flexCenter gap-4">
            <div className="rounded-full bg-green-50 p-4">
              <Image
                src="/folded-map.svg"
                alt="map"
                width={28}
                height={28}
              />
            </div>
            <div className="flex flex-col gap-1">
                <h4 className="bold-18 text-white">{title}</h4>
                <p className="regular-14 text-white">{subtitle}</p>
            </div>
          </div>
          <div className="flexCenter gap-6">
              <span className="flex -space-x-4 overflow-hidden">
                {PEOPLE_URL.map((url)=>(
                  <Image 
                    className="inline-block h-10 w-10 rounded-full "
                    src={url}
                    key={url}
                    alt="person"
                    width={52}
                    height={52}
                  />
                ))}
              </span>
              <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
          </div>
      </div>
    </div>
  )
}
const Camp = () => {
  return (
    <section className="relative max-container padding-container flex flex-col py-10 pb-32 lg:py-20">
      {/* Image Carousel */}
      <div className="relative">
        <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
          <CampSite
            backgroundImage="bg-bg-img-1"
            title="Tour Camp"
            subtitle="Kodaikanal, Ooty"
            peopleJoined="50+ Joined"
          />
          <CampSite
            backgroundImage="bg-bg-img-2"
            title="Mountain View Camp"
            subtitle="Yelagiri, Kotagiri"
            peopleJoined="50+ Joined"
          />
        </div>

        {/* Green Box for Desktop */}
        <div className="hidden lg:block absolute right-6 bottom-6 z-10 w-[360px] rounded-2xl bg-green-50 p-8 shadow-xl">
          <h2 className="text-white text-xl font-semibold leading-snug">
            <strong>Feeling Lost</strong><br />And Not Knowing The Way?
          </h2>
          <p className="mt-3 text-white text-[15px] leading-relaxed">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large.
          </p>
          <Image
            src="/quote.svg"
            alt="quote"
            width={90}
            height={100}
            className="absolute bottom-2 right-2 opacity-10"
          />
        </div>
      </div>

      {/* Green Box for Mobile/Tablet */}
      <div className="lg:hidden mt-6 px-4">
        <div className="bg-green-50 p-8 rounded-2xl shadow-xl relative">
          <h2 className="text-white text-xl font-semibold leading-snug">
            <strong>Feeling Lost</strong><br />And Not Knowing The Way?
          </h2>
          <p className="mt-3 text-white text-[15px] leading-relaxed">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large.
          </p>
          <Image
            src="/quote.svg"
            alt="quote"
            width={90}
            height={100}
            className="absolute bottom-2 right-2 opacity-10"
          />
        </div>
      </div>
    </section>

  )
}

export default Camp



