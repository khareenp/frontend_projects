import qrCode from "./image-qr-code.png";
export default function App() {
  return (
    <div className="flex flex-col h-screen bg-blue-300 justify-center items-center">
      <div className="qr__card flex flex-col text-center p-5 w-1/6 h-3/6 bg-slate-50 rounded-xl ">
        <img src={qrCode} alt="qrcode" className="rounded-xl mb-4"></img>
        <div className="qr__card__text"></div>
        <p className=" my-2 px-4 font-bold  ">
          Improve your front-end skills by building projects
        </p>
        <p className="px-4 text-slate-400 text-xs ">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
