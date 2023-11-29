import { useRef, useState } from "react";

const Form = ({ handleSubmit }: { handleSubmit: (value: string) => void }) => {
  const [value, valueSet] = useState<string>("");
  const componentTextarea = useRef<HTMLTextAreaElement>(null);

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value !== "") handleSubmit(value);
    if (componentTextarea.current) {
      componentTextarea.current.value = "";
      valueSet("");
    }
  };

  return (
    <form onSubmit={onHandleSubmit} className="form" name="form">
      <div className="input-box">
        <label htmlFor="">New Note</label>
        <textarea
          className="input-note"
          rows={8}
          onChange={(event) => valueSet(event.target.value)}
          ref={componentTextarea}
        ></textarea>
        <div className="send"></div>
      </div>
    </form>
  );
};

export default Form;
