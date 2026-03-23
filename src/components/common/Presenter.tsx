"use client";
import Image from "next/image";
import Message from "./Message";
import getMessagesFromTheme from "@/utils/getMessagesFromTheme";
import { useWeather } from "@/hooks/useWeather";

const Presenter = () => {
  const { weatherData } = useWeather();
  if (!weatherData) return <></>;

  const messageArray = getMessagesFromTheme(weatherData.theme);

  return (
    <div className="flex flex-col gap-4 w-full h-full p-4 pb-8">
      <div className="flex flex-1 flex-col gap-4 items-end justify-end p-4">
        <Message text={messageArray[0]} delay={200} />
        <Message text={messageArray[1]} delay={400} />
        <Message text={messageArray[2]} delay={600} />
      </div>
      <div className="border-4 border-black relative shrink-0">
        <Image
          src={"/angry-caster.webp"}
          alt={"angry-robot-caster"}
          className="w-full h-60 object-cover"
          width={640}
          height={640}
          loading="eager"
        />
        <div className="bg-white absolute bottom-0 right-0 px-6 py-1 border-t-accent border-t-4 rounded-tl-full font-bold">
          Angry Caster Jr.
        </div>
      </div>
    </div>
  );
};

export default Presenter;
