import Rosa from "./assets/rosa.webp";
import Hojas from "./assets/hojas.webp";
import Hojas2 from "./assets/hojas2.webp";
import Marco2 from "./assets/marco2.webp";
import Marco1 from "./assets/marco1.webp";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import { LuTimer } from "react-icons/lu";
import { MdOutlinePlace } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import './particles';
import { FaMinus } from "react-icons/fa";
import { colors } from "./constans";
import { useEffect, useRef, useState } from "react";
import music from './assets/music.mp3'
import { MdMarkEmailUnread } from "react-icons/md";


const App = () => {
  const [amount, setAmount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isSobre, setIsSobre] = useState(true);
  const [names, setNames] = useState<string[]>([]);


  const MAX_GUEST = 2;


  useEffect(() => {
    const audio = audioRef.current;
    const iniciarAudio = () => {
      if (audio) {
        audio.play()
          .then(() => {
            console.log("Audio reproduciéndose");
            removerEventos();
          })
          .catch((error) => {
            console.log("El navegador bloqueó el autoplay basado en mouse:", error);
          });
      }
    };

    const removerEventos = () => {
      window.removeEventListener("mousemove", iniciarAudio);
      window.removeEventListener("touchstart", iniciarAudio);
      window.removeEventListener("touchmove", iniciarAudio);
    };

    window.addEventListener("mousemove", iniciarAudio);
    window.addEventListener("touchstart", iniciarAudio);
    window.addEventListener("touchmove", iniciarAudio);

    return () => removerEventos();
  }, []);

  useEffect(() => {
    setNames((names) => {
      if (amount > names.length) {
        const newNames = Array(amount - names.length).fill('');
        return [...names, ...newNames];
      } else {
        return names.slice(0, amount);
      }
    });
  }, [amount]);


  function addGuest() {
    if (amount < MAX_GUEST) {
      const newAmount = amount + 1;
      setAmount(newAmount);
    } else {
      console.log(`Limit guess reached ${MAX_GUEST}`);
      alert(`Solo puedes agregar ${MAX_GUEST} invitados`);
    }
  }

  function removeGuest() {
    if (amount > 1) {
      const newAmount = amount - 1;
      setAmount(newAmount);
    } else {
      console.log(`Ya no puedes quitar mas, tienes que confirmar al menos 1`)
      alert('Tienes que confirmar al menos 1');
    }
  }

  const handleChangeName = (index: number, value: any) => {
    setNames((names) => {
      const newNames = [...names];
      newNames[index] = value;
      return newNames;
    });
  }

  async function sendData(e: React.FormEvent) {
    e.preventDefault();
    const data = names;

    console.log("Datos a enviar:", data);

    try {
      setOpenModal(true);
      const payload = JSON.stringify(data);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwd5eCu9z0ztfS2nSYcjNTn4Q8mZXepWGZOSu2XkBhK2a4rzIc30GgY2GLjIKpZtMAUUA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: payload,
        }
      );

      const res = await response.json();
      console.log("Google sheets response:", res);

      if (res.result === "success") {
        setOpenModal(false);
        setIsOpen(true);
      }

      return res;
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }

  return (
    <div className="bg-red-100 flex flex-row flex-wrap items-center justify-center h-full w-full gap-2 no-scrollbar overflow-y-auto">
      <div className="hidden w-20 h-20 fixed z-100 left-0 mb-4 ml-4 rounded-full bottom-0 bg-white shadow-lg">
        <audio loop controls src={music} ref={audioRef} />
      </div>
      <div className="fixed z-20 w-dvw top-0 right-0 left-0 ">
        <div className="absolute top-0 z-10 w-dvw h-20 ">
          <div className="flex justify-center ">
            <div className="relative   w-20 top-10 animated-float">
              <img src={Rosa} alt="Rosa" className="" />
            </div>
            <div className="relative  animate-sway w-32">
              <img src={Rosa} alt="Rosa grande" className="" />
            </div>
            <div className="relative w-20 top-15 animate-float">
              <img src={Rosa} alt="Rosa " className="" />
            </div>
            <div className="absolute w-20 top-5 animate-float">
              <img src={Rosa} alt="Rosa " className="" />
            </div>
            <div className="relative  animate-sway w-40">
              <img src={Rosa} alt="Rosa grande" className="" />
            </div>
            <div className="relative w-20 top-17.5 animate-float">
              <img src={Rosa} alt="Rosa" className="" />
            </div>

            <div className="relative  animate-sway w-32">
              <img src={Rosa} alt="Rosa grande" className="" />
            </div>
            <div className="relative w-20 animate-float">
              <img src={Rosa} alt="Rosa" className="" />
            </div>
          </div>
          <div className="absolute -z-50  top-0 left-0 right-0 animate-float">
            <div className="flex items-center justify-center">
              <div className=" w-47.5 rotate-10">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-40 rotate-10">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-40 rotate-10">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-40 rotate-260">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-30 rotate-260">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-47.5 rotate-260">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
            </div>
          </div>
          <div className="absolute -z-50  -bg-conic-210 -top-15 left-0 right-0 rotate-180 animate-float">
            <div className="flex items-center justify-center">
              <div className=" w-47.5 rotate-10">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-30 rotate-10">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-30 rotate-10">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-40 rotate-260">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-30 rotate-260">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-47.5 rotate-260">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 z-20 inset-x-0 w-dvw right-0 left-0 rotate-180">
        <div className="absolute top-0 z-10 w-dvw h-20">
          <div className="flex justify-center ">
            <div className="relative   w-20 top-10 animate-float">
              <img src={Rosa} alt="Rosa" className="" />
            </div>
            <div className="relative  animate-sway w-32">
              <img src={Rosa} alt="Rosa grande" className="" />
            </div>
            <div className="relative w-20 top-15 animate-float">
              <img src={Rosa} alt="Rosa " className="" />
            </div>
            <div className="absolute w-20 top-5 animate-float">
              <img src={Rosa} alt="Rosa " className="" />
            </div>
            <div className="relative  animate-sway w-40">
              <img src={Rosa} alt="Rosa grande" className="" />
            </div>
            <div className="relative w-20 top-17.5 animate-float">
              <img src={Rosa} alt="Rosa" className="" />
            </div>

            <div className="relative  animate-sway w-32">
              <img src={Rosa} alt="Rosa grande" className="" />
            </div>
            <div className="relative w-20 animate-float">
              <img src={Rosa} alt="Rosa" className="" />
            </div>
          </div>
          <div className="absolute -z-50  top-0 left-0 right-0 animate-float">
            <div className="flex items-center justify-center">
              <div className=" w-47.5 rotate-10">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-30 rotate-10">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-40 rotate-10">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-40 rotate-10">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-30 rotate-10">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-47.5 rotate-10">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
            </div>
          </div>
          <div className="absolute -z-50  -top-15 left-0 right-0 rotate-180 animate-float">
            <div className="flex items-center justify-center">
              <div className=" w-47.5 rotate-10">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-30 rotate-10">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-40 rotate-10">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-40 rotate-260">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-40 rotate-260">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-47.5 rotate-260">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-50 flex flex-col items-center justify-start pt-50 w-dvw   sm:w-150  min-h-dvh rounded-lg p-4">

        <h2 className=" -m-30 font-luxurious text-[70px] sm:text-[90px]  bg-linear-to-r from-yellow-600 via-yellow-500 to-yellow-600 inline-block text-transparent bg-clip-text decoration-red-800 border-b-yellow-900 [-webkit-text-stroke:1px_yellow-900] px-2">
          Celebrando
        </h2>
        <div className="flex items-center flex-row mt-20 max-h-30">
          <div className="w-15">
            <img src={Hojas2} className="animate-float" />
          </div>
          <h2 className="text-[120px] sm:text-[150px]  font-imperial bg-linear-to-r from-yellow-500 via-yellow-400 to-yellow-600 inline-block text-transparent bg-clip-text decoration-red-800 border-b-yellow-900 [-webkit-text-stroke:1px_yellow-900] px-4" >80</h2>
          <p className="text-5xl sm:text-7xl font-imperial text-red-800">años</p>
          <div className="w-15 scale-x-[-1]">
            <img src={Hojas2} className="animate-float" />
          </div>
        </div>
        <p className="my-2 text-center font-LibreBaskerville sm:text-lg text-sm  bg-linear-to-r from-red-900 via-red-600 to-red-900 inline-block text-transparent bg-clip-text">
          Ocho décadas no se cumplen todos los días; son ochenta años de amor incondicional, enseñanzas, risas y de ser el pilar fundamental de nuestra familia. <br /><br />  Como sus hijos, no hay alegría más grande para nosotros que verla llegar a este momento rodeada de salud y de las personas que más aprecia.
        </p>


        <div className="flex flex-col items-center justify-center">
          <img src={Marco2} alt="" />
          <div className="flex flex-col items-center">
            <h4 className="text-4xl text-center font-imperial font-bold  bg-linear-to-r from-red-900 via-red-600 to-red-900 inline-block text-transparent bg-clip-text">Por eso, queremos invitarlos a celebrar</h4>
            <h3 className="text-xl text-center font-LibreBaskerville bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-500 inline-block text-transparent bg-clip-text ">junto a nosotros este hermoso día en su vida.</h3>
          </div>
          <img src={Marco2} alt="" className="rotate-180" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-dvw  sm:w-150 min-h-dvh bg-red-50 rounded-lg shadow-lg p-4">
        <div className="flex flex-col">
          <img src={Marco1} />
          <div className="flex flex-row items-center justify-center">
            <FaCalendarCheck size={24} color={colors.redBase} />
            <div className="flex flex-row items-center">
              <h2 className="font-LibreBaskerville text-2xl p-4 bg-linear-to-r from-red-900 via-red-800 to-red-900 inline-block text-transparent bg-clip-text">12</h2>
              <h2 className="font-LibreBaskerville text-xl bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-500 inline-block text-transparent bg-clip-text ">de Septiembre</h2>
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <LuTimer size={24} color={colors.redBase} />
          <div className="flex flex-row items-center justify-center">
            <p className="font-LibreBaskerville text-xl pr-2 bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-500 inline-block text-transparent bg-clip-text">A partir de las</p>
            <h2 className="font-LibreBaskerville text-xl bg-linear-to-r from-red-900 via-red-800 to-red-900 inline-block text-transparent bg-clip-text">2:00 PM</h2>
          </div>
        </div>
        <img src={Marco1} className="rotate-180" />
        <div className="my-2">
          <div className="flex flex-row items-center justify-center py-2">
            <MdOutlinePlace size={36} color={colors.redBase} />
            <h4 className="flex flex-wrap font-LibreBaskerville text-lg bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-500 text-transparent bg-clip-text">Salón La Galera Colón Número 613, Centro.</h4>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6414.831827225741!2d-96.72515050532492!3d17.058861966751486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c7224652c53fe5%3A0xc1fbd8aeeff449cb!2sLA%20GALERA!5e0!3m2!1ses-419!2smx!4v1786261138739!5m2!1ses-419!2smx" className="rounded-xl w-dvw sm:w-150 h-75" loading="lazy"></iframe>
        </div>
      </div>

      <div className="flex flex-col items-center justify-start pt-10 w-dvw sm:w-150 min-h-dvh bg-red-50 rounded-lg shadow-lg px-4">
        <h3 className="font-LibreBaskerville text-4xl bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-500 inline-block text-transparent bg-clip-text py-2">Asistencia</h3>

        <p className="my-2 text-center font-LibreBaskerville text-lg">Tu presencia es muy importante para nosotros. Favor de confirmar tu asistencia <b>antes del 01 de Septiembre de 2026.</b></p>

        <div className="bg-white shadow-2xl my-4 p-4 flex flex-col rounded-sm w-full sm:w-100dvw">
          <form className="" onSubmit={sendData}>
            <p className="text-[22px] font-medium py-4bolder text-center">
              {
                MAX_GUEST > 1 ? (
                  `Tienes ${MAX_GUEST} pases disponibles`
                ) : (
                  `Tienes ${MAX_GUEST} pase disponible`
                )
              }
            </p>
            <div className="flex flex-col py-4 justify-between">
              {
                MAX_GUEST > 1 ? (
                  <label htmlFor="numGuest" className="font-googleSans text-lg py-4">¿Cuantas personas deseas confirmar?</label>
                ) : ''
              }
              <div className="flex justify-between py-4 gap-2">
                <input type="text" id="numGuest" className="w-30 bg-white rounded-sm px-2 py-4 text-lg text-center text-gray-900 placeholder:text-gray-900 sm:text-sm/6 border border-blue-600"
                  value={amount}
                  readOnly
                />
                <button
                  onClick={removeGuest}
                  type="button"
                  className="w-full px-2 py-4 flex justify-center items-center  text-xl text-red-500 font-medium rounded-sm hover:bg-red-200 focus:outline-none ring focus:ring-red-500 focus:ring-offset-2 transition duration-200">
                  <span className="px-2"><FaMinus size={24} /></span>
                  Quitar
                </button>
                <button
                  onClick={addGuest}
                  type="button"
                  className="w-full px-2 py-4 flex justify-center items-center  text-xl text-blue-500 font-medium rounded-sm hover:bg-blue-200 focus:outline-none ring focus:ring-blue-500 focus:ring-offset-2 transition duration-200">
                  <span className="px-2"><FaPlus size={24} /></span>
                  Agregar
                </button>
              </div>
              <div className="">
                {
                  names.map((name, index) => (
                    <input key={index} type="text" value={name} placeholder={`Nombre del invitado ${index + 1}`}
                      onChange={(e) => handleChangeName(index, e.target.value)}
                      required
                      className="bg-white rounded-sm block w-full grow my-4 py-3 pl-1 text-gray-900 placeholder:text-gray-900 border border-blue-600" />
                  ))
                }

              </div>
              <button
                type="submit"
                className="mt-4 px-8 py-4 bg-blue-600 text-xl text-white font-medium rounded-lg shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200">
                Confirmar asistencia
              </button>
              <div className="h-8">

              </div>
            </div>
          </form>

        </div>

      </div>
      <div id="tsparticles" className="absolute"></div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 bg-opacity-50 p-4">
          <div className="bg-white rounded-sm max-w-md w-full p-6 shadow-2xl transform transition-all">
            <h3 className="font-googleSans font-bold text-gray-900 text-xl mb-2 text-center">Tus pases han sido registrados</h3>
            <div className="flex flex-row justify-center items-center">
              <span className="mr-2"><FaCheck size={18} color="#155dfc" /> </span>
              <p className="my-8 text-xl">{
                `Haz confirmado ${amount} pases.`
              }
              </p>
            </div>
            <button
              type="button"
              onClick={() => { setIsOpen(false), setAmount(1) }}
              className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-xl font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none sm:text-lg transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 bg-opacity-50 p-4">
          <div className="animate-spin">
            <FaSpinner size={36} color="#155dfc" />
          </div>
        </div>
      )}
      {isSobre && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 bg-opacity-50 p-4">
          <div className="w-full flex flex-row justify-center items-center animate-pulse">

            <button type="button" onClick={() => { setIsSobre(false) }} className="flex px-6 rounded-lg py-4 justify-center items-center bg-pink-400 border border-transparent shadow-sm hover:bg-pink-700 focus:outline-none transition">
              <span className="pr-4"><MdMarkEmailUnread size={36} color="white" /></span>
              <p className="text-xl text-white font-bold">Abrir invitación</p>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App;