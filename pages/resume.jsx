import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Naveenkumar | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Naveenkumar A</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/naveenkumar-a-b0b172278/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/naveenmech"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Web Development <span className="px-1">|</span> Performance
              optimization
              <span className="px-1">|</span> Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Web Development</p>
            <p className="py-2">Performance optimization</p>
            <p>Problem Solving</p>
          </div>
        </div>
        <p className="">
          Analytical, innovative, and motivated web development professional
          with experience in highly skilled React.js and Next.js Developer with
          over one and half years of professional experience. Proven ability to
          develop user interface components with React.js / Next.js and
          troubleshoot complex issues. Have made significant contributions in
          creating high-quality code with excellent uptime and optimized
          performance. Excited about implementing robust and innovative
          solutions.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Git
            <span className="px-2">|</span>Github
            <span className="px-2">|</span>Context
            {/* <span className="px-2">|</span>SQL */}
            {/* <span className="px-2">|</span>NoSQL */}
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
            {/* <span className="px-2">|</span> RESTAPI */}
          </p>
          <p className="py-2">
            <span className="font-bold">course completion certificate</span>
            <span className="px-2">|</span>
            <a href="https://www.linkedin.com/company/qtree-technologies/">
              Qtree Technology
            </a>
            <span className="px-2 text-[12px]">coimbatore</span>
          </p>
        </div>
        {/* Education start */}
        <h5 className="text-center underline text-[18px] py-4">Education</h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              <a href="https://www.linkedin.com/school/drngpit/">
                Dr.NGP Institute Of Technology
              </a>
            </span>
            <span className="px-2">|</span>Coimbatore, TN
          </p>
          <p className=" font-semibold text-[15px] py-2">
            B.E Mechanical Engineering
          </p>
          <div>
            <p className="text-[15px] font-sans">
              <span>2016 - 2020</span> <span className="ml-10">6.58 CGPA</span>
            </p>
          </div>
        </div>
        {/*  */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              <a href="https://schools.org.in/karur/33140400810/cheran-higher-sec-school.html">
                Cheran Higher Secondary School
              </a>
            </span>
            <span className="px-2">|</span>Karur, TN
          </p>
          <p className=" font-semibold text-[15px] py-2">
            Higher Secondary School
          </p>
          <div>
            <p className="text-[15px] font-sans">
              <span>2015 - 2016</span> <span className="ml-10">69%</span>
            </p>
          </div>
        </div>
        {/* Education end  */}

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              <a href="https://www.linkedin.com/company/leventis-software-solutions-private-limited/mycompany/">
                Leventis Software Solutions Private Limited{" "}
              </a>
            </span>
            <span className="px-2">|</span>Coimbatore, TN
          </p>
          <p className="py-1 italic">
            Associate Software Engineer (2023 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with developed
              reusable React.JS components, improving code manageability and
              reusability by 60%.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Developed reusable React.JS components to improving code
              manageability and reusability by 60%.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              <a href="https://www.linkedin.com/company/cubiksoft-technologies-private-limited/?originalSubdomain=in">
                {" "}
                Cubiksoft Technologies Private Limited
              </a>
            </span>
            <span className="px-2">|</span>Coimbatore, TN
          </p>
          <p className="py-1 italic">
            React.js / Next.js Developer (Nov 2022 - Dec 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Created an innovative front-end library resulting in 35% faster
              product development cycles.
            </li>
            <li>
              Improved front-end coding standards resulting in 25% increase in
              team efficiency.
            </li>
            <li>
              Introduced and implemented browser-based debugging, improving
              troubleshooting efficiency by 40%.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">
              <a href="https://sakthigroup.com/auto-component.php">
                Sakthi Auto Ancillary Pvt Ltd
              </a>
            </span>
            <span className="px-2">|</span>Coimbatore, TN
          </p>
          <p className="py-1 italic">Quality Engineer (2020 – 2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Develop and implement quality control processes and procedures.
            </li>
            <li>
              Analyze quality metrics and identify areas for improvement and
              Collaborate with cross-functional teams to resolve quality issues.
            </li>
            <li>
              Conduct root cause analysis and implement corrective actions.
            </li>
            <li>
              Collaborated with a talented and high performing team to develop
              and maintain quality documentation, such as control plans,
              inspection plans, and process flows.
            </li>
            <li>Monitor and audit supplier quality performance.</li>
            <li>
              Oversee the entire production while conducting product inspection
              as part of ensuring optimum quality.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
