import partsMockData from '../../data/partsMockData.json';

export const getParts = () => {
  return {
    type: 'GETPARTS',
    payload: partsMockData,
  };
};