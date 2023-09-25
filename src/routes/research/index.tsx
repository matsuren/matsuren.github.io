import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";

import styles from './index.css?inline';

import Title from "./title"

import ImgFvp from '~/assets/images/research_fvp.jpeg?jsx';
import ImgFvpSuga from '~/assets/images/research_fvp_suga.jpeg?jsx';
import ImgDepth from '~/assets/images/research_360_depth.jpeg?jsx';
import ImgKishi from "~/assets/images/research_radiation_path_kishimoto.jpeg?jsx";
import ImgFujino from "~/assets/images/research_irosws_fujino.jpeg?jsx";
import ImgNoise from "~/assets/images/research_radiation_camera_noise.jpeg?jsx";
import ImgSho from "~/assets/images/research_irosws_sho.jpg?jsx";
import ImgUKArm from "~/assets/images/research_jpuk_arm.jpeg?jsx";
import ImgUeno from "~/assets/images/research_action_ueno.jpeg?jsx";
import ImgBao from "~/assets/images/research_bao_vslam.jpeg?jsx";
import ImgMS from "~/assets/images/research_ms_unity.jpeg?jsx";

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <section class="bg-white border-b text-black">
        <div class="container max-w-4xl mx-auto m-7 px-2 py-4 my-16">
          <h1 class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">Research</h1>

          <section class="border-b m-4 p-4">
            {/* <Title id="fvp" title="Free viewpoint image generation for robot teleoperation" /> */}
            <h2 id="fvp" class="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800">Free viewpoint image generation for robot teleoperation</h2>
            <div class="w-full mb-4">
              <div class="h-1 mx-auto gradient w-74 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <div class="grid grid-cols-1 justify-items-center">
                      <p><ImgFvp class="w-auto h-64 rounded-3xl p-2 mx-auto" /></p>
                      <p>Virtual third-person view image generation for indoor scene</p>
                    </div>
                  </td>
                  <td>
                    <div class="grid grid-cols-1 justify-items-center">
                      <p><ImgFvpSuga class="w-auto h-64 rounded-3xl p-2 mx-auto" /></p>
                      <p>For multiple construction machines</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              Robot teleoperation is important when the working environment is dangerous for humans such as at
              disaster sites. For effective teleoperation, operators can benefit from viewing the robot’s
              surroundings in a third-person perspective.
              However, arranging an external camera to provide such views is challenging. Therefore, we propose
              methods to generate virtual third-person perspective images using sensors attached to the robot.
            </p>
            <p>
              We have installed four fisheye cameras on the robot to capture 360° images, and by using the
              additional depth sensors on the robot, virtual third-person perspective images called free
              viewpoint images are generated. Please refer to the papers
              &nbsp;
              <a
                  href="http://dx.doi.org/10.1186/s40648-020-00163-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline"
                >
                 here
                </a>
                &nbsp;
                and
                &nbsp;
              <a
                  href="https://link.springer.com/chapter/10.1007/978-3-030-95892-3_47"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline"
                >
                 here
                </a>
                &nbsp;
                for further explanation.
            </p>
          </section>

          {/* Stereo */}
          <section class="border-b m-4 p-4">
            <h2 id="stereo" class="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800">Dense depth prediction using multiple fisheye cameras</h2>
            <div class="w-full mb-4">
              <div class="h-1 mx-auto gradient w-74 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div class="grid grid-cols-1 justify-items-center">
              <p><ImgDepth class="w-auto h-64 rounded-3xl p-2 mx-auto" /></p>
              <p>360 degree depth prediction using fisheye cameras</p>
            </div>

            <p>
              Depth estimation from multi-view images is useful for scene
              understanding and robot navigation. We work on 360 degree dense depth prediction using four
              fisheye cameras installed on a robot. To cope with the large distortion in fisheye cameras, we
              propose an icosahedron-based representation, and we employ icospherical sweeping to integrate the
              multi-view features into the 360 degree costmap.
            </p>
            <p>
              We also focus on computational efficiency, so that the depth is estimated from four fisheye images
              in less than a second using a laptop with a GPU. Please refer to the papers
              &nbsp;
              <a
                  href="https://ieeexplore.ieee.org/document/9340981"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline"
                >
                 here
                </a>
                &nbsp;
                and
                &nbsp;
              <a
                  href="https://ieeexplore.ieee.org/document/8867874"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline"
                >
                 here
                </a>
                &nbsp;
                for further explanation.
            </p>
          </section>

          {/* Nuclear */}
          <section class="border-b m-4 p-4">
            <h2 id="nuclear" class="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800">Robotics for Nuclear Application</h2>
            <div class="w-full mb-4">
              <div class="h-1 mx-auto gradient w-74 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <p>
              Our laboratory has been actively working on robotics for nuclear environments since the Fukushima
              nuclear accident in 2011. I’ll introduce some of the projects I’ve been involved in.
            </p>
            <h3 class="text-2xl font-bold text-gray-800 mt-3">Radiation source estimation</h3>
            <p>
              The first step in decommissioning the Fukushima Daiichi nuclear power plant is to reduce radiation
              levels at the site so that workers can stay longer and be safer. Therefore, it is important to
              determine the distribution of radiation sources and to decontaminate the estimated radiation
              sources. Due to high radiation levels, it is desirable to install radiation detectors on a robot,
              and the robot will autonomously explore the site to estimate the radiation sources.
            </p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <div class="grid grid-cols-1 justify-items-center">
                      <p><ImgKishi class="w-auto h-64 rounded-3xl p-2 mx-auto" /></p>
                      <p>Path planning for radiation estimation</p>
                    </div>
                  </td>
                  <td>
                    <div class="grid grid-cols-1 justify-items-center">
                      <p><ImgFujino class="w-auto h-64 rounded-3xl p-2 mx-auto" /></p>
                      <p>Radiation estimation using filtered back-projection</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>We developed a path planning method to localize the radiation sources. This method determines the
              next measurement point based on previous measurements, allowing for autonomous exploration. By
              utilizing principal component analysis of the simple back-projection results, the robot
              automatically moves towards the radiation sources and circles around to accurately localize the
              radiation sources. Please refer to the paper&nbsp;
              <a
                  href="https://www.mdpi.com/2076-3417/11/10/4707"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline"
                >
                 here
                </a>.
            </p>
            <p>
              We also have improved the radiation source estimation by utilizing filtered back-projection.
              Please refer to the paper&nbsp;
              <a
                  href="http://www.robot.t.u-tokyo.ac.jp/~yamashita/paper/B/B293Final.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline"
                >
                 here
                </a>.
            </p>
            <p>
              If you are interested in radiation source estimation using non-directional detectors such as
              Geiger counter, please check out the paper&nbsp;
              <a
                  href="https://www.tandfonline.com/doi/full/10.1080/01691864.2021.2016482"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline"
                >
                 here
                </a> as well.
            </p>

            <h3 class="text-2xl font-bold text-gray-800 mt-3">Gamma ray irradiation experiment on camera</h3>
            <div class="grid grid-cols-1 justify-items-center">
              <p><ImgNoise class="w-auto h-64 rounded-3xl p-2 mx-auto" /></p>
              <p>Gamma ray irradiation image noise and the simulated noise</p>
            </div>
            <p>
              Radiation affects not only people but also
              electronic equipment. Therefore, we need to consider the effects of radiation on the electronic
              equipment of robots for nuclear applications. Firstly, electronic devices will malfunction if they
              are exposed to radiation for a long time, which is called the total ionising dose (TID) effect.
            </p>
            <p>
              Sometimes the critical components can be protected by heavy metals such as lead or moved away from
              high levels of radiation, but cameras are one of the components that are difficult to protect from
              radiation.We have carried out several gamma ray irradiation tests on commercial off-the-shelf
              cameras to investigate the TID effect. Also, we investigated the image noise caused by gamma
              radiation. Please refer to the paper&nbsp;
              <a
                  href="https://ieeexplore.ieee.org/document/9382733"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline"
                >
                 here
                </a>.
            </p>

            <h3 class="text-2xl font-bold text-gray-800 mt-3">Best viewpoint for operator to control robot arm</h3>
            <div class="grid grid-cols-1 justify-items-center">
              <p><ImgSho class="w-auto h-64 rounded-3xl p-2 mx-auto" /></p>
              <p>Robot teleoperation</p>
            </div>

            <p>For the decommissioning of the Fukushima Daiichi nuclear
              power plant, we need to retrieve the nuclear fuel debris that remains inside the primary
              containment. One approach would be to use the teleoperation of a robotic arm. The viewpoints
              provided to the operator are carefully selected to achieve efficient teleoperation. Therefore, we
              are woking on viewpoint selection for robot teleoperation. Please refer to the papers
              &nbsp;
              <a
                  href="https://ieeexplore.ieee.org/document/9708809"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline"
                >
                 here
                </a>
                &nbsp;
                and
                &nbsp;
              <a
                  href="http://www.robot.t.u-tokyo.ac.jp/~yamashita/paper/B/B294Final.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline"
                >
                 here
                </a>
                &nbsp;
                for further explanation.
            </p>
         
     
            <h3 class="text-2xl font-bold text-gray-800 mt-3">Navigation and control for robot arm</h3>
            <div class="grid grid-cols-1 justify-items-center">
              <p><ImgUKArm class="w-auto h-64 rounded-3xl p-2 mx-auto" /></p>
              <p>Robot arm developed for the project</p>
            </div>
            <p>We are also working on the navigation and control algorithm
              of a robotics manipulator for nuclear fuel debris retrieval. This is an ongoing joint project with
              the University of Sussex.
            </p>
          </section>
          <h2 id="construction" class="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800">Robotics for Constructions</h2>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-74 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <p>
            Decreasing labor force in the field of construction is one of the biggest social problems. To
            tackle this problem, we are collaboratively working with various companies on several projects to
            develop core technologies, with the aim to make the current construction more efficient and
            automate certain processes.
          </p>
          <h3 class="text-2xl font-bold text-gray-800 mt-3">Action recognition of construction machine</h3>
          <div class="grid grid-cols-1 justify-items-center">
            <p><ImgUeno class="w-auto h-64 rounded-3xl p-2 mx-auto" /></p>
            <p>Action recognition of excavator using keypoints</p>
          </div>
          <p>To enhance the efficiency of the current construction, it
            is crucial to monitor the progress of tasks to identify the bottleneck. We focus on tracking the
            progress of excavators as they are one of the most commonly used construction machines.
          </p>
          <p>
            We install a camera at the construction site and apply computer vision algorithms to recognise the
            excavator’s actions and monitor its progress. One of the problems is that, unlike human action
            recognition, there is a limited amount of training data for excavator action recognition.
            Therefore, we utilize computer simulations to prepare the motion data for the training. This is
            still on-going project.
          </p>
          <h3 class="text-2xl font-bold text-gray-800 mt-3">Visual Stereo SLAM in dynamic construction environments</h3>
          <div class="grid grid-cols-1 justify-items-center">
            <p><ImgBao class="w-auto h-64 rounded-3xl p-2 mx-auto" /></p>
            <p>Extracted feature points with dynamic info labels for visual SLAM</p>
          </div>
          <p>
            There is a necessity to estimate the poses of construction
            machines for autonomous construction. In certain scenarios, such as near mountains and valleys,
            the GNSS signal is unstable. We are working on Visual Simultaneous Localization and Mapping
            (Visual SLAM) to localize construction machines.
          </p>
          <p>
            Typically, Visual SLAM operates under the assumption that the environment is static. However,
            there are usually other construction machines moving around the site, which breaks this assumption
            and leads to poor localization accuracy. To address this problem, we employed object detection and
            semantic segmentation to determine the pixels that are unlikely to be static and reject them from
            the visual SLAM algorithm. We also utilized a hierarchical approach for efficient computation.
            Please refer to the paper&nbsp;
              <a
                  href="https://www.tandfonline.com/doi/full/10.1080/01691864.2020.1869586"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline"
                >
                 here
                </a>.
          </p>

          <h3 class="text-2xl font-bold text-gray-800 mt-3">Innovative constructions</h3>
          <div class="grid grid-cols-1 justify-items-center">
            <p><ImgMS class="w-auto h-64 rounded-3xl p-2 mx-auto" /></p>
            <p>Earth moving task using multiple construction machines in <a href="https://github.com/pwri-opera/OperaSim-PhysX" class="underline">OperaSim</a></p>
          </div>
          <p>
            Our laboratory is working on team organization and
            teleoperation of multiple construction machines as a part of the CAFE project. The CAFE project
            aims to develop AI robots by 2050 that adapt to diverse environments and act alongside humans.
            Focusing on natural disaster response and moonbase development, the project utilizes translatable
            technology between these fields. Please check <a href="https://moonshot-cafe-project.org/en/" class="underline">CAFE project website</a> for detail.
          </p>
          <p>
            I’m mainly working on the teleoperation of multiple robots by one operator. Ideally, multiple
            robots should be able to perform the task autonomously without the help of an operator. However,
            the disaster sites are highly uncertain so in some situations the robots cannot perform the given
            tasks by themselves. It is also difficult for an operator to remotely control each robot
            individually. The main idea is to rely on the autonomy of the robots. The operator only provides
            detailed instructions when the robots cannot handle the situation properly. This is an ongoing
            project.
          </p>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Research",
  meta: [
    {
      name: "description",
      content: "Research",
    },
  ],
};
