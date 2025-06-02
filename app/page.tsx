import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Undetectable from "@/components/Undetectable";
import Usage from "@/components/Usage";

export default function Home() {
  return (
  <>
  <Hero />
  <Features
  title="The turning point of thought"
  subtitle="Cluely helps with anything it sees or hears."
  features={[
    {
      imageSrc: "https://cluely.com/_next/static/media/bento1.3b364800.png",
      title: "Sees what you see",
      description:
        "Cluely sees and understands all the content on your screen — code, slides, questions, docs, dashboards.",
      imageAlt: "Screen content visualization",
    },
    {
      imageSrc: "https://cluely.com/_next/static/media/bento2.5d45c6ca.png",
      title: "Hears what you hear",
      description:
        "Cluely listens silently in the background and understands your meetings in real time — without ever joining them.",
      imageAlt: "Meeting audio visualization",
    },
    {
      imageSrc: "https://cluely.com/_next/static/media/bento3.b9446d98.png",
      title: "Answers anything",
      description:
        "Just press a key. Cluely knows what you’re doing and responds with exactly what matters — no switching tabs, no guesswork.",
      imageAlt: "Instant response feature",
    },
   
  ]}
/>
  <Manifesto />
  <Undetectable
  title="Undetectable by design."
  subtitle="No bots in the room. No Zoom guests. No screen-share trails. Works on everything."
  headerImageSrc="https://cluely.com/_next/static/media/works.2bbce57b.png"
  headerImageAlt="Supported platforms"
  features={[
    {
      title: "Doesn’t join meetings",
      description:
        "Cluely never shows up in shared screens, recordings, or external meeting tools. It’s fully hidden from everyone but you.",
      imageSrc: "https://cluely.com/_next/static/media/meeting.d6f4df3a.png",
      imageAlt: "Doesn’t join meetings-screenshot",
      reverseOrder: false,
    },
    {
      title: "Invisible to screen-share",
      description:
        "Cluely never shows up in shared screens, recordings, or external meeting tools. It’s fully hidden from everyone but you.",
      imageSrc: "https://cluely.com/_next/static/media/screen.8c07aba8.png",
      imageAlt: "Invisible to screen-share-screenshot",
      reverseOrder: true,
    },
    {
      title: "Follow your eyes",
      description:
        "Cluely’s window is fully moveable so you can position it exactly where you’re looking — without ever breaking concentration.",
      imageSrc: "https://cluely.com/_next/static/media/eyes.00797834.png",
      imageAlt: "Follow your eyes-screenshot",
      reverseOrder: false,
    },
  ]}
/>
<Usage
  title="Three ways Cluely changes how you think."
  sections={[
    {
      title: "Meetings",
      description:
        "Cluely hears the conversation and gives you live, context-aware responses to questions, and recalls information from earlier in the transcript so you never lose the thread.",
      imageSrc: "https://cluely.com/_next/static/media/meeting.c59aeb79.png",
      imageAlt: "Section 1 image",
    },
    {
      title: "Sales calls",
      description:
        "Cluely helps you handle objections and arms non-technical sales reps with product info exactly when it’s needed.",
      imageSrc: "https://cluely.com/_next/static/media/sales.a83b1a9d.png",
      imageAlt: "Section 2 image",
    },
    {
      title: "Solo deep work",
      description:
        "Even without audio, Cluely reads your screen and responds to prompts or context. Whether you're studying, debugging, writing, or researching, Cluely helps you think.",
      imageSrc: "https://cluely.com/_next/static/media/deep.b625b59c.png",
      imageAlt: "Section 3 image",
    },
  ]}
/>
<CTA />
  </>
  );
}
