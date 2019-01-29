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
    part_count: Math.floor(Math.random() * 100),
    edit: <button onClick={() => this.setState({ filtered: [] })}>Edit</button>,
    delete: <button onClick={() => this.setState({ filtered: [] })}>Delete</button>,
    save: <button onClick={() => this.setState({ filtered: [] })}>Save</button>,
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
