import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import SuggestionsList from "./SuggestionsList";

configure({ adapter: new Adapter() });

describe("App", () => {
    it("renders correctly with suggestions", () => {
        let suggestions = [{
            "1. symbol": "IBM",
            "2. name": "International Machines"
        }]
        const wrapper = shallow(<SuggestionsList suggestions={suggestions} isSearching={false} notFound={false}/>);
        expect(wrapper.find("SuggestionItem").length).toEqual(1);        
    });
    it("renders correctly with isSearching true", () => {
        let suggestions = [{
            "1. symbol": "IBM",
            "2. name": "International Machines"
        }]
        const wrapper = shallow(<SuggestionsList suggestions={suggestions} isSearching={true} notFound={false}/>);
        expect(wrapper.find("SuggestionItem").length).toEqual(0);    
        expect(wrapper.find("p").length).toEqual(1);
        expect(wrapper.find("p").text()).toEqual("Searching...");
    });
    it("renders correctly with notFound true", () => {
        let suggestions = [{
            "1. symbol": "IBM",
            "2. name": "International Machines"
        }]
        const wrapper = shallow(<SuggestionsList suggestions={suggestions} isSearching={false} notFound={true}/>);
        expect(wrapper.find("p").length).toEqual(1);
        expect(wrapper.find("p").text()).toEqual("No stocks available with this symbol");
    });
});