/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import axios from "axios";

const DescriptionForm = ({ onUpdateBanner }) => {
  const [input, setInput] = useState({
    description: "",
    timer: 0,
    link: "",
  });

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/banner/1");
        setInput(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBannerData();
  }, []);

  const onChangeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    onUpdateBanner(input);
  };

  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto">
      <form
        onSubmit={onSubmitHandler}
        className="w-1/2 border border-gray-300 rounded-md p-4 my-10"
      >
        <h1 className="font-bold my-4">Update Banner Content</h1>

        <div>
          <Label>Timer Value</Label>
          <Input
            type="text"
            name="timer"
            value={input.timer}
            onChange={onChangeEventHandler}
          />
        </div>

        <div>
          <Label>Link</Label>
          <Input
            type="text"
            name="link"
            value={input.link}
            onChange={onChangeEventHandler}
          />
        </div>

        <div>
          <Label>Description</Label>
          <textarea
            name="description"
            value={input.description}
            onChange={onChangeEventHandler}
            className="border rounded p-2 w-full"
            rows="4"
          />
        </div>

        <Button
          type="submit"
          className="w-full my-4 bg-[#6A3bc2] hover:bg-[#3f2079]"
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default DescriptionForm;
