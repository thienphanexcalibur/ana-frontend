import { ArrowBackIcon } from '@chakra-ui/icons';
import { HStack, Text } from '@chakra-ui/layout';
import React from 'react';

export default function BreadCrumb({ onClick }) {
	return (
		<HStack onClick={onClick} _hover={{ textDecor: 'underline' }}>
			<ArrowBackIcon fontSize="lg" />
			<Text fontSize="sm" fontWeight="semibold">
				Back
			</Text>
		</HStack>
	);
}
