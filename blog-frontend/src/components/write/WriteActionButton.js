import React from 'react';
import Button from '../common/Button';
import styled from 'styled-components';

const WriteActionButtonBlock = styled.div`
	display: flex;

	button + button {
		margin-left: 10px;
	}
`;

const WriteActionButton = ({ onPublish, onCancle, isEdit }) => {
	return (
		<WriteActionButtonBlock>
			<Button width="145px" onClick={onPublish}>
				포스트 {isEdit ? '수정' : '저장'}
			</Button>
			<Button color1 width="65px" onClick={onCancle}>
				취소
			</Button>
		</WriteActionButtonBlock>
	);
};

export default WriteActionButton;
