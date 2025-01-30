// About me
export type AboutMeProps = {
  name: string;
  picture: string;
  description: string;
};
export const aboutMeData: AboutMeProps = {
  name: "Ren Komatsu",
  picture: "/assets/profile.jpg",
  description: `
I am a Computer Vision Engineer in Mujin. Before that, I was a Assistant Professor at the Department of Precision Engineering, the University of Tokyo. I finished my Ph.D. degree June 2020 at the same university, where I was advised by [Atsushi Yamashita](https://www.robot.t.u-tokyo.ac.jp/~yamashita/) and [Hajime Asama](https://www.robot.t.u-tokyo.ac.jp/asamalab/Asama_page/top_a.html).
My interests include computer vision, deep learning, robot teleoperation, and disaster response. Feel free to contact me!
  `,
};

// Experience
type JobEntry = {
  period: string;
  role: string;
};

export type ExperienceTableProps = {
  jobs: JobEntry[];
};

export const experienceData: ExperienceTableProps = {
  jobs: [
    {
      period: "Mar. 2024 - present",
      role: "Computer Vision Engineer, Mujin.",
    },
    {
      period: "Nov. 2022 - Feb. 2023",
      role: "Nest Fellow, the Oxford Robotics Institute, the University of Oxford.",
    },
    {
      period: "Apr. 2022 - Feb. 2024",
      role: "Assistant Professor, the Department of Precision Engineering, the University of Tokyo.",
    },
    {
      period: "Aug. 2020 - Mar. 2022",
      role: "Project Assistant Professor, the Department of Precision Engineering, the University of Tokyo.",
    },
    {
      period: "Apr. 2020 - July 2020",
      role: "Project Academic Support Specialist, the Department of Precision Engineering, the University of Tokyo.",
    },
    {
      period: "July 2017 - June 2018",
      role: "Visiting scholar, the Robotics Institute, Carnegie Mellon University.",
    },
  ],
};

// Publications
export type PublicationProps = {
  papers: string[];
};

