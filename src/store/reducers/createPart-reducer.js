
const initialState = { createPart: [
  {
    'part_id': '',
    'part_desc': '',
    'part_sub': '',
    'part_src': '',
    'part_mfgnum': '',
    'part_price': '',
    'part_category': '',
    'part_location': '',
    'part_count': '',
    'part_longlead': '',
    'part_notes': '',
  },
] };

// const initialState = { createPart: false };

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CREATEPART':
      return {...state, ...{createPart: payload}};

    default:
      return state;
  }
};