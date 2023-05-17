export const interpolateCircularMotionOverY = (snapshot, radius) => {
  const inputRange = [];
  const outputRange = [];
  for (var i = 0; i <= snapshot; ++i) {
    var value = i / snapshot;
    var move = Math.sin(value * Math.PI * 2) * radius;
    inputRange.push(value);
    outputRange.push(move);
  }
  return {inputRange, outputRange};
};

export const interpolateCircularMotionOverX = (snapshot, radius) => {
  const inputRange = [];
  const outputRange = [];
  for (var i = 0; i <= snapshot; ++i) {
    var value = i / snapshot;
    var move = -Math.cos(value * Math.PI * 2) * radius;
    inputRange.push(value);
    outputRange.push(move);
  }
  return {inputRange, outputRange};
};
