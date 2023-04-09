import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-300"
    >
      <div className="flex flex-col max-w-screen-lg w-full h-full p-4 mx-auto justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          asperiores illo aperiam iusto quia est, quidem magni illum dolor cum
          ipsa adipisci nam a ut nemo, fugit dolorem veritatis dolores
          voluptatibus! Asperiores natus debitis nam dicta facere ex id magnam
          quisquam eaque suscipit. At excepturi, dolor tempora id architecto
          alias.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae a
          consequatur dignissimos blanditiis enim fugit quidem minus doloribus,
          sapiente nesciunt magnam ratione quibusdam amet voluptatum, et libero
          aperiam? Sit, expedita. Fugiat nesciunt esse consequuntur voluptas.
          Eligendi repellat tenetur tempore iste est quae et dicta, voluptatibus
          architecto, hic vitae adipisci dolor?
        </p>
      </div>
    </div>
  );
};

export default About;
