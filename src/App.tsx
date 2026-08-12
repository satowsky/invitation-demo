import Rosa from "./assets/rosa.webp";
import Hojas from "./assets/hojas.webp";
import Hojas2 from "./assets/hojas2.webp";
import Marco2 from "./assets/marco2.webp";
import Marco1 from "./assets/marco1.webp";
import { FaCalendarCheck } from "react-icons/fa";
import { LuTimer } from "react-icons/lu";
import { MdOutlinePlace } from "react-icons/md";
import './particles'
import { colors } from "./constans";
import { useState } from "react";


const App = () => {
  const [amount, setAmount] = useState(1);
  const [names, setNames] = useState(['']);
  const [isOpen, setIsOpen] = useState(false);

  const MAX_GUEST = 4;

  const handleAmount = (e: any) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);

    if (value >= 1 && value <= MAX_GUEST) {
      setAmount(value);

      setNames((names) => {
        return Array.from({ length: value }, (_, index) => {
          return names[index] !== undefined ? names[index] : '';
        });
      });
    }
  };

  const handleChangeName = (index: number, value: any) => {
    setNames((names) => {
      const newArray = [...names];
      newArray[index] = value;
      return newArray;
    });
  }

  async function sendData(e: React.FormEvent) {
    e.preventDefault();

    // 1. Verificación en consola para confirmar qué se está enviando realmente
    console.log("Datos a enviar:", names);

    if (!names || names.length === 0) {
      console.error("El arreglo de nombres está vacío. No se enviará la petición.");
      return;
    }

    try {
      const payload = JSON.stringify(names);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwWa4adkajaJ7CdJsd4BtasB-F7h5jb-XfwmydENaSLN4BW-TUKMXh37oqiPmMXv7pnuA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: payload,
        }
      );

      const resultado = await response.json();
      console.log("Respuesta de Google Sheets:", resultado);

      if (resultado.result === "success") {
        setIsOpen(true);
      }

      return resultado;
    } catch (error) {
      console.error("Error enviando datos:", error);
    }
  }

  return (
    <div className="bg-red-100 flex flex-row flex-wrap items-center justify-center min-h-dvh w-full gap-2 no-scrollbar overflow-y-auto">
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
              <div className=" w-30 otate-10">
                <img src={Hojas} alt="Hojas" className="" />
              </div>
              <div className=" w-40 otate-10">
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
        <h2 className="-m-30 font-luxurious text-[70px] sm:text-[90px]  bg-linear-to-r from-yellow-600 via-yellow-500 to-yellow-600 inline-block text-transparent bg-clip-text decoration-red-800 border-b-yellow-900 [-webkit-text-stroke:1px_yellow-900] px-2">
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

        <p className="my-2 text-center text-lg">
          Indica el número de pases, seguido de los nombres completos de los invitados. Podrás registrar un máximo de cuatro invitados*
        </p>

        <div className="bg-white shadow-2xl my-4 p-4  rounded-sm w-full sm:w-100dvw">
          <div className="flex flex-row justify-between items-center text-lg">
            <label htmlFor="numguest" className="font-googleSans">Número de pases</label>
            <input type="number" name="numguest" min={1} max={MAX_GUEST} className="bg-white rounded-sm w-40 block py-1.5 pr-3 pl-1 text-sm text-center text-gray-900 placeholder:text-gray-900 sm:text-sm/6 border border-blue-600"
              value={amount}
              onChange={handleAmount}
              onFocus={(e) => e.target.select()}
            />
          </div>
          <form className="" onSubmit={sendData}>
            <div className="flex flex-col">
              <div>
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
                className="px-8 py-2 bg-blue-600 text-xl text-white font-medium rounded-lg shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200">
                Confirmar asistencia
              </button>
            </div>
          </form>

        </div>

      </div>
      <div id="tsparticles" className="absolute"></div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 bg-opacity-50 p-4">
          <div className="bg-white rounded-sm max-w-md w-full p-6 shadow-2xl transform transition-all">
            <h3 className="text-xl font-googleSans font-bold text-gray-900 mb-2 text-center">Tus pases han sido registrados</h3>
            <div className="my-8">
              {
                names.map((name: string) => (
                  <p key={name} className="my-2  text-xl border border-gray-600">{name}</p>
                ))
              }

            </div>
            <button
              type="button"
              onClick={() => { setIsOpen(false), setNames(['']), setAmount(1) }} // Cierra el modal al hacer clic
              className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-xl font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none sm:text-lg transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App;