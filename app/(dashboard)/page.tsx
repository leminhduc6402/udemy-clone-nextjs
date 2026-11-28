import { CourseGrid } from "@/components/common";
import { CourseItem } from "@/components/course";
import Heading from "@/components/typography/Heading";

const Home = () => {
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </CourseGrid>
    </div>
  );
};

export default Home;
