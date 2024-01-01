import React, {useState, useEffect} from 'react'

const CountDown = () => {
    const initialTime = {   hours: 5, minutes: 23, seconds: 11  };
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
    const intervalId = setInterval(() => {
        if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
        clearInterval(intervalId);
        // You can add logic here for what happens when the countdown reaches zero
        } else {
        updateTime();
        }
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount

    }, [time]);

    const updateTime = () => {
    if (time.minutes === 0 && time.seconds === 0) {
        setTime({
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59
        });
    } else if (time.seconds === 0) {
        setTime({
        hours: time.hours,
        minutes: time.minutes - 1,
        seconds: 59
        });
    } else {
        setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1
        });
    }
    };

  return (
    <>
      {`${time.hours}h ${time.minutes} min ${time.seconds}  sec`}
    </>
  )
}

export default CountDown
