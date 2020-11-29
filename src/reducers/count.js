import { INCREMENT, DECREMENT } from '../actions'

// 状態の初期値をオブジェクトとしてて定義
const initialState = { value: 0 }

// 渡せるようにexport
// 受け取ったアクションに対して
export default (store = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1}
    case DECREMENT:
      return { value: state.value - 1}
    default:
      return state
  }
}
