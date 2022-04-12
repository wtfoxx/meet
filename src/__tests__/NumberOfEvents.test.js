import react from "react";
import NumberOfEvents from "../NumberOfEvents";
import { shallow } from "enzyme";

describe('<NumberOfEvents /> component', () => {
  
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => {}} />);
  });

  test('render input field', () => {
    expect(NumberOfEventsWrapper.find('.inputNumber')).toHaveLength(1);
  });

  test('input changes number of events', () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: 32 });
    NumberOfEventsWrapper.find('.inputNumber').simulate('change', {target: {value: "2"}});
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual("2");
  })

})