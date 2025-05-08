// Physics conversion utilities
export const units = {
  force: {
    newton: 1,
    kilonewton: 1000,
    dyne: 0.00001,
    poundForce: 4.44822,
  },
  pressure: {
    pascal: 1,
    kilopascal: 1000,
    bar: 100000,
    atmosphere: 101325,
    psi: 6894.76,
  },
  energy: {
    joule: 1,
    kilojoule: 1000,
    calorie: 4.184,
    kilocalorie: 4184,
    electronvolt: 1.602176634e-19,
    kilowattHour: 3600000,
  },
  power: {
    watt: 1,
    kilowatt: 1000,
    horsepower: 745.7,
    megawatt: 1000000,
  }
} as const;

export type PhysicsCategory = keyof typeof units;
export type UnitType<T extends PhysicsCategory> = keyof typeof units[T];