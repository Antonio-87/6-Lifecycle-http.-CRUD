import { PropsWithChildren } from "react";

const Notes = ({
  className,
  children,
}: PropsWithChildren<{ className: string }>) => {
  return (
    <>
      <ul className={className}></ul>
      {children}
    </>
  );
};

export default Notes;
