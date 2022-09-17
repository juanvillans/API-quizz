import React from "react";

export default function Question(props) {

  const [options, setOptions] = React.useState([]);
  React.useEffect(() => {
    let mix = [...props.incorrect];
    mix.splice(Math.trunc(Math.random() * 4), 0, props.correct);
    setOptions(mix);
  }, []);

  const lis = options.map((option, i) => {
    let statusStyle = "transparent";

    if (props.selected[props.id] == option) {
      statusStyle = "bg-color3 border-color3";
    } else statusStyle = "border-color1";

    if (props.allowResults) {
      if (props.correct == option) {
        statusStyle = "bg-green-200 border-green-200";
      } else if (props.selected[props.id] == option ) {
          statusStyle = "opacity-75 bg-red-200 border-red-200"
      } else statusStyle = "opacity-75 border-color2"
    }
    return (
      <li
        className={
          `${statusStyle} rounded-lg border font-medium py-0.5 px-3 text-xs`
        }
        onClick={() => props.toggleAnswer(props.id, option)}
      >
        {option}
      </li>
    );
  });

  return (
    <article className="border-b-2 py-6 border-col">
      <h2 className="font-bold text-xl mb-3">{props.title}</h2>
      <ul className="flex gap-6">{lis}</ul>
    </article>
  );
}
