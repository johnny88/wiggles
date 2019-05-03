export const initialState = {
  account: {},
  images: {},
  loading: false,
  selected: {}
};

export const constants = {
  ADD_ACCOUNT: 'add-account',
  ADD_IMAGES: 'add-images',
  LOADING: 'loading',
  NOT_LOADING: 'not-loading',
  ADD_SELECTED: 'add-selected',
  REMOVE_SELECTED: 'remove-selected',
  RESET_SELECTED: 'reset-selected'
};

export const reducer = (state, action) => {
  switch (action.type) {
    case constants.ADD_ACCOUNT: {
      return { ...state, account: action.payload };
    }
    case constants.ADD_IMAGES: {
      return { ...state, images: { ...state.images, ...action.payload } };
    }
    case constants.LOADING: {
      return { ...state, loading: true };
    }
    case constants.NOT_LOADING: {
      return { ...state, loading: false };
    }
    case constants.ADD_SELECTED: {
      return {
        ...state,
        selected: { ...state.selected, [action.payload]: true }
      };
    }
    case constants.REMOVE_SELECTED: {
      const { [action.payload]: _, ...rest } = state.selected;
      return {
        ...state,
        selected: { ...rest }
      };
    }
    case constants.RESET_SELECTED: {
      return {
        ...state,
        selected: initialState.selected
      };
    }
    default: {
      return state;
    }
  }
};
