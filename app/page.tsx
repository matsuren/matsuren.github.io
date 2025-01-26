import React from "react";
import Image from "next/image";
import { aboutMeData, AboutMeProps } from "./data";
import { experienceData, ExperienceTableProps } from "./data";
import { publicationData, PublicationProps } from "./data";
import {
  allResearchCategories,
  allSelectedWorks,
} from "@/.content-collections/generated";
import Link from "next/link";

const AboutMe: React.FC<AboutMeProps> = ({ name, picture, description }) => {
  return (
    <div>
      <Image
        src={picture}
        alt="profile picture"
        width={120}
        height={120}
        className="rounded-full shadow-lg"
      />
      <p>{name}</p>
      <p>About me</p>
      <p>{description}</p>
    </div>
  );
};

const Experience: React.FC<ExperienceTableProps> = ({ jobs }) => {
  return (
    <div>
      <h1 className="p-3">Experience</h1>
      <table className="">
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index} className="">
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
        >
          &nbsp;here [CV]
        </a>
        .
      </div>
    </div>
  );
};

const ResearchTopics: React.FC = () => {
  const sortedResearchCategories = allResearchCategories.toSorted(
    (a, b) => a.sortOrder - b.sortOrder,
  );
  return (
    <div>
      <h1 className="p-3">Research topics</h1>
      <div>
        My main research topics are listed below. Click on some topics to learn
        more about them. Note that these are only some parts of my research.
        Please check the publications for the full list.
      </div>

      <ul>
        {sortedResearchCategories.map((category) => (
          <li key={category.slug}>
            <Link href={`/research#${category.slug}`}>{category.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SelectedWorks: React.FC = () => {
  const sortedSelectedWorks = allSelectedWorks.toSorted(
    (a, b) => a.sortOrder - b.sortOrder,
  );
  return (
    <div>
      <h1 className="p-3">Selected works</h1>
      <div>
        My main research topics are listed below. Click on some topics to learn
        more about them. Note that these are only some parts of my research.
        Please check the publications for the full list.
      </div>
      {sortedSelectedWorks.map((selectedWork) => (
        <div className="p-2" key={selectedWork._meta.path}>
          <p>{selectedWork.tag}</p>
          <p>{selectedWork.title}</p>
          <p>{selectedWork.content}</p>
        </div>
      ))}
    </div>
  );
};

const Publications: React.FC<PublicationProps> = ({ papers }) => {
  return (
    <div>
      <h1 className="p-3">Publications</h1>
      <p>
        *Japanese publications are not included here. Please visit
        <a
          href="https://scholar.google.com/citations?user=xlY6tG8AAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Google Scholar&nbsp;
        </a>
        or
        <a
          href="https://docs.google.com/document/d/1w6csWrHToGvulIEXoLqsda6rxwoDNrrMbhohULy7mN8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;CV&nbsp;
        </a>
        for my complete publications.
      </p>
      <ol className="list-decimal">
        {papers.map((paper, index) => (
          <li
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
    </div>
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
