import React from "react";
import ExportedImage from "next-image-export-optimizer";
import { aboutMeData, AboutMeProps } from "./data";
import { experienceData, ExperienceTableProps } from "./data";
import { publicationData, PublicationProps } from "./data";
import { allResearchCategories, allSelectedWorks } from "content-collections";
import Markdown from "react-markdown";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { MainSection } from "@/components/MainSection";

const AboutMe: React.FC<AboutMeProps> = ({ name, picture, description }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <MainSection title="About me">
      <div className="gap-4 md:flex">
        <div className="min-w-1/4 md:min-w-1/5 justify-items-center md:px-2">
          <ExportedImage
            src={picture}
            alt="profile picture"
            width={160}
            height={160}
            className="object-center rounded-xl shadow-lg"
            basePath={basePath}
          />
          <div className="">
            <p className="text-2xl whitespace-nowrap p-4">{name}</p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/matsuren"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors dark:hover:text-gray-100"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/ren-komatsu-bb4326118"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-lg">
          <Markdown>{description}</Markdown>
        </div>
      </div>
    </MainSection>
  );
};

const Experience: React.FC<ExperienceTableProps> = ({ jobs }) => {
  return (
    <MainSection title="Experience">
      <table className="m-2">
        <tbody>
          {jobs.map((job, index) => (
            <tr
              key={index}
              className="odd:bg-white even:bg-gray-100 dark:odd:bg-gray-900/50 dark:even:bg-gray-950"
            >
              <td className="border border-gray-300 px-4 py-2">{job.period}</td>
              <td className="border border-gray-300 px-4 py-2">{job.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        Curriculum Vitae is available
        <a
          href="https://docs.google.com/document/d/1w6csWrHToGvulIEXoLqsda6rxwoDNrrMbhohULy7mN8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          &nbsp;here [CV]
        </a>
        .
      </div>
    </MainSection>
  );
};

const ResearchTopics: React.FC = () => {
  const sortedResearchCategories = allResearchCategories.toSorted(
    (a, b) => a.sortOrder - b.sortOrder,
  );
  return (
    <MainSection title="Research topics">
      <div className="text-gray-600 dark:text-gray-200">
        My main research topics are listed below. Click on some topics to learn
        more about them. Note that these are only some parts of my research.
        Please check the publications for the full list.
      </div>

      <ul className="list-disc px-4 m-2">
        {sortedResearchCategories.map((category) => (
          <li key={category.slug} className="my-2">
            <Link
              className="text-xl font-bold hover:text-blue-600 transition-colors"
              href={`/research#${category.slug}`}
            >
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

const SelectedWorks: React.FC = () => {
  const sortedSelectedWorks = allSelectedWorks.toSorted(
    (a, b) => a.sortOrder - b.sortOrder,
  );
  return (
    <MainSection title="Selected works">
      {sortedSelectedWorks.map((selectedWork) => (
        <div
          className="my-4 p-4 border rounded-lg shadow-sm"
          key={selectedWork._meta.path}
        >
          <p className="text-sm text-gray-500">{selectedWork.tag}</p>
          <p className="py-1 text-lg font-bold">{selectedWork.title}</p>
          <Markdown>{selectedWork.content}</Markdown>
        </div>
      ))}
    </MainSection>
  );
};

const Publications: React.FC<PublicationProps> = ({ papers }) => {
  return (
    <MainSection title="Publications">
      <p>
        {"*Japanese publications are not included here. Please visit "}
        <a
          href="https://scholar.google.com/citations?user=xlY6tG8AAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors underline"
        >
          Google Scholar
        </a>
        {" or "}
        <a
          href="https://docs.google.com/document/d/1w6csWrHToGvulIEXoLqsda6rxwoDNrrMbhohULy7mN8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors underline"
        >
          CV
        </a>
        {" for my complete publications."}
      </p>
      <ol className="list-decimal p-2">
        {papers.map((paper, index) => (
          <li
            className="text-md py-1"
            key={index}
            dangerouslySetInnerHTML={{
              __html: paper.replace(
                new RegExp(aboutMeData.name, "g"),
                `<strong>${aboutMeData.name}</strong>`,
              ),
            }}
          />
        ))}
      </ol>
    </MainSection>
  );
};

export default function Home() {
  return (
    <div className="">
      <AboutMe {...aboutMeData} />

      <ResearchTopics />

      <Experience {...experienceData} />

      <SelectedWorks />

      <Publications {...publicationData} />
    </div>
  );
}
