import { useEffect, useState } from "react";

const UseEffectCounter = () => {
  // initial state value of count variable //

  let [count, setCount] = useState(
    JSON.parse(localStorage.getItem("countValue")) || 0
  );

  // useEffect ek hooks no special function che te class components ni badhli life cycle methods no use kare che such as componentDidMount,componentDidUpdate,componentWillUnmount useEffect tene andar 2 parameter le che jema pela te ek callback function le che ane biju te dependencyList le che ane jayre functional component webpage ma render thase tayre useEffect tena andar na callback function ne call karse te pela call nahi kare te functional component ni state update thase tayre pn useEffect teni andar nu callback function call karse jayre html dom ma render thay jase pchi useeffect ma jo tame dependency nahi api hoy to useffect teni andar nu call back function jayre component peli var webpage ma render thase tayre te teni andar nu callback function call karse ane jayre jayre component ni state update thase tyare tayre pn useEffect tena andar nu callback function call karse. jo tamare useffect na callback function ne jayre component webpage uper pehli var render thay tayre j useEffect tena andar nu callback function call kare baki jayre jayre component state update thay tayre useeffect tena andar nu callback function call na kare tem karvu hoy to useEffect ni andar biju parameter [] empty array pass kari devanu etle jayre apnu component webpage ma pehli var render thase tayre j useEffect tena andar nu callback function call karse component ni state update thase n react pachu component ne re-render karse tayre useEffect tena andar nu callback function call nahi kare. //

  useEffect(() => {
    // local storage ma data store thase jayre jayre jayre count ni value update thase //

    localStorage.setItem("countValue", JSON.stringify(count));
  }, [count]);

  return (
    <div className="flex justify-center items-center mt-6 bg-stone-700 p-8 rounded-full">
      <button
        className="bg-green-400 text-white p-2 font-bold w-12 rounded text-3xl"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
      <span className="font-bold mx-6 text-2xl text-white">{count}</span>
      <button
        className="bg-green-400 text-white p-2 font-bold w-12 rounded text-3xl"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default UseEffectCounter;
