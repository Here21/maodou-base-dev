export default {
  eventTmpCover(state = '', action) {
    switch (action.type) {
      case 'ADD_POST_COVER':
        return action.url;
      default:
        return state;
    }
  },
};
