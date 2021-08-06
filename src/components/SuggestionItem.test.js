import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import SuggestionItem from "./SuggestionItem";

configure({ adapter: new Adapter() });

describe("App", () => {
    it("renders correctly", () => {
        let suggestion = {
            "1. symbol": "IBM",
            "2. name": "International Machines"
        }
        let onItemClick = jest.fn();
        const wrapper = shallow(<SuggestionItem suggestion={suggestion} onItemClick={onItemClick} />);
        expect(wrapper.find("p").length).toEqual(1);
        expect(wrapper.find("p").text()).toEqual("International Machines");
        wrapper.find('p').simulate('click');
        expect(onItemClick).toHaveBeenCalledTimes(1);
    });
});