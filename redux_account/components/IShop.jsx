import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../state';

const IShop = () => {

    const dispatch = useDispatch();
    const balance = useSelector(state => state.amount);
    const { depositMoney, withDrawMoney} = bindActionCreators(actionCreators, dispatch);
    // This is code without bindActionCreators `onClick={() => (dispatch( actionCreators.depositMoney(100)))}`.

  return (

    <div className='my-4'>

      <h2 className="my-3 font-semibold text-2xl"> Deposit / WithDraw Your Money</h2>

      <button className='px-4 py-1 bg-blue-500 text-white text-xl font-bold  rounded-md' onClick={() => withDrawMoney(100)}> - </button>

        <span className='text-xl font-semibold mx-4'> Total Amount is: {balance} </span>

      <button className='px-4 py-1 bg-blue-500 text-white text-xl font-bold  rounded-md' onClick={() => depositMoney(100)}> + </button>
    </div>

  );
}

export default IShop;
