const { DragonTigerGameTimer } = require("../models/Timer.model");

const DragonTigerTimerFunction = async () => {
  let Interval;
  const pauseTimer = (Interval) => {
    clearInterval(Interval);
    setTimeout(timer, 5000);
  };

  const timer = async () => {
    let value = 30;

    Interval = setInterval(async () => {
      try {
        value--;
        if (value < 0) {
          pauseTimer(Interval);
          // value = 30;
          clearInterval(Interval);
        }

        let existingDocument = await DragonTigerGameTimer.findById("DTGame");
        console.log("DT", existingDocument);

        // Update the existing document or create a new one
        if (!existingDocument) {
          const newDocument = new DragonTigerGameTimer({
            value,
            _id: "DTGame",
          });
          await newDocument.save();
        } else {
          existingDocument.value = value;
          await existingDocument.save();
        }
       
      } catch (error) {
        console.error(error);
      }
    }, 1000);
  };

  timer();
};

module.exports = { DragonTigerTimerFunction };
