"use client";

import axios from "axios";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const Cloudinary = () => {
  const cloud_name = "dacbuyvwb";
  const preset_name = "testpreset";
  const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

  const [image, setImage] = useState("");

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    //body beldeh
    const file = event.target.files as FileList;
    const formData = new FormData();
    formData.append("file", file[0]);
    formData.append("upload_preset", preset_name);

    //install Axios

    try {
      const { data } = await axios.post<{ secure_url: string }>(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setImage(data.secure_url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-20">
      {image ? (
        <Image width={500} height={500} alt="image" src={image} />
      ) : (
        <div className="grid w-full max-w-sm items-center gap-1.5 border-4 border-green-200">
          <label htmlFor="picture">Picture</label>
          <input
            className="border border-black"
            placeholder="choose file"
            onChange={handleImageUpload}
            id="picture"
            type="file"
          />
        </div>
      )}
    </div>
  );
};

export default Cloudinary;
