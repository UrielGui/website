import React from "react";
import { useInView } from "react-intersection-observer";

export default function FadeInWhenVisible({ children }) {
    const [ref, inView] = useInView();

    return (
      <div ref={ref}>
        {
            inView ? 
            children
            : null
        }
      </div>
    );
  }