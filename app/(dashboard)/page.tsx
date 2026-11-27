import { CourseItem } from "@/components/course";
import Heading from "@/components/typography/Heading";

const Home = () => {
  return (
    <div>
      <Heading>Khám phá</Heading>
      <div className="mt-8 grid grid-cols-3 gap-8">
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
    </div>
  );
};

export default Home;
