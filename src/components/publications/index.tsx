import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
    <section class="bg-white border-b pt-8">
      <div class="container max-w-4xl mx-auto m-7">
        <h1 class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          Publications
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="text-black p-4 m-2">
          <div>
            <em>
              *Japanese publications are not included here. Please visit&nbsp;
              <a
                href="https://scholar.google.com/citations?user=xlY6tG8AAAAJ&hl=en"
                class="underline text-purple-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>
              ,&nbsp;
              <a
                href="https://researchmap.jp/kren/published_papers"
                class="underline text-purple-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                researchmap
              </a>
              &nbsp;or&nbsp;
              <a
                class="underline text-purple-800"
                href="https://docs.google.com/document/d/1w6csWrHToGvulIEXoLqsda6rxwoDNrrMbhohULy7mN8/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
              &nbsp;for my complete publications.
            </em>
          </div>
          <ol class="list-decimal">
          <li>
            Tomohiro Katsura,
              <strong>{' '}Ren Komatsu</strong>
              , Keiji Nagatani, Takumi Chiba, Kazuhiro Chayama, Atsushi Yamashita, and Hajime Asama, 
              “Action Recognition of Excavator Using Physical Simulator and Real Image Data with Class-dependent Data Augmentation”,
              <em>{' '}
                Proceedings of the 2024 IEEE/SICE International Symposium on System Integration
              </em>
              , 2024. (Accepted)
            </li>
          <li>
               Wakana Endo, Shota Chikushi, Yuichiro Sueoka, Yuki Kato, Kaito Kimura, Yusuke Ikemoto,
              <strong>{' '}Ren Komatsu</strong>
              , Keiji Nagatani, Atsushi Yamashita, and Hajime Asama, “Performance-Based Earthmoving Team Organization Algorithm Enabling Task Completion under Changing Conditions”,
              <em>{' '}
                Proceedings of the 2024 IEEE/SICE International Symposium on System Integration
              </em>
              , 2024. (Accepted)
            </li>
            <li>
              Wanxin Bao,
              <strong>{' '}Ren Komatsu</strong>
              , Atsushi Yamashita, and Hajime Asama, “Applying Albedo Estimation and Implicit Neural Representations to Well-posed Shape from Shading”,
              <em>{' '}
                IEEE Access
              </em>
              , vol. 11, pp. 40038-40048, 2023. 
            </li>

            <li>
              Ngoc Trung Mai,
              <strong>{' '}Ren Komatsu</strong>
              , Hajime Asama, and Atsushi Yamashita, “Pose Estimation for Event Camera Using Charuco Board Based on Image Reconstruction”,
              <em>{' '}
                Proceedings of the 2023 IEEE/SICE International Symposium on System Integration
              </em>
              , pp. 70-75, 2023.
            </li>

            <li>
              Hidenori Takamiya, Ryosuke Yajima, Jun Younes Louhi Kasahara, 
              <strong>{' '}Ren Komatsu</strong>
              , Keiji Nagatani, Atsushi Yamashita, and Hajime Asama, “Reinforcement Learning-based Motion Generation for a Tracked Robot to Go Over a Sphere-shaped Non-fixed Obstacle”,
              <em>{' '}
                Proceedings of the 2023 IEEE/SICE International Symposium on System Integration
              </em>
              , pp. 642-647, 2023.
            </li>

            <li>
              Yutaro Fujino, Shinsuke Nakashima, 
              <strong>{' '}Ren Komatsu</strong>
              , Hanwool Woo, Hajime Asama, and Atsushi Yamashita, “Radiation Source Localization via a Mobile Robot by Integration of Filtered Back-projection”,
              <em>{' '}
                IROS2022 Workshop on Robotics for Nuclear Environments Exploration and Decommissioning: Challenges and Emerging Techniques
              </em>
              , 2022.
            </li>
            <li>
              Haoxiang Liu, 
              <strong>{' '}Ren Komatsu</strong>
              , Shinsuke Nakashima, Hanwool Woo, Nobuto Matsuhira, Hajime Asama, and Atsushi Yamashita, “Viewpoint Presentation for Teleoperation of Robot Manipulation in Fuel Debris Removal Task with 3-Dimensional Obstacles”,
              <em>{' '}
                IROS2022 Workshop on Robotics for Nuclear Environments Exploration and Decommissioning: Challenges and Emerging Techniques
              </em>
              , 2022.
            </li>
            <li>
              Stefano Massaroli, Michael Poli, 
              <strong>{' '}Ren Komatsu</strong>
              , Alessandro Moro, Atsushi Yamashita, and Hajime Asama, “Model-Based Policies in Continuous Time, States and Actions: Surrogate Models and Gradient Estimation”,
              <em>{' '}
                IROS2022 2nd RL-CONFORM Workshop
              </em>
              , 2022.
            </li>

            <li>
              Ziheng Chao,
              <strong>{' '}Ren Komatsu</strong>
              , Hanwool Woo, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama, “Radiation
              Distribution Estimation with Non-directional Detector Using Plane Source Model”,
              <em>{' '}Advanced Robotics</em>
              , vol. 36, no. 4, pp. 182-191, 2022.
            </li>

            <li>
              Haoxiang Liu,
              <strong>{' '}Ren Komatsu</strong>
              , Hanwool Woo, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama, “Viewpoint
              Selection without Subject Experiments for Teleoperation of Robot Arm in Reaching Task
              Using Reinforcement Learning”,
              <em>{' '}
                Proceedings of the 2022 IEEE/SICE International Symposium on System Integration
              </em>
              , pp. 1015-1020, 2022.
            </li>
            <li>
              Ziheng Chao,
              <strong>{' '}Ren Komatsu</strong>
              , Hanwool Woo, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama, “Estimation of
              Radiation Source Distribution Using Structure Information for Fukushima Daiichi
              Nuclear Power Plant Reactor”,
              <em>{' '}
                Proceedings of the 2022 IEEE/SICE International Symposium on System Integration
              </em>
              , pp. 1030-1035, 2022.
            </li>
            <li>
              Yuta Sugasawa, Shota Chikushi,
              <strong>{' '}Ren Komatsu</strong>
              , Jun Younes Louhi Kasahara, Sarthak Pathak, Ryosuke Yajima, Shunsuke Hamasaki, Keiji
              Nagatani, Takumi Chiba, Kazuhiro Chayama, Atsushi Yamashita, and Hajime Asama,
              “Visualization of Dump Truck and Excavator in Bird's-eye View by Fisheye Cameras and
              3D Range Sensor”,
              <em>{' '}Proceedings of the 16th International Conference IAS-16</em>
              , pp. 480-491, 2021.
            </li>
            <li>
              Hao Xu,
              <strong>{' '}Ren Komatsu</strong>
              , Hanwool Woo, Atsushi Yamashita, and Hajime Asama, "Leakage Position Estimation of
              Cooling Water Using a Stereo Camera for Fukushima Daiichi Nuclear Power Plant",
              <em>{' '}Applied Sciences</em>
              , vol. 11, no. 17, 7796, pp. 1-15, 2021.
            </li>
            <li>
              Takuya Kishimoto, Hanwool Woo,
              <strong>{' '}Ren Komatsu</strong>
              , Yusuke Tamura, Hideki Tomita, Kenji Shimazoe, Atsushi Yamashita, and Hajime Asama,
              "Path Planning for Localization of Radiation Sources Based on Principal Component
              Analysis",
              <em>{' '}Applied Sciences</em>
              , vol. 11, no. 10, 4707, pp. 1-22, 2021.
            </li>
            <li>
              Runqiu Bao,
              <strong>{' '}Ren Komatsu</strong>
              , Renato Miyagusuku, Masaki Chino, Atsushi Yamashita, and Hajime Asama, "Stereo camera
              visual SLAM with hierarchical masking and motion-state classification at outdoor
              construction sites containing large dynamic objects",
              <em>{' '}Advanced Robotics</em>
              , vol. 35, no. 3-4, pp. 228-241, 2021.
            </li>
            <li>
              <strong>{' '}Ren Komatsu</strong>
              , Hanwool Woo, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama, "Gamma-ray Image
              Noise Generation Using Energy-Image Converter Based on Image Histogram",
              <em>{' '}
                Proceedings of the 2021 IEEE/SICE International Symposium on System Integration
                (SII2021)
              </em>
              , 2021.
            </li>
            <li>
              Hao Xu,
              <strong>{' '}Ren Komatsu</strong>
              , Hanwool Woo, Angela Faragasso, Atsushi Yamashita, and Hajime Asama, "Camera
              Orientation Estimation in Leaking Indoor Environment via Vanishing Point of Water
              Drops",
              <em>{' '}
                Proceedings of the 2020 IEEE International Symposium on Safety, Security, and Rescue
                Robotics (SSRR2020)
              </em>
              , 2020.
            </li>
            <li>
              <strong>{' '}Ren Komatsu</strong>
              , Hiromitsu Fujii, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama, "360&#176;
              Depth Estimation from Multiple Fisheye Images with Origami Crown Representation of
              Icosahedron",
              <em>{' '}
                Proceedings of the 2020 IEEE/RSJ International Conference on Intelligent Robots and
                Systems (IROS2020)
              </em>
              , 2020.
            </li>
            <li>
              <strong>{' '}Ren Komatsu</strong>
              , Hiromitsu Fujii, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama, "Free Viewpoint
              Image Generation System Using Fisheye Cameras and a Laser Rangefinder for Indoor Robot
              Teleoperation",
              <em>{' '}ROBOMECH Journal</em>
              , vol. 7, 15, pp.1-10, 2020.
            </li>
            <li>
              <strong>{' '}Ren Komatsu</strong>
              , Hiromitsu Fujii, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama, "Octave Deep
              Plane-sweeping Network: Reducing Spatial Redundancy for Learning-based Plane-sweeping
              Stereo",
              <em>{' '}IEEE Access</em>
              , vol. 7, pp. 150306-150317, 2019.
            </li>
            <li>
              Runqiu Bao,
              <strong>{' '}Ren Komatsu</strong>
              , Renato Miyagusuku, Masaki Chino, Atsushi Yamashita, and Hajime Asama,
              "Cost-effective and Robust Visual Based Localization with Consumer-level Cameras at
              Construction Sites",
              <em>{' '}
                Proceedings of the 2019 IEEE 8th Global Conference on Consumer Electronics
                (GCCE2019)
              </em>
              , pp. 1007-1009, Osaka, Japan, 2019.
            </li>
            <li>
              Dabae Kim, Sarthak Pathak, Alessandro Moro,
              <strong>{' '}Ren Komatsu</strong>
              , Atsushi Yamashita and Hajime Asama, "E-CNN: Accurate Spherical Camera Rotation
              Estimation via Uniformization of Distorted Optical Flow Fields",
              <em>{' '}
                Proceedings of the 2019 IEEE International Conference on Acoustics, Speech, and
                Signal Processing (ICASSP2019),
              </em>
              Brighton, UK, 2019.
            </li>
            <li>
              Yasuyuki Awashima,
              <strong>{' '}Ren Komatsu</strong>
              , Hiromitsu Fujii, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama,
              &ldquo;Visualization of Obstacles on Bird&rsquo;s-eye View Using Depth Sensor for
              Remote Controlled Robot&rdquo;,
              <em>{' '}
                Proceedings of the International Workshop on Advanced Image Technology 2017
                (IWAIT2017)
              </em>
              , Penang, Malaysia, 2017.
            </li>
            <li>
              Wei Sun, Soichiro Iwataki,
              <strong>{' '}Ren Komatsu</strong>
              , Hiromitsu Fujii, Atsushi Yamashita, and Hajime Asama, &ldquo;Simultaneous
              Tele-visualization of Construction Machine and Environment Using Body Mounted
              Cameras&rdquo;,
              <em>{' '}
                Proceedings of the 2016 IEEE International Conference on Robotics and Biomimetics
                (ROBIO2016)
              </em>
              , pp.382-387, Qingdao, China, 2016.
            </li>
            <li>
              <strong>{' '}Ren Komatsu</strong>
              , Hiromitsu Fujii, Hitoshi Kono, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama,
              &ldquo;Bird's-eye View Image Generation with Camera Malfunction in Irradiation
              Environment&rdquo;,
              <em>{' '}
                Proceedings of the 6th International Conference on Advanced Mechatronics (ICAM2015)
              </em>
              , pp. 177-178, Tokyo, Japan, 2015.
            </li>
          </ol>
        </div>
      </div>
    </section>
    </>
  );
});
