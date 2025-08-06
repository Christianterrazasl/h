import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaArrowLeft } from "react-icons/fa6";
import flowerDeco from './assets/flower-deco.png';
import funkos from './assets/funkos.png';
import paperLamp from './assets/paper-lamp.png';

function App() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step <= 0) {
      setStep(0);
      return;
    }
    setStep((prev) => prev - 1);
  };


  return (
    <div className="relative w-full h-screen bg-purple-custom-3 text-3xl text-white text-center overflow-hidden">
      
        <motion.button
          className="absolute bottom-5 left-5 z-50 bg-purple-custom-2 rounded-xl p-3"
          onClick={(e) => {
            e.stopPropagation();
            handleBack();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 5.5 }}
        >
          <FaArrowLeft />
        </motion.button>
        <AnimatePresence>
        {step<=3 && <motion.img
          src={flowerDeco}
          alt="flower decoration"
          className="absolute bottom-0 right-1/4 w-1/2 filter invert translate-y-1/2"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          key={"down flower"}
          exit={{y:400}}

        />}

        {step<=3 && <motion.img
          src={flowerDeco}
          alt="flower decoration"
          className="absolute top-0 right-1/4 w-1/2 filter invert -translate-y-1/2 rotate-180"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          exit={{y:400}}
          key={"upper flower"}
        />}
        
        {step >= 1 && step<=3 && (
          <motion.img
            src={paperLamp}
            className="absolute bottom-2 right-2 w-1/4 h-auto"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            exit={{y:400}}
            key={"lamp"}
          />
        )}
        </AnimatePresence>

        {step == 0 && (
          <div
            className="w-full h-full p-5 flex flex-col items-center justify-center font-bold"
            onClick={handleNext}
            key={0}
          >
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              Hola Harumi,
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className=""
            >
              Quiero decirte algo hace tiempo.
            </motion.h1>

            <motion.h2
              className="mt-5 text-xl font-normal"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 }}
            >
              Pero primero hagamos algo, cuando termines de leer tocas la
              pantalla.
            </motion.h2>

            <motion.h2
              className="mt-5 text-xl font-normal"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 4.5 }}
            >
              igual te pongo este boton por si te pasas por apurada
            </motion.h2>
          </div>
        )}
        {step == 1 && (
          <div
            className="w-full h-full p-5 flex flex-col items-center justify-center font-bold"
            onClick={handleNext}
            key={1}
          >
            <motion.h2
              className="mt-5 text-xl font-normal"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Te dejo uno de estos para que te sintás en casa mira, que tipo
              considerado.
            </motion.h2>
          </div>
        )}
        {step == 2 && (
          <motion.div
            className="w-full h-full p-7 flex flex-col items-center justify-center font-normal text-start"
            onClick={handleNext}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={2}
          >
            <div className="text-xl space-y-3">
              <p>
                Es verdad que al principio no estaba seguro de que íbamos a
                encajar del todo,
              </p>
              <p>
                Pero este último mes se pasó volando, y cada día me vuelvo a dar
                cuenta de que sí.
              </p>
              <p>
                Por ahi dicen que lo mejor se hace esperar, y que todo pasa a su
                momento.
              </p>
              <p>
                Sea como sea, yo le agradezco al tiempo que llegaste a mi vida.
              </p>
            </div>
          </motion.div>
        )}

        {step == 3 && (
          <motion.div
            className="w-full h-full p-7 flex flex-col items-center justify-center font-normal text-start"
            onClick={handleNext}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={3}
          >
            <div className="text-xl space-y-3">
              <p>
                Es increíble cómo con el pasar de los días y en cosa de un mes,
                te convertiste en mi pensamiento constante, y estar con vos se
                convirtió en la parte favorita de mi día.
              </p>
              <p>
                Por ahi no te conozco totalmente todavía, pero con lo que sé, ya
                me gustaste demasiado.
              </p>
              <p>
                Siempre fui de la idea de que una pareja es un compañero de
                vida, y me encantaría que vos seas parte de la mía.
              </p>
              <p>
                No me voy a cansar de elegir las comidas por vos las veces que sea necesario.
              </p>
            </div>
          </motion.div>
        )}

        {step == 4 && (
          <motion.div
            className="w-full h-full p-7 flex flex-col items-center justify-center font-normal text-center gap-4"
            onClick={handleNext}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={4}
          >
            <h1 className="text-2xl">Aparte mira lo bien que nos vemos juntos, una locura. Estos funkos van a ir arriba de la tora de boda, estas avisada.</h1>
            <div className="border-3 border-purple-custom-2 rounded-3xl bg-[rgba(255,255,255,0.53)]">

            <img src={funkos} alt="funkos" className="w-full"/>
            </div>
          </motion.div>
        )}

        {step == 5 && (
          <motion.div
            className="w-full h-full p-7 flex flex-col items-center justify-center font-normal text-center gap-10"
            
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={5}
          >
            <h1 className="text-2xl">Cuando llegues hasta acá, te doy una pista de qué tenés que hacer</h1>
            <a href="https://wa.me/59176077700?text=Hola%2C%20ya%20salgo" className="p-4 bg-purple-custom-2 rounded-full text-xl text-purple-custom-3">Dale aca</a>
            
          </motion.div>
        )}
    </div>
  );
}

export default App;
