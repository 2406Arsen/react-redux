import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { addCountAction } from '../actions';


export function Counter() {
  const dispatch = useDispatch()
  const { count } = useSelector((state: RootState) => state.counterReducer)


  return (
    <div>
      <button onClick={() => dispatch(addCountAction(25))}>add count</button>

      <h1>{count}</h1>
    </div>
  );
}
