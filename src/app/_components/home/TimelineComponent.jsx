import { Timeline } from "@/components/ui/timeline";

export function TimelineComponent() {
  const data = [
    {
      title: "01",
      content: (
        <div>
          <p className="timelineText">
          Setting up foundation
          </p>
          <div className="mb-8">
            <p className="md:line-clamp-3 text-neutral-400 text-sm md:text-base font-normal mb-4">
            We start by building brand positioning, story constitution document, and a solid content strategy that align with your personality and goals.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "02",
      content: (
        <div>
          <p className="timelineText">
          Research and ideation
          </p>
          <div className="mb-8">
            <p className="line-clamp-3 text-neutral-400 text-sm md:text-base font-normal mb-4">
            Our expert copywriters get into the research mode to come up with ideas that leave you with no other option other predictable organic growth.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "03",
      content: (
        <div>
          <p className="timelineText">
          Scripting
          </p>
          <div className="mb-8">
            <p className="line-clamp-3 text-neutral-400 text-sm md:text-base font-normal mb-4">
            80% of any videos success depends on how a video is scripted and structured. Our copywriters make sure every idea is scripted properly before we send you the scripts.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "04",
      content: (
        <div>
          <p className="timelineText">
          Editing and distribution
          </p>
          <div className="mb-8">
            <p className="line-clamp-3 text-neutral-400 text-sm md:text-base font-normal mb-4">
            Once you record the scripts and send us the raw videos, Our editors get to work and create a unique editing style for your brand and managers distribute the content            </p>
          </div>
        </div>
      ),
    },
    {
      title: "05",
      content: (
        <div>
          <p className="timelineText">
          Organic marketing funnel
setup
          </p>
          <div className="mb-8">
            <p className="line-clamp-3 text-neutral-400 text-sm md:text-base font-normal mb-4">
            The work doesn't stop here. Now marketers take over and setup backend systems and automations to bring you predictable organic leads ands sales.
            </p>
          </div>
        </div>
      ),
    },
  
   
   ,
  ];
  return (
    <section className="w-full bg-neutral-950 overflow-clip" id='process'>

    <div className="max-w-7xl mx-auto ">
      <Timeline data={data} />
    </div>
    </section>
  );
}
