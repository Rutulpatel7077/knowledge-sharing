import React, { useEffect } from "react";
import reactLogo from "./assets/react.svg";

const Race = () => {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  return (
    <div>

      {show && <a href="/vehicles">Vehicles</a>}

      <h2>Hello Coders!!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, hic
        deleniti! Debitis voluptatum excepturi dolorum aut saepe similique,
        possimus asperiores quam porro hic magni fugiat tempora labore ducimus
        velit ab.
      </p>
    </div>
  );
};

export default Race;
