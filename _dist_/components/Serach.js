import React, {useState} from "../../_snowpack/pkg/react.js";
import {useForm} from "../../_snowpack/pkg/react-hook-form.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import Loading from "./Loading.js";
import ResultBox from "./ResultBox.js";
import TextInput from "./TextInput.js";
import LocateButton from "./LocateButton.js";
import SubmitButton from "./SubmitButton.js";
const SerachContainer = styled.div`

    display: inline-flex;
	justify-content: center;
	align-items: center;

	background: #FFF;
    border-radius: 3px;
    height: 30px;

    @media screen and (max-width: 900px) {
		width: 95vw;
        justify-content: flex-end;
	}

`;
const Serach = () => {
  const [data, setData] = useState({passes: []});
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://api.opencagedata.com/geocode/v1/json?key=36e2ec56f5314e6b801a8e0da6f1f181&q=";
  const {register, handleSubmit, setValue} = useForm();
  const findMe = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const url2 = "https://api.opencagedata.com/geocode/v1/json?q=" + lat + "+" + lng + "&key=36e2ec56f5314e6b801a8e0da6f1f181";
        fetch(url2).then((res) => res.json()).then((d) => {
          setValue("location", d.results[0].components.city);
        }).then(() => {
          const satUrl = "https://api.g7vrd.co.uk/v1/satellite-passes/25544/" + lat + "/" + lng + ".json?minelevation=70&hours=48";
          fetch(satUrl).then((res) => res.json()).then((data2) => {
            setData(data2);
            setIsLoading(false);
          });
        });
      });
    }
  };
  const onSubmit = (data2) => {
    setIsLoading(true);
    const fetchUrl = url + data2.location;
    fetch(fetchUrl).then((res) => res.json()).then((d) => {
      const lat = d.results[0].geometry.lat;
      const lng = d.results[0].geometry.lng;
      const satUrl = "https://api.g7vrd.co.uk/v1/satellite-passes/25544/" + lat + "/" + lng + ".json?minelevation=70&hours=48";
      fetch(satUrl).then((res) => res.json()).then((data3) => {
        setData(data3);
        setIsLoading(false);
      });
    });
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /* @__PURE__ */ React.createElement(SerachContainer, null, /* @__PURE__ */ React.createElement(TextInput, {
    name: "location",
    reference: register,
    placeholder: "Type your location"
  }), /* @__PURE__ */ React.createElement(LocateButton, {
    onClick: findMe
  }), /* @__PURE__ */ React.createElement(SubmitButton, {
    value: "Locate"
  }))), isLoading ? /* @__PURE__ */ React.createElement(Loading, null) : /* @__PURE__ */ React.createElement("div", null, data.passes.map((i) => /* @__PURE__ */ React.createElement(ResultBox, {
    key: i.tca,
    pass: i.tca
  }))));
};
export default Serach;
