/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  RespondToForm,
  AdministerForm,
  Api,
  Stores
} from "@dailydrip/formulae_react";
//import "./css/index.css";
const { Form } = Api;
const { RespondToFormStore, AdministerFormStore } = Stores;
require("../../../node_modules/@dailydrip/formulae_react/lib/css/index.css");

// Just a thing to play with the form api
// FIXME: Remove this eventually
window.f = Form;

document.onreadystatechange = function() {
  var state = document.readyState;
  if (state == "interactive") {
    // nothing to do here lol
  } else if (state == "complete") {
    // Example for RespondToForm
    ReactDOM.render(
      <Provider store={RespondToFormStore}>
        <div>
          <RespondToForm displaySectionsAs="HEADINGS" />
        </div>
      </Provider>,
      document.getElementById("respond-to-form")
    );

    // Example for AdministerForm
    ReactDOM.render(
      <Provider store={AdministerFormStore}>
        <AdministerForm />
      </Provider>,
      document.getElementById("administer-form")
    );

    // Example for ViewFormSubmission
    // ReactDOM.render(
    //  <Provider store={ViewFormSubmissionStore}>
    //    <ViewFormSubmission apiKey={1} formSubmissionId={1} />
    //  </Provider>,
    //  document.getElementById("view-form-submission")
    //  );
  }
};
