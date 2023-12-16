import React, { useRef, useState } from "react";
import Card from "./Card";

const Foreground = () => {
  const data = [
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
  ];

  const ref = useRef(null);

  return (
    <>
      <div  ref={ref} className=" p-8 fixed z-[3] top-0 left-0 w-full h-screen flex  gap-10 flex-wrap">
        {data.map((item, index) => (
          <Card data={item} key={index} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
