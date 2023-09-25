import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Experience from "~/components/experience/experience";
import ResearchTopics from "~/components/research_topics/research_topics"
import Profile from "~/components/profile/profile";
import Publications from "~/components/publications";
import SelectedPapers from "~/components/selected_papers";

export default component$(() => {
  return (
    <>
      <Profile/>
      <ResearchTopics />
      <Experience />
      <SelectedPapers />
      <Publications />
    </>
  );
});

export const head: DocumentHead = {
  title: "Home | Ren Komatsu",
  meta: [
    {
      name: "description",
      content: "Ren Komatsu is a Assistant Professor at the Department of Precision Engineering, the University of Tokyo. His research interests include computer vision, deep learning, robot teleoperation, and disaster response. Feel free to conntact me!",
    },
    {
      name: "keywords",
      content: "robotics, research, computer vision, deep learning",
    },
    {
      name: "author",
      content: "Ren Komatsu"
    }
  ],
};
