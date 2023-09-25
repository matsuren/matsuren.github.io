import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="bg-white border-b py-8 text-black">
      <div class="container max-w-4xl mx-auto m-7 px-2">
        <h1 class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          Research topics
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <p>My main research topics are listed below. Click on some topics to learn more about them. Note that these are only some parts of my research. Please check the publications for the full list.</p>

        <ul class="list-disc">
          <li><a
            class="text-2xl inline-block text-gray-800 no-underline hover:text-indigo-800 py-2 px-4"
            href="/research/#fvp"
          >
            Virtual third-person view image generation for robot teleoperation
          </a></li>
          <li><a
            class="text-2xl inline-block text-gray-800 no-underline hover:text-indigo-800 py-2 px-4"
            href="/research/#stereo"
          >
            Dense depth prediction using multiple fisheye cameras
          </a></li>
          <li><a
            class="text-2xl inline-block text-gray-800 no-underline hover:text-indigo-800 py-2 px-4"
            href="/research/#nuclear"
          >
            Robotics for Nuclear Application
          </a></li>
          <li><a
            class="text-2xl inline-block text-gray-800 no-underline hover:text-indigo-800 py-2 px-4"
            href="/research/#construction"
          >
            Robotics for Constructions
          </a></li>
        </ul>
      </div>
    </section>
  );
});
