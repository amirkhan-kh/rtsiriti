import React, { useEffect, useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import { Card, CardContent } from "../../../../components/ui/card";
import { partnersImg } from "../../../../store/partnesrs";
import { useTranslation } from "react-i18next";

const CarouselHome: React.FC = () => {
  const [api, setApi] = useState<number>();
  const [current, setCurrent] = useState(0);
  const intervalRef = React.useRef<number>();
  const {t} = useTranslation("Intro")
  const onSelect = useCallback((api: any) => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;

    onSelect(api);
    api.on("select", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api) return;

    let animationId: number;
    let startTime: number;
    const interval = 3000; 

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed >= interval) {
        const nextIndex = current + 1;
        
        if (nextIndex >= partnersImg.length) {
          api.scrollTo(0);
        } else {
          api.scrollNext();
        }
        
        startTime = timestamp; 
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api, current]);

  return (
    <section className="py-8 container mx-auto px-4">
      <h2 className="text-lg font-semibold text-[#4C75F6]">{t("partners")}</h2>
      <div className="p-4">
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            duration: 20,
          }}
          setApi={setApi}
        >
          <CarouselContent className="-ml-4">
            {partnersImg.map((item, i) => (
              <CarouselItem 
                key={i} 
                className="pl-4 basis sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardContent className="flex items-center justify-center h-40">
                      <img
                        src={`/images/optimized/${item.img}.avif`}
                        alt={`Partner ${i + 1}`}
                        className="w-full h-full object-contain p-2"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 hidden md:flex" />
          <CarouselNext className="right-0 hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselHome;