import { Badge, Box } from '@chakra-ui/layout';
import React from 'react';

// Sample card from Airbnb

export default function Post({ title, content, liked, disliked }) {
	return (
		<Box borderWidth="1px" borderRadius="lg" overflow="hidden">
			<Box p="6">
				<Box d="flex" alignItems="baseline">
					<Badge borderRadius="full" px="2" colorScheme="teal">
						New
					</Badge>
					<Box
						color="gray.500"
						fontWeight="semibold"
						letterSpacing="wide"
						fontSize="xs"
						textTransform="uppercase"
						ml="2"
					></Box>
				</Box>

				<Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
					{title}
				</Box>

				<Box>
					<Box as="span" color="gray.600" fontSize="sm">
						{liked}
					</Box>

					<Box as="span" color="gray.600" fontSize="sm">
						{disliked}
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

