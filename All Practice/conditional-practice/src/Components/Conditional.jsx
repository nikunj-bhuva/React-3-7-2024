import Drive from "./Drive";

const Conditional = () => {
  let userAge = 18;

  // using if else condition //

  // if (userAge >= 18) {
  //   return <Drive age={userAge} allow="Can" />;
  // } else {
  //   return <Drive age={userAge} allow="Can't" />;
  // }

  // using ternary operator //

  return (
    <>
      <Drive
        age={userAge}
        allow={userAge >= 18 ? <b>"Can" 🚗</b> : <b>"Can't"❎</b>}
      />
    </>
  );
};

export default Conditional;
