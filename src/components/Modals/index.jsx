import { useContext, useEffect } from 'react';
import { AppContext } from '@/context';
import { TOGGLE_MODAL } from '@/actions';
import ModalLogin from './ModalLogin';
import { MODAL_LOGIN } from './constants';

export default () => {
	const { state, dispatch } = useContext(AppContext);

	return (
		<>
			<ModalLogin
				isOpen={state.modals[MODAL_LOGIN]}
				onClose={() =>
					dispatch(
						TOGGLE_MODAL({
							type: MODAL_LOGIN,
							value: false
						})
					)
				}
			/>
		</>
	);
};
