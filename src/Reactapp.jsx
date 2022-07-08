import { Login } from "@mui/icons-material";
import React, { Suspense } from "react";

const OtherComponent = React.lazy(() => import("./App"));

const Reactapp = ({ hideLoader, showLoader }) => {
  return (
    <div>
      <Suspense
        fallback={<h1>loading.......................................</h1>}
      >
        <OtherComponent hideLoader={hideLoader} showLoader={showLoader} />
      </Suspense>
    </div>
  );
};

export default Reactapp;
