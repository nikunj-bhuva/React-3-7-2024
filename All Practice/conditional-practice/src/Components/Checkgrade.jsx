import GradeSystem from "./Gradesystem";
import InvalidMark from "./Invalidmark";

const Checkgrade = () => {
  let userMark = +prompt("enter your Marks:(between 0 to 100)");

  if (userMark >= 90 && userMark <= 100)
    return <GradeSystem Mark={userMark} Grade="A" icon="🥳" />;
  else if (userMark >= 75 && userMark < 90)
    return <GradeSystem Mark={userMark} Grade="B" icon="🤩" />;
  else if (userMark >= 60 && userMark < 75)
    return <GradeSystem Mark={userMark} Grade="C" icon="😇" />;
  else if (userMark >= 35 && userMark < 60)
    return <GradeSystem Mark={userMark} Grade="D" icon="😎" />;
  else if (userMark >= 0 && userMark < 35)
    return <GradeSystem Mark={userMark} Grade="Failed" icon="😭" />;
  else return <InvalidMark />;
};

export default Checkgrade;
