const { AndarBaharGameTimer } = require("../models/Timer.model");

const AndarBaharTimerFunction = async () => {
  // MainCardGenerator()
  let Interval;
  const pauseTimer = () => {
    clearInterval(Interval);
    setTimeout(() => {
      timer();
    }, 5000);
  };

  try {
    let value = 30;
    function timer() {
      Interval = setInterval(async () => {

        let existingDocument = await AndarBaharGameTimer.findById("ABGame");
        // console.log("hj",existingDocument);
        
        // Update the existing document or create a new one
        if (!existingDocument) {
          // If the document with ID 'val1' doesn't exist, create a new one
          const newDocument = new AndarBaharGameTimer({
            value,
            _id: "ABGame",
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

module.exports = { AndarBaharTimerFunction };
