import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import network from "../network/network";

function ValidatingMail() {
  const history = useHistory();
  const url = useLocation();
  const query = new URLSearchParams(url.search);
  const token = query.get("token");
  useEffect(() => {
    try {
      network
        .post("/api/auth/create-user", { token })
        .then(() => history.push("/login"))
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email Confirmation Failed !",
          }).then(() => {
            history.push("/");
          });
        });
    } catch (error) {
      console.error(error);
    }
  }, [history, token]);

  return <div />;
}

export default ValidatingMail;
