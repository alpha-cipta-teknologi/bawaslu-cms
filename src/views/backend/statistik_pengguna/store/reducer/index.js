// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: null,
  selected: null,
  loading: false,
  error: null,
  success: false,
  add: null,
  update: null
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA_STATISTIK_PENGGUNA':
      return { ...state, allData: action.data, params: action.params }
    case 'GET_DATA_STATISTIK_PENGGUNA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case 'GET_STATISTIK_PENGGUNA':
      return { ...state, selected: action.selected }
    case 'ADD_STATISTIK_PENGGUNA':
      return { ...state, add: action.data }
    case 'UPDATE_STATISTIK_PENGGUNA':
      return { ...state, update: action.data }
    case 'DELETE_STATISTIK_PENGGUNA':
      return { ...state }
    case 'RESET_STATISTIK_PENGGUNA':
      return {
        ...state,
        loading: false,
        error: null,
        success: false
      }
    case 'REQUEST_STATISTIK_PENGGUNA':
      return {
        ...state,
        loading: true
      }
    case 'SUCCESS_STATISTIK_PENGGUNA':
      return {
        ...state,
        loading: false,
        success: true
      }
    case 'ERROR_STATISTIK_PENGGUNA':
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return { ...state }
  }
}
export default reducers
