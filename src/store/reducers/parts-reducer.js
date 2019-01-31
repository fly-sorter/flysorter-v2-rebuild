
const initialState = { parts: [
  {
    'part_id': '100001',
    'part_desc': 'Base',
    'part_sub': 'N',
    'part_src': 'Seattle Foundry',
    'part_mfgnum': 'BC-BASE-0400',
    'part_price': '$14.75',
    'part_category': 'Casting',
    'part_location': 'Warehouse',
    'part_count': '580',
    'part_longlead': 'Y',
    'part_notes': 'null',
  },
] };

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GETPARTS':
      return { ...state, ...{ parts: payload } };

    // case 'EDITPARTS':
    //   return initialState;

    case 'SAVEPARTS':
      console.log({...state}, '1st saveParts');
      console.log(payload.parts, '2nd payloadParts');
      return state ;

    default:
      return state;
  }
};