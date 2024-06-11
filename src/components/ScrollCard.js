import React, { useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Card from "./Card";
import data from "../data.json";

const ITEM_WIDTH = 256;

const ScrollCard = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const containerRef = useRef();

  // Function to handle scrolling when the button is clicked
  const handleScroll = (scrollAmount) => {
    // Calculate the new scroll position
    const newScrollPosition = scrollPosition + scrollAmount;

    // Update the state with the new scroll position
    setScrollPosition(newScrollPosition);

    // Access the container element and set its scrollLeft property
    containerRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <>
      <div className="container">
        <div>
          <p className="font-semibold text-2xl mb-3 mt-3">Get Answer</p>
        </div>
        <div className="flex items-center justify-between pe-3">
          <p className="font-semibold text-lg mb-3">to all your questions</p>
          <div className="flex items-center justify-between gap-5">
            <button onClick={() => handleScroll(-ITEM_WIDTH)}>
              {" "}
              <FaChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={() => handleScroll(ITEM_WIDTH)}>
              {" "}
              <FaChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div
          ref={containerRef}
          style={{
            // width: "calc(100% - 768px)",
            overflowX: "scroll",
            scrollBehavior: "smooth",
          }}
          className="flex flex-wrap gap-5"
        >
          <div className="flex gap-5">
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollCard;
