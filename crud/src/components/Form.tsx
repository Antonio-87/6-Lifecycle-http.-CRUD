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

  const onHandleClick = () => {
    if (value !== "") handleSubmit(value);
    if (componentTextarea.current) {
      componentTextarea.current.value = "";
      valueSet("");
    }
  };

  return (
    <form onSubmit={onHandleSubmit} className="form" name="form">
      <div className="input-box">
        <label htmlFor="input-note">New Note</label>
        <textarea
          id="input-note"
          className="input-note"
          rows={6}
          maxLength={265}
          onChange={(event) => valueSet(event.target.value)}
          ref={componentTextarea}
        ></textarea>
        <div className="send" onClick={onHandleClick}></div>
      </div>
    </form>
  );
};

export default Form;
