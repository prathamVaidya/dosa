import React from "react";
import { Breadcrumbs, Link } from "@mui/material";
import Utils from "../utils";
function ThemeBreadcrumbs(props) {
  const path = window.location.pathname.split("/").slice(1);
  var url = "";
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {path.length >= 1 ? (
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
      ) : (
        ""
      )}

      {path.slice(0, -1).map((link, index) => {
        url = url + "/" + link;
        return (
          <Link underline="hover" color="inherit" href={url} key={index}>
            {link.toProperCase()}
          </Link>
        );
      })}

      {path.length < 1 ? (
        <Link
          underline="hover"
          color="text.primary"
          href="/"
          aria-current="page"
        >
          Home
        </Link>
      ) : (
        <Link
          underline="hover"
          color="text.primary"
          href={url + "/" + path.slice(-1)[0]}
          aria-current="page"
        >
          {path.slice(-1)[0].toProperCase()}
        </Link>
      )}
    </Breadcrumbs>
  );
}

export default ThemeBreadcrumbs;
