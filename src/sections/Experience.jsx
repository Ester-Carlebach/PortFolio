import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".exp-card-wrapper").forEach((card) => {
      gsap.from(card, {
        y: 50, opacity: 0, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: card, start: "top 85%" },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "top top", ease: "none",
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top center", end: "bottom center", scrub: true,
      },
      scaleY: 1,
    });
  }, []);

  return (
    <section id="experience" className="section-padding xl:px-0 bg-transparent">
      <div className="w-full max-w-7xl mx-auto">
        <TitleHeader title="Professional Experience" sub="My Technical Journey" />

        <div className="mt-20 relative timeline-container">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gray-800 -translate-x-1/2">
            <div className="timeline w-full h-full bg-purple-500 origin-top scale-y-0" />
          </div>

          <div className="space-y-12">
            {expCards.map((card, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="exp-card-wrapper relative min-h-[250px] mb-20 md:mb-32">
                  <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-16">
                    {/* צד שמאל */}
                    <div className={`${isEven ? 'opacity-100' : 'opacity-0 pointer-events-none'} text-right`}>
                      {isEven ? (
                        <div className="bg-[#161031]/60 backdrop-blur-md p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all text-left w-full shadow-2xl">
                          <h1 className="font-bold text-xl text-white mb-1">{card.title}</h1>
                          <h3 className="text-purple-400 text-sm font-medium mb-4">{card.subTitle}</h3>
                          <ul className="list-disc ms-4 space-y-2 text-gray-400 text-sm">
                            {card.responsibilities.map((resp, idx) => <li key={idx}>{resp}</li>)}
                          </ul>
                        </div>
                      ) : <span className="text-gray-500 font-bold text-lg tracking-widest uppercase pr-8">{card.date}</span>}
                    </div>

                    <div className="relative z-30 flex justify-center items-center w-14">
                      <div className="w-14 h-14 rounded-full bg-[#161031] border-2 border-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                        {card.logoPath && <img src={card.logoPath} alt="logo" className="w-1/2 object-contain" />}
                      </div>
                    </div>

                    <div className={`${!isEven ? 'opacity-100' : 'opacity-0 pointer-events-none'} text-left`}>
                      {!isEven ? (
                        <div className="bg-[#161031]/60 backdrop-blur-md p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all w-full shadow-2xl">
                          <h1 className="font-bold text-xl text-white mb-1">{card.title}</h1>
                          <h3 className="text-purple-400 text-sm font-medium mb-4">{card.subTitle}</h3>
                          <ul className="list-disc ms-4 space-y-2 text-gray-400 text-sm">
                            {card.responsibilities.map((resp, idx) => <li key={idx}>{resp}</li>)}
                          </ul>
                        </div>
                      ) : <span className="text-gray-500 font-bold text-lg tracking-widest uppercase pl-8">{card.date}</span>}
                    </div>
                  </div>

                  <div className="md:hidden flex flex-col pl-12 relative">
                    <div className="absolute left-[-24px] top-0 z-30 w-10 h-10 rounded-full bg-[#161031] border-2 border-purple-500 flex items-center justify-center">
             {card.logoPath && <img src={card.logoPath} alt="logo" className="w-1/2 object-contain" />}
                    </div>
                    <span className="text-purple-400 font-bold text-xs mb-2">{card.date}</span>
                    <div className="bg-[#161031]/60 p-5 rounded-xl border border-gray-800">
                      <h1 className="font-bold text-lg text-white mb-1">{card.title}</h1>
                      <p className="text-gray-400 text-sm">{card.subTitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;