import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Heading, Text } from '@chakra-ui/layout';
import { memo } from 'react';

export default memo(() => (
	<Box>
		<Text
			fontSize="6xl"
			background="linear-gradient(90deg, rgba(0,91,240,1) 0%, rgba(0,223,216,1) 24%)"
			bgClip="text"
			fontWeight="extrabold"
			lineHeight="tight"
		>
			Wall.
		</Text>
		<Text as="h3" lineHeight="tight" pt={0} fontWeight="bold" color={useColorModeValue('gray.500')}>
			See what people are discussing 🗣
		</Text>
	</Box>
));
