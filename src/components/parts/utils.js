import React from 'react';
import namor from 'namor';
import './parts.css';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    part_desc: namor.generate({ words: 1, numbers: 0 }),
    part_sub: namor.generate({ words: 1, numbers: 0 }),
    part_id: Math.floor(Math.random() * 10000),
    part_price: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    part_src:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33 ? 'complicated' : 'single',
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson),
    };
  });
}
