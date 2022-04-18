import react from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import { mockData } from "../mockData";
import { loadFeature, defineFeature } from "jest-cucumber";
import CitySearch from "../CitySearch";
import { extractLocations } from "../api";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test("When user hasn't specified a number, 32 is the default number", ({ given, when, then }) => {
    let AppWrapper;
    given("the main page is open", () => {
      AppWrapper = mount(<App />);
    });

    when("the user hasn't specified a number of events to show", () => {

    });

    then("the number of events shown will be 32", () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(2);
    });
  });

  test("User can change the number of events they want to see", ({ given, when, then }) => {
    let AppWrapper;
    given("the main page is open", () => {
      AppWrapper = mount(<App />);
    });

    when("the user specifies a number of events to be shown", () => {
      AppWrapper.update();
      AppWrapper.find('.inputNumber').simulate('change', { target: { value: "1" } })
    });

    then("the number of events shown will be the number specified by user or less", () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(1);
    });
  });
});