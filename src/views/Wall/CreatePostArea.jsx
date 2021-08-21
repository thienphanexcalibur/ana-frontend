import { memo, useContext } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { BsPencil } from 'react-icons/bs';
import { useDisclosure } from '@chakra-ui/hooks';
import isEmpty from 'lodash/isEmpty';
import { AppContext } from '@/context';
import { TOGGLE_MODAL } from '@/actions';
import { MODAL_LOGIN } from '@/components/Modals/constants';
import ModalWritePost from './ModalWritePost';

export default memo(() => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	const { state, dispatch } = useContext(AppContext);

	const openModalWritePost = () => {
		if (isEmpty(state.auth)) {
			dispatch(
				TOGGLE_MODAL({
					type: MODAL_LOGIN,
					value: true
				})
			);
			return;
		}
		onOpen();
	};

	return (
		<>
			<ModalWritePost isOpen={isOpen} onClose={onClose} />
			<InputGroup>
				<InputLeftElement children={<BsPencil />} />
				<Input variant="outline" onClick={openModalWritePost} placeholder="Start writing" />
			</InputGroup>
		</>
	);
});
