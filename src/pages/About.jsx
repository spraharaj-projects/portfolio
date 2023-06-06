import React from "react";
import azure from "../assets/icons/azure.png";
import snowflake from "../assets/icons/snowflake.png";
import dagster from "../assets/icons/dagster.jpg";
import python from "../assets/icons/python.png";
import dbt from "../assets/icons/dbt.png";
import react from "../assets/icons/react.png";
import git from "../assets/icons/git.png";
import repo from "../assets/icons/repo.png";
import sharepoint from "../assets/icons/sharepoint.png";
import automate from "../assets/icons/automate.png";
import app from "../assets/icons/app.png";
import office from "../assets/icons/ms.png";
import confluence from "../assets/icons/confluence.png";
import github from "../assets/icons/github.png";
import java from "../assets/icons/java.png";
import jenkins from "../assets/icons/jenkins.png";
import pcf from "../assets/icons/pcf.png";
import sonarqube from "../assets/icons/sonarqube.png";
import springboot from "../assets/icons/springboot.png";
import sqlserver from "../assets/icons/sqlserver.png";
import SkillBadge from "../components/SkillBadge";
import ParticleAbout from "../components/ParticleAbout";

const About = () => {
  return (
    <section>
      <ParticleAbout />
      <div className="mb-52 relative top-0 left-0 overflow-x-hidden text-cyan-300 mx-16 my-10 p-10 bg-opacity-40 bg-sky-950  flex flex-col gap-10 justify-center items-center rounded-xl border-2 border-cyan-300 backdrop-blur-lg">
        <h1 className="text-4xl font-display font-bold">About Me</h1>
        <p className="text-[20px] w-3/4 text-center">
          With four years of experience as a Specialist Programmer at Infosys, I
          have excelled in delivering innovative solutions that drive business
          success. My biggest achievements include developing award-winning
          image feature descriptors and building robust data engineering
          pipelines. I bring a unique blend of technical expertise,
          problem-solving prowess, and exceptional collaboration skills to every
          project. Proficient in Python, SQL, Azure Cloud Computing, and more, I
          am ready to tackle new challenges and make a significant impact.
        </p>
        <div className="text-4xl font-display font-bold">Experience</div>
        <div className="w-2/3 p-5 bg-blue rounded-lg bg-[#0a0c0f] bg-opacity-20 backdrop-blur-sm">
          <h1 className="relative text-3xl">Specialist Programmer L2</h1>
          <div class="relative  mb-4 flex  justify-between text-cyan-500 text-lg">
            <span>Infosys, Pune</span>
            <span>Jun, 2019 - Present</span>
          </div>
          <ul className="list-disc mx-5 flex flex-col gap-5 mt-5 ">
            <li>
              Collaborated closely with cross-functional teams, including
              developers, analysts, and business stakeholders, to gather
              requirements and ensure successful project delivery.
            </li>
            <li>
              Promoted to Specialist Programmer L2 as of January 1st, 2022.
            </li>
          </ul>
        </div>
        <ol class="border-l-2 border-teal-100">
          <li>
            <div class="flex-start md:flex">
              <div class="-ml-[11px] mr-3 h-[20px] w-[20px] rounded-full bg-teal-400"></div>
              <div class="mb-10 ml-6 block max-w-4xl rounded-lg  p-6 shadow-md shadow-black/5 bg-[#0a0c0f] bg-opacity-20 backdrop-blur-sm">
                <h1 className="text-3xl">Data Engineer</h1>
                <div class="mb-4 flex justify-between text-cyan-500 text-lg">
                  <span>Kraft Heinz (Contract)</span>
                  <span>Aug, 2020 - Present</span>
                </div>
                <ul className="list-disc mx-5 flex flex-col gap-5 mt-5 mb-10">
                  <li>
                    Responsible for end-to-end data engineering, including data
                    ingestion, transformation, and analysis.
                  </li>
                  <li>
                    Developed and managed 15+ ETL Pipelines using Azure,
                    Dagster, Python, Snowflake, DBT for Manufacturing,
                    Logistics, and Sales departments.
                  </li>
                  <li>
                    Designed Azure Logic App for efficient management and
                    conversion of SharePoint files.
                  </li>
                  <li>
                    Utilized Dagster Framework and Azure Databricks for critical
                    pipeline development.
                  </li>
                  <li>
                    Acted as a mentor and provided guidance to junior team
                    members, aiding in their professional development and
                    helping them succeed in their roles.
                  </li>
                  <li>
                    Received positive feedback from colleagues and supervisors
                    for my ability to work effectively in a team setting and for
                    my willingness to go the extra mile to support team
                    objectives.
                  </li>
                </ul>
                <div className="border-2 p-5 border-cyan-300 rounded-md">
                  <div className="text-2xl pb-5 w-full flex justify-center">
                    Technology Stack
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <SkillBadge image={azure} title="Azure Cloud" />
                    <SkillBadge image={snowflake} title="Snowflake" />
                    <SkillBadge image={dagster} title="Dagster" />
                    <SkillBadge image={python} title="Python v3.8.10" />
                    <SkillBadge image={dbt} title="DBT v1.5" />
                    <SkillBadge image={react} title="React JS v18.2" />
                    <SkillBadge image={git} title="git" />
                    <SkillBadge image={repo} title="Azure Repo" />
                    <SkillBadge image={sharepoint} title="SharePoint" />
                    <SkillBadge image={automate} title="Power Automate" />
                    <SkillBadge image={app} title="Power App" />
                    <SkillBadge image={office} title="Microsoft Office" />
                    <SkillBadge image={confluence} title="Confluence" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="flex-start md:flex">
              <div class="-ml-[11px] mr-3 h-[20px] w-[20px] rounded-full bg-teal-400"></div>
              <div class="mb-10 ml-6 block max-w-4xl rounded-lg  p-6 shadow-md shadow-black/5 bg-[#0a0c0f] bg-opacity-20 backdrop-blur-sm">
                <h1 className="text-3xl">Fullstack Developer</h1>
                <div class="mb-4 flex justify-between text-cyan-500 text-lg">
                  <span>Allstates Insurance (Contract)</span>
                  <span>Aug, 2019 - Aug, 2020</span>
                </div>
                <ul className="list-disc mx-5 flex flex-col gap-3 mt-5 mb-10">
                  <li>
                    Developed sprint boot microservices to collect customers'
                    PII data over 150 sources including mainframe systems, SQL
                    server, HDFS etc., aggregate them and generate reports.
                  </li>
                  <li>
                    Implemented masking techniques to ensure the security and
                    privacy of customer PII information.
                  </li>
                  <li>
                    Developed a highly interactive and visually appealing user
                    interface using React JS, enhancing the overall user
                    experience.
                  </li>
                  <li>
                    Utilized Hibernate for the persistence layer, performing
                    CRUD operations.
                  </li>
                  <li>
                    Deployed the application on Pivotal Cloud Foundry, taking
                    advantage of cloud-enabled Spring Boot capabilities and
                    automate the deployment using Jenkins.
                  </li>
                  <li>
                    Ensured high code quality with over 95% code coverage and
                    performed vulnerability checks using SonarQube.
                  </li>
                  <li>
                    Fostered a collaborative and supportive work environment,
                    promoting knowledge sharing and fostering teamwork among
                    team members.
                  </li>
                </ul>
                <div className="border-2 p-5 border-cyan-300 rounded-md">
                  <div className="text-2xl pb-5 w-full flex justify-center">
                    Technology Stack
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <SkillBadge image={springboot} title="Springboot" />
                    <SkillBadge image={java} title="Java v8" />
                    <SkillBadge image={sqlserver} title="SQL Server" />
                    <SkillBadge image={pcf} title="Pivotal Cloud Foundry" />
                    <SkillBadge image={jenkins} title="Jenkins" />
                    <SkillBadge image={react} title="React JS v16" />
                    <SkillBadge image={git} title="git" />
                    <SkillBadge image={github} title="Github" />
                    <SkillBadge image={sonarqube} title="Sonarqube" />
                    <SkillBadge image={office} title="Microsoft Office" />
                    <SkillBadge image={confluence} title="Confluence" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="flex-start md:flex">
              <div class="-ml-[11px] mr-3 h-[20px] w-[20px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
              <div class="mb-10 ml-6 block max-w-4xl rounded-lg p-6 shadow-md shadow-black/5 bg-[#0a0c0f] bg-opacity-20 backdrop-blur-sm">
                <h1 className="text-3xl">Fullstack Developer</h1>
                <div class="mb-4 flex justify-between text-cyan-500 text-lg">
                  <span>Allstates Insurance (Contract)</span>
                  <span>Aug, 2019 - Aug, 2020</span>
                </div>
                <ul className="list-disc mx-5 flex flex-col gap-3 mt-5 mb-10">
                  <li>
                    Developed sprint boot microservices to collect customers'
                    PII data over 150 sources including mainframe systems, SQL
                    server, HDFS etc., aggregate them and generate reports.
                  </li>
                  <li>
                    Implemented masking techniques to ensure the security and
                    privacy of customer PII information.
                  </li>
                  <li>
                    Developed a highly interactive and visually appealing user
                    interface using React JS, enhancing the overall user
                    experience.
                  </li>
                  <li>
                    Utilized Hibernate for the persistence layer, performing
                    CRUD operations.
                  </li>
                  <li>
                    Deployed the application on Pivotal Cloud Foundry, taking
                    advantage of cloud-enabled Spring Boot capabilities and
                    automate the deployment using Jenkins.
                  </li>
                  <li>
                    Ensured high code quality with over 95% code coverage and
                    performed vulnerability checks using SonarQube.
                  </li>
                  <li>
                    Fostered a collaborative and supportive work environment,
                    promoting knowledge sharing and fostering teamwork among
                    team members.
                  </li>
                </ul>
                <div className="border-2 p-5 border-cyan-300 rounded-md">
                  <div className="text-2xl pb-5 w-full flex justify-center">
                    Technology Stack
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <SkillBadge image={springboot} title="Springboot" />
                    <SkillBadge image={java} title="Java v8" />
                    <SkillBadge image={sqlserver} title="SQL Server" />
                    <SkillBadge image={pcf} title="Pivotal Cloud Foundry" />
                    <SkillBadge image={jenkins} title="Jenkins" />
                    <SkillBadge image={react} title="React JS v16" />
                    <SkillBadge image={git} title="git" />
                    <SkillBadge image={github} title="Github" />
                    <SkillBadge image={sonarqube} title="Sonarqube" />
                    <SkillBadge image={office} title="Microsoft Office" />
                    <SkillBadge image={confluence} title="Confluence" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ol>
        <div className="text-4xl font-display font-bold">Internship</div>
        <ol class="border-l-2 border-info-100">
          <li>
            <div class="flex-start md:flex">
              <div class="-ml-[11px] mr-3 h-[20px] w-[20px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
              <div class="mb-10 ml-6 block max-w-4xl rounded-lg  p-6 shadow-md shadow-black/5 bg-[#0a0c0f] bg-opacity-20 backdrop-blur-sm">
                <h1 className="text-3xl">IoT Practioner</h1>
                <div class="mb-4 flex justify-between text-cyan-500 text-lg">
                  <span>EI Systems, Bhubaneswar</span>
                  <span>May, 2018 - Jul, 2018</span>
                </div>
                <ul className="list-disc mx-5 flex flex-col gap-5 mt-5 mb-10">
                  <li>
                    Responsible for end-to-end data engineering, including data
                    ingestion, transformation, and analysis.
                  </li>
                  <li>
                    Developed and managed 15+ ETL Pipelines using Azure,
                    Dagster, Python, Snowflake, DBT for Manufacturing,
                    Logistics, and Sales departments.
                  </li>
                  <li>
                    Designed Azure Logic App for efficient management and
                    conversion of SharePoint files.
                  </li>
                  <li>
                    Utilized Dagster Framework and Azure Databricks for critical
                    pipeline development.
                  </li>
                  <li>
                    Acted as a mentor and provided guidance to junior team
                    members, aiding in their professional development and
                    helping them succeed in their roles.
                  </li>
                  <li>
                    Received positive feedback from colleagues and supervisors
                    for my ability to work effectively in a team setting and for
                    my willingness to go the extra mile to support team
                    objectives.
                  </li>
                </ul>
                <div className="border-2 p-5 border-cyan-300 rounded-md">
                  <div className="text-2xl pb-5 w-full flex justify-center">
                    Technology Stack
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <SkillBadge image={azure} title="Azure Cloud" />
                    <SkillBadge image={snowflake} title="Snowflake" />
                    <SkillBadge image={dagster} title="Dagster" />
                    <SkillBadge image={python} title="Python v3.8.10" />
                    <SkillBadge image={dbt} title="DBT v1.5" />
                    <SkillBadge image={react} title="React JS v18.2" />
                    <SkillBadge image={git} title="git" />
                    <SkillBadge image={repo} title="Azure Repo" />
                    <SkillBadge image={sharepoint} title="SharePoint" />
                    <SkillBadge image={automate} title="Power Automate" />
                    <SkillBadge image={app} title="Power App" />
                    <SkillBadge image={office} title="Microsoft Office" />
                    <SkillBadge image={confluence} title="Confluence" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ol>
        <div className="text-4xl font-display font-bold">Education</div>
        <ol class="border-l-2 border-info-100">
          <li>
            <div class="flex-start md:flex">
              <div class="-ml-[11px] mr-3 h-[20px] w-[20px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
              <div class="mb-10 ml-6 block max-w-4xl rounded-lg  p-6 shadow-md shadow-black/5 bg-[#0a0c0f] bg-opacity-20 backdrop-blur-sm">
                <h1 className="text-3xl">Data Engineer</h1>
                <div class="mb-4 flex justify-between text-cyan-500 text-lg">
                  <span>Kraft Heinz (Contract)</span>
                  <span>Aug, 2015 - May, 2019</span>
                </div>
                <ul className="list-disc mx-5 flex flex-col gap-5 mt-5 mb-10">
                  <li>
                    Responsible for end-to-end data engineering, including data
                    ingestion, transformation, and analysis.
                  </li>
                  <li>
                    Developed and managed 15+ ETL Pipelines using Azure,
                    Dagster, Python, Snowflake, DBT for Manufacturing,
                    Logistics, and Sales departments.
                  </li>
                  <li>
                    Designed Azure Logic App for efficient management and
                    conversion of SharePoint files.
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default About;
