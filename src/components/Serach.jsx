import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import Loading from "./Loading";
import ResultBox from "./ResultBox";
import TextInput from "./TextInput";
import LocateButton from "./LocateButton";
import SubmitButton from "./SubmitButton";

const SerachContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  background: #fff;
  border-radius: 3px;
  height: 30px;

  @media screen and (max-width: 900px) {
    width: 95vw;
    justify-content: flex-end;
  }
`;

const Serach = () => {
  const [data, setData] = useState({ passes: [] });
  const [isLoading, setIsLoading] = useState(false);
  const url =
    "https://api.opencagedata.com/geocode/v1/json?key=36e2ec56f5314e6b801a8e0da6f1f181&q=";
  const { register, handleSubmit, setValue } = useForm();

  const findMe = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=36e2ec56f5314e6b801a8e0da6f1f181`;

        fetch(url)
          .then((res) => res.json())
          .then((d) => {
            setValue("location", d.results[0].components.city);
          })
          .then(() => {
            const satUrl = `https://api.g7vrd.co.uk/v1/satellite-passes/25544/${lat}/${lng}.json?minelevation=70&hours=48`;
            fetch(satUrl)
              .then((res) => res.json())
              .then((data) => {
                setData(data);
                setIsLoading(false);
              });
          });
      });
    }
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    const fetchUrl = url + data.location;
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((d) => {
        const lat = d.results[0].geometry.lat;
        const lng = d.results[0].geometry.lng;
        const satUrl = `https://api.g7vrd.co.uk/v1/satellite-passes/25544/${lat}/${lng}.json?minelevation=70&hours=48`;
        fetch(satUrl)
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setIsLoading(false);
          });
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SerachContainer>
          <TextInput
            name="location"
            reference={register}
            placeholder="Type your location"
          />
          <LocateButton onClick={findMe} />
          <SubmitButton value="Locate" />
        </SerachContainer>
      </form>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {data.passes.map((i) => (
            <ResultBox key={i.tca} pass={i.tca} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Serach;
