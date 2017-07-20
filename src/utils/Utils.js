const appendZero = n => n.toLocaleString({}, {minimumIntegerDigits: 2});

export default function formatTime(time) {
    const mSec = appendZero(time % 100),
        sec = appendZero(parseInt((time / 100) % 60), 10),
        min = appendZero(parseInt((time / 6000) % 60), 10),
        hour = appendZero(parseInt(time / 360000), 10);
    return `${hour}:${min}:${sec}.${mSec}`;
}
