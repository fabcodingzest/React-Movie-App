import React, { useEffect } from "react";


function DetailPage(props) {
  useEffect(() => {
    console.log(props.routeProps);
  }, [props.routeProps]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>You are on Detail Page of Movie :</h1>
      <h1> {props.routeProps.match.params.title}</h1>{" "}
    </div>
  );
}
export default DetailPage;
