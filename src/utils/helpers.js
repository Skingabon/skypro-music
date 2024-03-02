
export function timeFormat(time) {
    const realTime = time / 60;
    const sec = Math.round(time % 60);
  
    return `${Math.round(realTime)}: ${String(sec).length < 2 ? "0" + sec : sec}`;
  }