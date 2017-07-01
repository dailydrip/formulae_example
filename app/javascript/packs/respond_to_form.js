/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'admin' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { RespondToForm, Api, Stores, Types } from "@dailydrip/formulae_react";
const { createFormApi } = Api;
const { createRespondToFormStore } = Stores;
const { Model } = Types;
require("../../../node_modules/@dailydrip/formulae_react/lib/css/index.css");

window.loadRespondToForm = (element, formId, displaySectionsAs) => {
  createFormApi("API_KEY").get(formId).then(form => {
    const store = createRespondToFormStore(
      new Model({ form: form, apiKey: "API_KEY" })
    );
    ReactDOM.render(
      <Provider store={store}>
        <RespondToForm displaySectionsAs={displaySectionsAs} />
      </Provider>,
      element
    );
  });
};
