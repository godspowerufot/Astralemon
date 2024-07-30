import SlideImage1 from "@/public/scott-graham-OQMZwNd3ThU-unsplash.jpg";
import SlideImage2 from "@/public/scott-graham-5fNmWej4tAA-unsplash.jpg";
import SlideImage3 from "@/public/Pexels Photo by Christina Morillo.svg";


type FAQItemType = {
  question: string;
  answer: string;
};
export const faqItems: FAQItemType[] = [
  {
    question: "What is JobMingle?",
    answer:
      "JobMingle is an innovative ed-tech platform and remote job recruitment website. We empower individuals seeking to transition to a new career by equipping them with the right skills and providing access to numerous remote job opportunities across the country. We assist employers in finding the remote talent they desire to grow their company and connect job seekers to the jobs they need to succeed.",
  },
  {
    question: "Do I need a laptop before I can visit Jobmingle.co?",
    answer:
      "No! You can access Jobmingle.co on all smart devices. As long as your phone can browse, you are good to go.",
  },
  {
    question: "Is there a mobile app available for JobMingle?",
    answer:
      "No. But we are currently working on it. We will notify you when it is available for download on the Play Store and Apple Store.",
  },
  {
    question: "What kind of courses are available on JobMingle?",
    answer:
      "We offer a wide range of courses across multiple industries. Which means we are not specific to a particular industry.",
  },
  {
    question: "Is it only remote jobs that are listed on JobMingle?",
    answer:
      "Yes. However, we also list hybrid jobs that require you to go to work a few times a week.",
  },
  {
    question: "Can I advertise with JobMingle?",
    answer:
      "Yes, you can. To advertise your brand, please send an email to contact@jobmingle.co to learn more about our advertising rates.",
  },
];
//Slides
export const slides = [
  {
    imagesone: SlideImage1,
    headerText: "The Journey To Your New Career Begins Now!",
  },
  {
    imagesone: SlideImage2,
    headerText: "Your Dream Remote Job Awaits ",
  },
  {
    imagesone: SlideImage3,
    headerText: "Let Us Skill You Up And Guide You There ",
  },
];
