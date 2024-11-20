import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { cn } from "@/lib/utils";


const tieups = [
    "sebi.png",
    "icici.png",
    "sp.png",
    "ib.png",
    "hyperverge.png",
    "tv.png",
];

const RegulatoryTieups = () => {
    return (
        <div className="flex flex-col gap-8 px-14 py-12 items-center justify-center antialiased container">
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-black font-sans tracking-tighter md:text-3xl">
                        Building trust through collaboration
                    </h1>
                    <p className="max-w-prose">
                        Our partnerships with esteemed financial institutions
                        like ICICI Direct and regulatory body like SEBI foster trust in
                        our commitment to security and responsible financial
                        practices, ensuring your investments are managed in a
                        secure and reliable environment.
                    </p>
                </div>
                <Carousel
                    className="max-w-sm p-6"
                    orientation="vertical"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                >
                    <CarouselContent className="-mt-1 h-64">
                        {tieups.map((image, index) => (
                            <CarouselItem
                                className={cn(
                                    "flex justify-center items-center p-12",
                                    { "p-20": index == 0 || index == 2 }
                                )}
                            >
                                <img src={`/tieups/${image}`} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
};

export default RegulatoryTieups;
