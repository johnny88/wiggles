import { useRef, useEffect, MutableRefObject } from "react";

export function useVisible(
  node: MutableRefObject<Element | null>,
  callback: () => void,
  options?: IntersectionObserverInit
) {
  const observer = useRef<IntersectionObserver | undefined>();
  useEffect(() => {
    if (observer.current !== undefined) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting === false) return;
        callback();
      });
    }, options);

    const current = observer.current;
    if (node.current !== null) current.observe(node.current);
    return () => current?.disconnect();
  });
}
