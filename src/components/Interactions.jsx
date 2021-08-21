import { HStack, Box, Button } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';

export default ({ data = {}, onLikeDislikeClick }) => {
	const [liked, setLiked] = useState(0);

	const [disliked, setDisliked] = useState(0);

	const onLikeClick = useCallback(() => setLiked((prev) => prev + 1), []);

	const onDislikeClick = useCallback(() => setDisliked((prev) => prev + 1), []);

	useEffect(() => {
		setLiked(data.liked);
		setDisliked(data.disliked);
	}, [data]);

	useEffect(() => {
		if ((liked !== 0 && liked !== data.liked) || (disliked !== 0 && disliked !== data.disliked)) {
			onLikeDislikeClick({ liked: liked - data.liked, disliked: disliked - data.disliked });
		}
	}, [liked, disliked, data.liked, data.disliked, onLikeDislikeClick]);

	return (
		<HStack spacing={5} onClick={(e) => e.stopPropagation()}>
			<Box>
				<Button leftIcon={<AiFillLike />} onClick={onLikeClick}>
					{liked}
				</Button>
			</Box>

			<Box>
				<Button leftIcon={<AiFillDislike />} onClick={onDislikeClick}>
					{disliked}
				</Button>
			</Box>
		</HStack>
	);
};
