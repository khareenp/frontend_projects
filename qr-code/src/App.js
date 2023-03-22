import qrCode from "./image-qr-code.png";
export default function App() {
  let myData = [
    {
      id: 1,
      first_name: "Hervey",
      last_name: "Swadden",
      email: "hswadden0@upenn.edu",
      gender: "Male",
      ip_address: "228.83.254.71",
    },
    {
      id: 2,
      first_name: "Eal",
      last_name: "Maskrey",
      email: "emaskrey1@oakley.com",
      gender: "Male",
      ip_address: "243.25.217.241",
    },
    {
      id: 3,
      first_name: "Jareb",
      last_name: "La Wille",
      email: "jlawille2@ovh.net",
      gender: "Male",
      ip_address: "6.50.11.95",
    },
    {
      id: 4,
      first_name: "Sullivan",
      last_name: "Castillon",
      email: "scastillon3@tripadvisor.com",
      gender: "Male",
      ip_address: "158.70.43.122",
    },
    {
      id: 5,
      first_name: "Angie",
      last_name: "Winckle",
      email: "awinckle4@vkontakte.ru",
      gender: "Male",
      ip_address: "191.5.192.74",
    },
    {
      id: 6,
      first_name: "Corny",
      last_name: "Reddoch",
      email: "creddoch5@washington.edu",
      gender: "Female",
      ip_address: "145.45.46.213",
    },
    {
      id: 7,
      first_name: "Pansy",
      last_name: "Kloster",
      email: "pkloster6@salon.com",
      gender: "Female",
      ip_address: "64.119.167.192",
    },
    {
      id: 8,
      first_name: "Randi",
      last_name: "Soldan",
      email: "rsoldan7@cyberchimps.com",
      gender: "Male",
      ip_address: "234.36.197.54",
    },
    {
      id: 9,
      first_name: "Edvard",
      last_name: "McNalley",
      email: "emcnalley8@shareasale.com",
      gender: "Male",
      ip_address: "232.195.205.70",
    },
    {
      id: 10,
      first_name: "Kippie",
      last_name: "Camilleri",
      email: "kcamilleri9@whitehouse.gov",
      gender: "Genderfluid",
      ip_address: "31.10.12.1",
    },
  ];

  return (
    <div className="grid grid-cols-4 h-full w-full bg-blue-300">
      {myData.map((data) => (
        <div className="qr__card flex flex-col text-center p-5 w-8/12 h-6/6 bg-slate-50 rounded-xl m-10">
          <img src={qrCode} alt="qrcode" className="rounded-xl mb-4"></img>
          <div className="qr__card__text"></div>
          <p className=" my-2 px-4 font-bold ">
            {data.first_name} {data.last_name}
          </p>
          <p className="px-4 text-slate-400 text-xs ">{data.gender}</p>
        </div>
      ))}
    </div>
  );
}
