export const meetingRoom = (intervals) => { 
  if (!intervals || intervals.length === 0) return true;

  // Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  let numOfRoom = 0;
  let j = 0;

  const startTimes = intervals.map(interval => interval[0]);
  const endTimes = intervals.map(interval => interval[1]);

  for (let i = 0; i < intervals.length; i++) {
    if(startTimes[i] < endTimes[j]) {
      numOfRoom++;
    } else {
      j = i
    }

    // Check for overlapping meetings

  }

  return true; // No overlapping meetings
}