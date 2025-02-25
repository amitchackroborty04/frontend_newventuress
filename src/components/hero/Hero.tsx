import { blurDataUrl } from "@/data/blur-data-url";
import Image from "next/image";
import Anim from "../animations/anim";

const Hero = () => {
  return (
    <>
      <div>
        <section
          className="relative w-full h-[430px] lg:h-[530px] bg-cover bg-center lg:px-20 animate-moveBackground"
          style={{
            backgroundImage: `url(/assets/img/heroBg.png)`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container flex items-center justify-start h-full text-white">
            <div className="md:w-[670px]">
              <h1 className="text-[32px] leading-[38.4px] lg:text-[56px] lg:leading-[67.2px] font-semibold mb-4 ">
                SHARE THE <br />
                BALANCE
              </h1>
              <p className="text-[16px] md:text-[18px] mb-8">
                SHRED is here to make your weed experience easier. It all
                started with three great flavor pre-milled blends. Since then,
                SHRED has expanded to include gummies, vapes, infused pre-rolls,
                and even hash!
              </p>
            </div>
          </div>
        </section>

        {/* Three images */}
        <Anim variant="zoomIn">
          <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-[24px] mx-auto max-w-[1200px] mt-[-50px] lg:mt-[-100px] z-50 justify-items-center py-2 px-4">
            {["hero1.png", "hero2.png", "hero3.png"].map((img, index) => (
              <div
                key={index}
                className=" h-[120px] w-[103px] md:w-[245px] md:h-[250px] lg:h-[300px] lg:w-[370px] rounded-[16px] relative"
              >
                <Image
                  src={`/assets/img/${img}`}
                  alt={`SHRED Product ${index + 1}`}
                  className="rounded-[16px]"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                />
              </div>
            ))}
          </div>
        </Anim>
      </div>
    </>
  );
};

export default Hero;
