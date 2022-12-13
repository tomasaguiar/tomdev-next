import { type NextPage } from "next";
import Head from "next/head";

import { ProjectOverview } from "../components/ProjectOverview";
import type { Project } from "../components/ProjectOverview";
import { SocialSection } from "../components/Social";
import { Logo } from "../components/Logo";

const Home: NextPage = () => {
  const projects: Project[] = [
    {
      name: "markdown-rs",
      href: "https://github.com/tomasaguiar/markdown-rs",
      role: "Lead the entire development, also responsible for design.",
      description:
        "An open-source cross-platform markdown editor written in Rust.",
    },
    {
      name: "goodthings",
      href: "https://github.com/tomasaguiar/goodthings",
      role: "Responsible for the entire development and design, presented as my professional course final project (july, 2022).  Final grade: 20/20",
      description:
        "The Social Media we Deserve, Built with React Native and Firebase.",
    },
  ];

  return (
    <>
      <Head>
        <title>tomdev</title>
        <meta
          name="description"
          content="Personal Portfolio with projects overview and social links."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen bg-white dark:bg-black">
        <div className="my-16 mx-8 md:mx-20 2xl:mx-60">
          <div className="fade-in animation-delay-3 ml-2">
            <Logo />
          </div>
          <div className="fade-in animation-delay-3 ml-2 mt-7 text-black dark:text-white">
            <p className="max-w-lg text-left text-sm leading-7">
              Hi, i&apos;m Tom, a software developer based in{" "}
              <a
                href="https://goo.gl/maps/Nnhn92aWiPh3bWa68"
                className="underline transition-all hover:no-underline"
              >
                Aveiro.
              </a>{" "}
              I&apos;m currently freelancing and developing Markdown-rs, an
              open-source cross-platform markdown editor written in Rust. I also
              love design and creating stunning interfaces for web and mobile.
              <br />
              London, Lisbon (GMT+0).
            </p>
            <p className="mt-3 text-sm">
              Project enquiries:{" "}
              <a
                href="mailto:aguiarhcode@gmail.com"
                className="underline transition-all hover:no-underline"
              >
                aguiarhcode@gmail.com
                {/* hi@tomdev.me */}
              </a>
            </p>
          </div>
          <div className="mt-20 space-y-10 text-black dark:text-white">
            <p className="fade-in animation-delay-4 ml-2 font-medium">
              Projects
            </p>
            <div className="fade-in-heading animation-delay-6">
              {projects.map((project) => (
                <ProjectOverview key={project.name} project={project} />
              ))}
            </div>
          </div>
          <SocialSection />
        </div>
      </main>
    </>
  );
};

export default Home;
