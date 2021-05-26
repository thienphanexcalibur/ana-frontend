import React, { useContext, useEffect } from 'react';
import { AppContext } from '@/context';
import ModalLogin from './ModalLogin';
import { TOGGLE_MODAL } from '@/actions';
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
