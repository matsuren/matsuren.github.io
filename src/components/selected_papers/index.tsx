import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="bg-white border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          Selected Papers
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div class="w-full md:w-1/2 p-4 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div class="flex flex-wrap no-underline hover:no-underline">
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">CONFERENCE: IROS 2020</p>
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                360&#176; Depth Estimation from Multiple Fisheye Images with Origami Crown
                Representation of Icosahedron
              </div>
              <p class="text-gray-800 text-base px-6">
                We present a method for all-around depth estimation from multiple omnidirectional
                images for indoor environments. In particular, we focus on plane-sweeping stereo as
                the method for depth estimation from the images. We propose a new icosahedron-based
                representation and ConvNets for omnidirectional images, which we name "CrownConv"
                because the representation resembles a crown made of origami.
              </p>
              <p class="text-base px-6 mb-5 text-purple-800">
                <a
                  href="https://arxiv.org/abs/2007.06891"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [arXiv]
                </a>
                <a
                  href="https://github.com/matsuren/crownconv360depth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [code]
                </a>

                <a href="https://youtu.be/_vVD-zDMvyM" target="_blank" rel="noopener noreferrer">
                  [video]
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 p-4 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div class="flex flex-wrap no-underline hover:no-underline">
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">JOURNAL: IEEE Access 2019</p>
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Octave Deep Plane-sweeping Network: Reducing Spatial Redundancy for Learning-based
                Plane-sweeping Stereo
              </div>
              <p class="text-gray-800 text-base px-6">
                We propose the octave deep plane-sweeping network (OctDPSNet). OctDPSNet is a novel
                learning-based plane-sweeping stereo, which drastically reduces the required GPU
                memory and computation time while achieving a state-of-the-art depth estimation
                accuracy. Inspired by octave convolution, we divide image features into high and low
                spatial frequency features, and two cost volumes are generated from these using our
                proposed plane-sweeping module.
              </p>
              <p class="text-base px-6 mb-5 text-purple-800">
                <a
                  href="http://dx.doi.org/10.1109/ACCESS.2019.2947195"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [paper]
                </a>
                <a
                  href="https://github.com/matsuren/octDPSNet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [code]
                </a>
                <a
                  href="http://ieeetv.ieee.org/media/ieeetvmobile/xplore/access-gavideo-2947195.mp4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [video]
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 p-4 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div class="flex flex-wrap no-underline hover:no-underline">
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                JOURNAL: ROBOMECH Journal 2020
              </p>
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Free Viewpoint Image Generation System Using Fisheye Cameras and a Laser Rangefinder
                for Indoor Robot Teleoperation
              </div>
              <p class="text-gray-800 text-base px-6">
                In robot teleoperation, a lack of depth information often results in collisions
                between the robots and obstacles in its path or surroundings. To address this issue,
                free viewpoint images can greatly benefit the operators in terms of collision
                avoidance. In this paper, a novel free viewpoint image generation system is
                proposed. Instead of using the expensive LiDAR, this study utilizes a cost-effective
                laser rangefinder (LRF) and a characteristic of man-made environments.
              </p>
              <p class="text-base px-6 mb-5 text-purple-800">
                <a
                  href="http://dx.doi.org/10.1186/s40648-020-00163-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [paper]
                </a>
                <a
                  href="https://github.com/matsuren/fvp_viewer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [code]
                </a>
                <a href="https://matsuren.github.io/fvp" target="_blank" rel="noopener noreferrer">
                  [project page]
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 p-4 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div class="flex flex-wrap no-underline hover:no-underline">
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">-</p>
              <div class="w-full font-bold text-xl text-gray-800 px-6"></div>
              <p class="text-gray-800 text-base px-6 mb-5"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
