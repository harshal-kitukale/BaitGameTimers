const { AndarBaharGameTimer } = require("../models/Timer.model");

const AndarBaharTimerFunction = async () => {
  // let Interval;
  const pauseTimer = (Interval) => {
    clearInterval(Interval);
    setTimeout(timer, 5000);
  };
  const timer = () => {
    let value = 30;

    let Interval = setInterval(async () => {
      try {
        let existingDocument = await AndarBaharGameTimer.findById("ABGame");
        console.log("t", existingDocument);

        // Update the existing document or create a new one
        if (!existingDocument) {
          const newDocument = new AndarBaharGameTimer({
            value,
            _id: "ABGame",
          });
          await newDocument.save();
        } else {
          existingDocument.value = value;
          await existingDocument.save();
        }

        value--;

        if (value < 0) {
          pauseTimer(Interval);
          clearInterval(Interval);
          return;
        }
      } catch (error) {
        console.error(error);
      }
    }, 1000);
  };

  timer();
};
module.exports = { AndarBaharTimerFunction };
