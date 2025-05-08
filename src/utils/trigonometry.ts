// Trigonometry calculation utilities
export const degreesToRadians = (degrees: number): number => (degrees * Math.PI) / 180;
export const radiansToDegrees = (radians: number): number => (radians * 180) / Math.PI;

export const calculateSin = (angle: number, isRadians: boolean = false): number => {
  const radians = isRadians ? angle : degreesToRadians(angle);
  return Math.sin(radians);
};

export const calculateCos = (angle: number, isRadians: boolean = false): number => {
  const radians = isRadians ? angle : degreesToRadians(angle);
  return Math.cos(radians);
};

export const calculateTan = (angle: number, isRadians: boolean = false): number => {
  const radians = isRadians ? angle : degreesToRadians(angle);
  return Math.tan(radians);
};

export const calculateArcSin = (value: number, returnRadians: boolean = false): number => {
  const radians = Math.asin(value);
  return returnRadians ? radians : radiansToDegrees(radians);
};

export const calculateArcCos = (value: number, returnRadians: boolean = false): number => {
  const radians = Math.acos(value);
  return returnRadians ? radians : radiansToDegrees(radians);
};

export const calculateArcTan = (value: number, returnRadians: boolean = false): number => {
  const radians = Math.atan(value);
  return returnRadians ? radians : radiansToDegrees(radians);
};