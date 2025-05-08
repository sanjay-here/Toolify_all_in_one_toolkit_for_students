// Geometry calculation utilities
export const calculateRectangleArea = (length: number, width: number): number => length * width;
export const calculateRectanglePerimeter = (length: number, width: number): number => 2 * (length + width);

export const calculateCircleArea = (radius: number): number => Math.PI * radius * radius;
export const calculateCircleCircumference = (radius: number): number => 2 * Math.PI * radius;

export const calculateTriangleArea = (base: number, height: number): number => (base * height) / 2;
export const calculateTrianglePerimeter = (a: number, b: number, c: number): number => a + b + c;

export const calculateCubeVolume = (side: number): number => Math.pow(side, 3);
export const calculateCubeSurfaceArea = (side: number): number => 6 * Math.pow(side, 2);

export const calculateSphereVolume = (radius: number): number => (4/3) * Math.PI * Math.pow(radius, 3);
export const calculateSphereSurfaceArea = (radius: number): number => 4 * Math.PI * Math.pow(radius, 2);