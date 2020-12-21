import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const NoDataBlock = styled.div`
	text-align: center;
	padding: 200px 0;

	a {
		margin: 0 auto;
	}
`;

const NotifyBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 60px;
	font-weight: 200;
	margin: 15px 0;

	.bracket {
		margin: 0 20px;
	}

	.notifyTextBox {
		margin-top: 10px;

		.notifyText {
			font-size: 20px;
			margin: 0;
			font-weight: bold;
		}

		.notifyText:not(:first-child) {
			margin-top: 10px;
		}
	}
`;

const NoData = ({ showWriteButton }) => {
	return (
		<NoDataBlock>
			<NotifyBlock>
				<div className="bracket">{'{'}</div>
				<div className="notifyTextBox">
					<p className="notifyText">등록된 로그가 없습니다.</p>
					<p className="notifyText">오늘의 로그를 남겨보세요.</p>
				</div>
				<div className="bracket">{'}'}</div>
			</NotifyBlock>

			{showWriteButton && (
				<Button to="/write" width="200px">
					첫 기록 시작하기
				</Button>
			)}
		</NoDataBlock>
	);
};

export default NoData;
