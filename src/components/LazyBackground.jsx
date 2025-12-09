import { useEffect, useRef, useState } from "react";

export default function LazyBackground({ src, children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // detect scroll into view
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // preload
  useEffect(() => {
    if (!visible) return;

    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [visible, src]);

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-700 ${
        loaded ? "opacity-100" : "opacity-0"
      } bg-dynamic`}
      style={
        loaded
          ? { "--bg-image": `url(${src})` }
          : {}
      }
    >
      {children}
    </div>
  );
}
