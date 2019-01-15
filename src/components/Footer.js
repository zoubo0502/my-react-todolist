import React from "react";
import FilterLink from "../containers/FilterLink";
import { VISIBILITY } from "../actions";

const Footer = () => {
  return (
    <div>
      SHOW:
      <FilterLink filter={VISIBILITY.SHOW_ALL}>All</FilterLink>
      {", "}
      <FilterLink filter={VISIBILITY.SHOW_COMPLETED}>Completed</FilterLink>
      {", "}
      <FilterLink filter={VISIBILITY.SHOW_UNCOMPLETED}>Uncompleted</FilterLink>
    </div>
  );
};

export default Footer;
