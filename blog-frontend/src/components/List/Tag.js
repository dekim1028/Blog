import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TagBlock = styled.div`
	margin-top: 5px;
`;

const TagItem = styled(Link)`
	padding-right: 10px;
	color: #045fb4;
	display: inline-block;
	word-break: break-all;
	&:hover {
		color: #0174df;
	}
`;

const Tag = ({ tags }) => {
	return (
		<TagBlock>
			{tags.map((tag) => (
				<TagItem key={tag} to={`/?tag=${tag}`}>
					#{tag}
				</TagItem>
			))}
		</TagBlock>
	);
};

export default Tag;
