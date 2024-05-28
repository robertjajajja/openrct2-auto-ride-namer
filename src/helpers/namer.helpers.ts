import { generateName } from './name-generator.helpers';

export const namer = () => {
  context.subscribe('interval.day', () => {
    console.log('A day has passed');
    const { rides } = map;
    rides.forEach((ride: Ride) => {
      switch (ride.classification) {
        case 'ride':
          {
            const newName = generateName();
            console.log(`${ride.name} => ${newName}`);
            ride.name = newName;
          }
          break;
        case 'stall':
        case 'facility':
          break;
      }
    });
  });
};
