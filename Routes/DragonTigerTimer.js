const { DragonTigerGameTimer } = require("../models/Timer.model");


const DragonTigerTimerFunction = async () => {
  // MainCardGenerator()
  let Interval;
  const pauseTimer = () => {
    clearInterval(Interval);
    setTimeout(() => {
      timer();
    }, 5000);
  };

  try {
    function timer() {
      let value = 30;
      Interval = setInterval(async () => {

        let existingDocument = await DragonTigerGameTimer.findById("DTGame");
        console.log("DT",existingDocument);
        
        // Update the existing document or create a new one
        if (!existingDocument) {
          // If the document with ID 'val1' doesn't exist, create a new one
          const newDocument = new DragonTigerGameTimer({
            value,
            _id: "DTGame",
          });
          await newDocument.save();
        } else {
          existingDocument.value = value;
          // existingDocument.state = "Waiting";
          await existingDocument.save();
        }
        value = value - 1;

        if (value < 0) {
          pauseTimer();
          value = 30;
          clearInterval(Interval);
        }
        

      }, 1000);
    }
   
  } catch (error) {
    console.log(error.message);
  }
  timer();
};

module.exports = { DragonTigerTimerFunction };
