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
import { AdministerForm, Api, Stores, Types } from "@dailydrip/formulae_react";
const { createFormApi } = Api;
const { createAdministerFormStore } = Stores;
const { AdministerFormModel } = Types;
require("../../../node_modules/@dailydrip/formulae_react/lib/css/index.css");

const apiKey = process.env.API_KEY;

window.loadAdministerForm = (element, formId) => {
  createFormApi(apiKey).get(formId).then(form => {
    const store = createAdministerFormStore(
      new AdministerFormModel({ form: form, apiKey: apiKey })
    );
    ReactDOM.render(
      <Provider store={store}>
        <AdministerForm />
      </Provider>,
      element
    );
  });
};
