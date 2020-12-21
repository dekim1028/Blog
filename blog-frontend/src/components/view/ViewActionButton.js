import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../common/Button';
import RemoveModal from './RemoveModal';

const ActionButtonBlock = styled.div`
	display: flex;
`;

const ViewButtonStyle = css`
	width: 50px;
	height: 25px;
	margin-right: 5px;
	font-size: 14px;
	font-weight: 500;
`;

const StyledButton1 = styled(Button)`
	${ViewButtonStyle}
`;

const StyledButton2 = styled(Button)`
	${ViewButtonStyle}

	background-color:#E6E6E6;
	color: gray;

	&:hover {
		background-color: #f2f2f2;
	}
`;

const ViewActionButton = ({ onUpdate, onRemove }) => {
	const [modalVisible, setModalVisible] = useState(false);

	const onRemoveClick = () => {
		setModalVisible(true);
	};

	const onCancel = () => {
		setModalVisible(false);
	};

	const onConfirm = () => {
		setModalVisible(false);
		onRemove();
	};

	return (
		<>
			<ActionButtonBlock>
				<StyledButton1 to="/">목록</StyledButton1>
				<StyledButton2 className="edit" onClick={onUpdate}>
					수정
				</StyledButton2>
				<StyledButton2 className="delete" onClick={onRemoveClick}>
					삭제
				</StyledButton2>
			</ActionButtonBlock>
			<RemoveModal
				visible={modalVisible}
				onCancel={onCancel}
				onConfirm={onConfirm}
			/>
		</>
	);
};

export default ViewActionButton;
