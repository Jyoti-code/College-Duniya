import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import StudyGoal from "./StudyGoal";
import Programs from "./Programs";
import Notification from "./Notification";
import CollegeRankingTable from "./CollegeRankingTable";
import TopCollege from "./TopCollege";
import CurrentRanking from "./CurrentRanking";
import StudyPlace from "./StudyPlace";
import ExploreCourses from "./ExploreCourses";
import BoardExam from "./BoardExam";
import TopExam from "./TopExam";
import News from "./News";
import StudyAbroad from "./StudyAbroad";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <StudyGoal />
      <Programs />
      <Notification />
      <CollegeRankingTable />
      <TopCollege />
      <CurrentRanking />
      <StudyPlace />
      <ExploreCourses />
      <BoardExam />
      <TopExam />
      <News />
      <StudyAbroad />
      <Subscribe />
      <Footer />
    </>
  );
}
