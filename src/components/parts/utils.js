import React from 'react';
import Delete from '../delete/delete.js';
import EditPart from '../edit-part/edit-part.js';
import Save from '../save/save.js';
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
    // part_src: namor.generate({ words: 1, numbers: 0 }),
    part_id: Math.floor(Math.random() * 1000000),
    part_price: Math.floor(Math.random() * 100),
    part_count: Math.floor(Math.random() * 100),
    edit: <EditPart />,
    delete: <Delete />,
    save: <Save />,
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
