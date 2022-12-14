import React from "react";
import classes from "./MeetupDetail.module.css";
import { Fragment } from "react";
export const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
    </section>
  );
};
