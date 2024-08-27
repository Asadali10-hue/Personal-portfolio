import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { creators } from "@/data/creators";

const starts = [1, 2, 3, 4, 5];
const CreatorsComposent = () => {
  return (
    <>
      {" "}
      <div className="flex items-center flex-col md:flex-row gap-4 mx-auto justify-center animate-fade-in">
        <div className="flex flex-row items-center justify-center  w-fit">
          <AnimatedTooltip items={creators} />
        </div>
        <div className="flex items-center">
          {starts.map((item, index) => {
            return (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="h-4 w-4 text-yellow-400 mx-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                key={index}
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
            );
          })}
        </div>
      </div>
      <p className="animate-fade-in mt-2 -translate-y-4 text-balance text-sm tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms]">
        Trusted by 27,000+ creators
      </p>
    </>
  );
};

export default CreatorsComposent;
