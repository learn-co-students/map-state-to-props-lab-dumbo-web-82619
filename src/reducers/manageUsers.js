const initialState = {
  users: [],
}

const manageUsers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      console.log('adding ', action.user)
      return {
        ...state,
        users: [...state.users, action.user]
      }
    default:
      return state
  }
}

export default manageUsers
