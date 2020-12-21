import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import qs from 'qs';

const PaginationBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 0 60px;

	.nowPage {
		padding: 0 30px;
	}
`;

const Pagination = ({ lastPage, userid, tag, page }) => {
	const buildLink = (userid, tag, page) => {
		const query = qs.stringify({ tag, page });
		return userid ? `/@${userid}?${query}` : `/?${query}`;
	};

	if (lastPage === 0) return null;

	return (
		<PaginationBlock>
			<Button
				disabled={page === 1}
				to={page === 1 ? undefined : buildLink(userid, tag, page - 1)}
			>
				이전
			</Button>
			<div className="nowPage">
				{page} / {lastPage}
			</div>
			<Button
				disabled={page === lastPage}
				to={page === lastPage ? undefined : buildLink(userid, tag, page + 1)}
			>
				다음
			</Button>
		</PaginationBlock>
	);
};

export default Pagination;