export const publicationData: PublicationProps = {
  papers: [
    `Junwoon Lee, Ren Komatsu, Mitsuru Shinozaki, Toshihiro Kitajima, Hajime Asama, Qi An, and Atsushi Yamashita, “Switch-SLAM: Switching-based LiDAR-Inertial-Visual SLAM for Degenerate Environments”, IEEE Robotics and Automation Letters, vol. 9, no. 8, pp. 7270-7277, 2024.`,
    `Hidenori Takamiya, Ryosuke Yajima, Jun Younes Louhi Kasahara, Ren Komatsu, Keiji Nagatani, Atsushi Yamashita, and Hajime Asama, “Motion Generation for a Tracked Robot Going Over an Unfixed Obstacle on a Slope Using Reinforcement Learning”, Advanced Robotics, vol. 38, no. 15, pp. 1024-1037, 2024. `,
    `Tomohiro Katsura, Ren Komatsu, Keiji Nagatani, Takumi Chiba, Kazuhiro Chayama, Atsushi Yamashita, and Hajime Asama, “Action Recognition of Excavator Using Physical Simulator and Real Image Data with Class-dependent Data Augmentation", Proceedings of the 2024 IEEE/SICE International Symposium on System Integration, 2024.`,
    `Wakana Endo, Shota Chikushi, Yuichiro Sueoka, Yuki Kato, Kaito Kimura, Yusuke Ikemoto, Ren Komatsu, Keiji Nagatani, Atsushi Yamashita, and Hajime Asama, “Performance-Based Earthmoving Team Organization Algorithm Enabling Task Completion under Changing Conditions", Proceedings of the 2024 IEEE/SICE International Symposium on System Integration, 2024.`,
    `Wanxin Bao, Ren Komatsu, Atsushi Yamashita, and Hajime Asama, “Applying Albedo Estimation and Implicit Neural Representations to Well-posed Shape from Shading", IEEE Access, vol. 11, pp. 40038-40048, 2023.`,
    `Ngoc Trung Mai, Ren Komatsu, Hajime Asama, and Atsushi Yamashita, “Pose Estimation for Event Camera Using Charuco Board Based on Image Reconstruction", Proceedings of the 2023 IEEE/SICE International Symposium on System Integration, pp. 70-75, 2023.`,
    `Hidenori Takamiya, Ryosuke Yajima, Jun Younes Louhi Kasahara, Ren Komatsu, Keiji Nagatani, Atsushi Yamashita, and Hajime Asama, “Reinforcement Learning-based Motion Generation for a Tracked Robot to Go Over a Sphere-shaped Non-fixed Obstacle", Proceedings of the 2023 IEEE/SICE International Symposium on System Integration, pp. 642-647, 2023.`,
    `Yutaro Fujino, Shinsuke Nakashima, Ren Komatsu, Hanwool Woo, Hajime Asama, and Atsushi Yamashita, “Radiation Source Localization via a Mobile Robot by Integration of Filtered Back-projection", IROS2022 Workshop on Robotics for Nuclear Environments Exploration and Decommissioning: Challenges and Emerging Techniques, 2022.`,
    `Haoxiang Liu, Ren Komatsu, Shinsuke Nakashima, Hanwool Woo, Nobuto Matsuhira, Hajime Asama, and Atsushi Yamashita, “Viewpoint Presentation for Teleoperation of Robot Manipulation in Fuel Debris Removal Task with 3-Dimensional Obstacles", IROS2022 Workshop on Robotics for Nuclear Environments Exploration and Decommissioning: Challenges and Emerging Techniques, 2022.`,
    `Stefano Massaroli, Michael Poli, Ren Komatsu, Alessandro Moro, Atsushi Yamashita, and Hajime Asama, “Model-Based Policies in Continuous Time, States and Actions: Surrogate Models and Gradient Estimation", IROS2022 2nd RL-CONFORM Workshop, 2022.`,
    `Ziheng Chao, Ren Komatsu, Hanwool Woo, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama, “Radiation Distribution Estimation with Non-directional Detector Using Plane Source Model", Advanced Robotics, vol. 36, no. 4, pp. 182-191, 2022.`,
    `Haoxiang Liu, Ren Komatsu, Hanwool Woo, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama, “Viewpoint Selection without Subject Experiments for Teleoperation of Robot Arm in Reaching Task Using Reinforcement Learning", Proceedings of the 2022 IEEE/SICE International Symposium on System Integration, pp. 1015-1020, 2022.`,
    `Ziheng Chao, Ren Komatsu, Hanwool Woo, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama, “Estimation of Radiation Source Distribution Using Structure Information for Fukushima Daiichi Nuclear Power Plant Reactor", Proceedings of the 2022 IEEE/SICE International Symposium on System Integration, pp. 1030-1035, 2022.`,
    `Yuta Sugasawa, Shota Chikushi, Ren Komatsu, Jun Younes Louhi Kasahara, Sarthak Pathak, Ryosuke Yajima, Shunsuke Hamasaki, Keiji Nagatani, Takumi Chiba, Kazuhiro Chayama, Atsushi Yamashita, and Hajime Asama, “Visualization of Dump Truck and Excavator in Bird's-eye View by Fisheye Cameras and 3D Range Sensor", Proceedings of the 16th International Conference IAS-16, pp. 480-491, 2021.`,
    `Hao Xu, Ren Komatsu, Hanwool Woo, Atsushi Yamashita, and Hajime Asama, "Leakage Position Estimation of Cooling Water Using a Stereo Camera for Fukushima Daiichi Nuclear Power Plant", Applied Sciences, vol. 11, no. 17, 7796, pp. 1-15, 2021.`,
    `Takuya Kishimoto, Hanwool Woo, Ren Komatsu, Yusuke Tamura, Hideki Tomita, Kenji Shimazoe, Atsushi Yamashita, and Hajime Asama, "Path Planning for Localization of Radiation Sources Based on Principal Component Analysis", Applied Sciences, vol. 11, no. 10, 4707, pp. 1-22, 2021.`,
    `Runqiu Bao, Ren Komatsu, Renato Miyagusuku, Masaki Chino, Atsushi Yamashita, and Hajime Asama, "Stereo camera visual SLAM with hierarchical masking and motion-state classification at outdoor construction sites containing large dynamic objects", Advanced Robotics, vol. 35, no. 3-4, pp. 228-241, 2021.`,
    `Ren Komatsu, Hanwool Woo, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama, "Gamma-ray Image Noise Generation Using Energy-Image Converter Based on Image Histogram", Proceedings of the 2021 IEEE/SICE International Symposium on System Integration (SII2021), 2021.`,
    `Hao Xu, Ren Komatsu, Hanwool Woo, Angela Faragasso, Atsushi Yamashita, and Hajime Asama, "Camera Orientation Estimation in Leaking Indoor Environment via Vanishing Point of Water Drops", Proceedings of the 2020 IEEE International Symposium on Safety, Security, and Rescue Robotics (SSRR2020), 2020.`,
    `Ren Komatsu, Hiromitsu Fujii, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama, "360° Depth Estimation from Multiple Fisheye Images with Origami Crown Representation of Icosahedron", Proceedings of the 2020 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS2020), 2020.`,
    `Ren Komatsu, Hiromitsu Fujii, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama, "Free Viewpoint Image Generation System Using Fisheye Cameras and a Laser Rangefinder for Indoor Robot Teleoperation", ROBOMECH Journal, vol. 7, 15, pp.1-10, 2020.`,
    `Ren Komatsu, Hiromitsu Fujii, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama, "Octave Deep Plane-sweeping Network: Reducing Spatial Redundancy for Learning-based Plane-sweeping Stereo", IEEE Access, vol. 7, pp. 150306-150317, 2019.`,
    `Runqiu Bao, Ren Komatsu, Renato Miyagusuku, Masaki Chino, Atsushi Yamashita, and Hajime Asama, "Cost-effective and Robust Visual Based Localization with Consumer-level Cameras at Construction Sites", Proceedings of the 2019 IEEE 8th Global Conference on Consumer Electronics (GCCE2019), pp. 1007-1009, Osaka, Japan, 2019.`,
    `Dabae Kim, Sarthak Pathak, Alessandro Moro, Ren Komatsu, Atsushi Yamashita and Hajime Asama, "E-CNN: Accurate Spherical Camera Rotation Estimation via Uniformization of Distorted Optical Flow Fields", Proceedings of the 2019 IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP2019),Brighton, UK, 2019.`,
    `Yasuyuki Awashima, Ren Komatsu, Hiromitsu Fujii, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama, “Visualization of Obstacles on Bird’s-eye View Using Depth Sensor for Remote Controlled Robot", Proceedings of the International Workshop on Advanced Image Technology 2017 (IWAIT2017), Penang, Malaysia, 2017.`,
    `Wei Sun, Soichiro Iwataki, Ren Komatsu, Hiromitsu Fujii, Atsushi Yamashita, and Hajime Asama, “Simultaneous Tele-visualization of Construction Machine and Environment Using Body Mounted Cameras", Proceedings of the 2016 IEEE International Conference on Robotics and Biomimetics (ROBIO2016), pp.382-387, Qingdao, China, 2016.`,
    `Ren Komatsu, Hiromitsu Fujii, Hitoshi Kono, Yusuke Tamura, Atsushi Yamashita, and Hajime Asama, “Bird's-eye View Image Generation with Camera Malfunction in Irradiation Environment", Proceedings of the 6th International Conference on Advanced Mechatronics (ICAM2015), pp. 177-178, Tokyo, Japan, 2015.`,
  ],
};
