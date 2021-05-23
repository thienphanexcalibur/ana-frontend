import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, HStack, LinkBox, Text } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';

import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { IconButton } from '@chakra-ui/button';

// Sample card from Airbnb

export default function Post({ title, content, liked, disliked, _id }) {
	const postId = _id;
	return (
		<LinkBox as={Link} to={`/post/${postId}`}>
			<Box overflow="hidden">
				<Box p="6">
					<Box d="flex" alignItems="baseline">
						<Box
							color="gray.500"
							fontWeight="semibold"
							letterSpacing="wide"
							fontSize="xs"
							textTransform="uppercase"
							ml="2"
						/>
					</Box>

					<Text mt="1" fontWeight="semibold" as="h3" fontSize="xl" lineHeight="tight" isTruncated>
						{title}
					</Text>

					<Text isTruncated fontWeight="normal" color={useColorModeValue('gray.500')}>
						{content}
					</Text>

					<HStack>
						<Box>
							<IconButton variant="ghost" icon={<AiFillLike />} />
							<Text as="span" color="gray.600" fontSize="sm">
								{liked}
							</Text>
						</Box>

						<Box>
							<IconButton variant="ghost" icon={<AiFillDislike />} />
							<Text as="span" color="gray.600" fontSize="sm">
								{disliked}
							</Text>
						</Box>
					</HStack>
				</Box>
			</Box>
		</LinkBox>
	);
}
