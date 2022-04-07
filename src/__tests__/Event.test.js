import react from "react";
import Event from "../Event";
import { mockData } from "../mockData";
import { shallow } from "enzyme";

describe('<Event /> component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test('renders an event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('renders a location', () => {
    expect(EventWrapper.find('.event-location')).toHaveLength(1);
  });

  test('renders start date', () => {
    expect(EventWrapper.find('.event-start')).toHaveLength(1);
  });

  test('renders details button', () => {
    expect(EventWrapper.find('.details-button')).toHaveLength(1);
  });

  test('details are collapsed', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
  })

  test('renders more info when details button is clicked', () => {
    EventWrapper.setState({ collapsed: true });
    EventWrapper.find('.details-button').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
    expect(EventWrapper.find('.more-details')).toHaveLength(1);
  });

  test('hides info when button is clicked', () => {
    EventWrapper.setState({ collapsed: false });
    EventWrapper.find('.details-button').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
    expect(EventWrapper.find('.more-details')).toHaveLength(0);
  });

})