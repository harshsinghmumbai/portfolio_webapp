"use client";
import Link from "next/link";
import { Button } from "./ui/button";
// import swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/assets/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/4.png",
    category: "Angular js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/4.png",
    category: "Angular js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/2.png",
    category: "vue js",
    name: "Sai Service Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/1.png",
    category: "Full stack web",
    name: "Toyota Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/2.png",
    category: "vue js",
    name: "Sai Service Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/1.png",
    category: "Full stack web",
    name: "Toyota Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/4.png",
    category: "Angular js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/4.png",
    category: "Angular js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/4.png",
    category: "Angular js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/4.png",
    category: "Angular js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/2.png",
    category: "vue js",
    name: "Sai Service Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/1.png",
    category: "Full stack web",
    name: "Toyota Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/2.png",
    category: "vue js",
    name: "Sai Service Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/1.png",
    category: "Full stack web",
    name: "Toyota Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/2.png",
    category: "vue js",
    name: "Sai Service Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/1.png",
    category: "Full stack web",
    name: "Toyota Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/2.png",
    category: "vue js",
    name: "Sai Service Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/1.png",
    category: "Full stack web",
    name: "Toyota Website",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsam",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[480px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8 w-fit max-w-[400px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[900px] xl:absolute right-0 top-0">
          <Swiper
            className="h-fit pb-10"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 6 projects for the slides */}
            {projectData.slice(0, 6).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
