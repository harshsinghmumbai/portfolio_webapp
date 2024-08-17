"use client";
import { IoDiamond } from "react-icons/io5";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { LuGanttChartSquare } from "react-icons/lu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const serviceData = [
  {
    icon: <IoDiamond className="w-full h-full" />,
    title: "Full Stack Web Developer",
    description:
      "A full-stack web developer is a person who can develop both client and server part of WebApplication.",
  },
  {
    icon: <HiSquare3Stack3D className="w-full h-full mb-5" />,
    title: "MERN Stack Developer",
    description:
      "MERN stands for MongoDB, Express, React, & Node.js. It's used to develop web applications.",
  },
  {
    icon: <LuGanttChartSquare className="w-full h-full mb-5" />,
    title: "Front-End Developer",
    description:
      "A front-end developer creates the front-end part of webapp & that users see and interact with it.",
  },
];

const Service = () => {
  return (
    <section className="mb-12 mt-6 xl:mb-24 xl:mt-14">
      <div className="container mx-auto">
        <h2 className="section-title mb-20 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 lg:grid lg:gap-4 lg:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {serviceData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative border border-gray-600"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4 mt-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
