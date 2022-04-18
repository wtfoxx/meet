import react from "react";
import { mount } from "enzyme";
import App from "../App";

import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppWrapper;

    given("the main page is open", () => {
      AppWrapper = mount(<App />);
    });

    when("the user opens the app", () => {

    });

    then("the events should all be collapsed by default", () => {
      expect(AppWrapper.find('.more-details')).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details", ({ given, when, then }) => {
    let AppWrapper;

    given("the main page is open", async () => {
      AppWrapper = await mount(<App />);
    });

    when("the user clicks to expand an event", () => {
      AppWrapper.update();
      AppWrapper.find('.details-button').at(0).simulate('click');
    });

    then("the event element should expand and show the event's details", () => {
      AppWrapper.update()
      expect(AppWrapper.find('.more-details')).toHaveLength(1);
    });
  });

  test("User can collapse an event to hide its details", ({ given, when, then }) => {
    let AppWrapper;

    given("the main page is open and an event is expanded", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.details-button').at(0).simulate('click');
      expect(AppWrapper.find('.more-details')).toHaveLength(1);
    });

    when("the user clicks to collapse an event", () => {
      AppWrapper.update();
      AppWrapper.find('.details-button').at(0).simulate('click');
    });

    then("the event element should collapse and hide the event's details", () => {
      AppWrapper.update();
      expect(AppWrapper.find('.more-details')).toHaveLength(0);
    });
  });
});