import React from "react";

export default function TravelCard(props) {
  return (
    <article className="py-5 text-text_color text-sm
    text-sm grid grid-cols-4 gap-5">
      <div className="img-cont h-48">
        <img className="h-full rounded-md object-cover" src={props.imageUrl} alt="" />
      </div>
      <body className="col-span-3">
        <p>
          <span className="uppercase mr-2 tracking-widest"><i class="fa-light fa-location-dot"></i> {props.location}</span> 
          <a  className="text-xs underline underline-offset-2 opacity-50 hover:opacity-100 " href={props.googleMapsUrl}> View on Google Maps</a>
        </p>
        <h1 className="mb-5 text-2xl font-bold">{props.title}</h1>
        <b >{props.startDate} - {props.endDate}</b>
        <p className=" leading-5 mt-2">{props.description}</p>
      </body>
    </article>
  );
}
