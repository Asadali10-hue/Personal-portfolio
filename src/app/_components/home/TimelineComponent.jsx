import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/data/timeline";
import { BlurIn } from "@/hooks/blurAnimation";

export function TimelineComponent() {
  return (
    <BlurIn>
      <section className="w-full bg-neutral-950 overflow-clip" id="process">
        <div className="max-w-7xl mx-auto ">
          <Timeline data={timelineData} />
        </div>
      </section>
    </BlurIn>
  );
}
