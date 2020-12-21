import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';

const ModalBackBlock = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 15% 0;
	background-color: rgba(255, 255, 255, 0.5); ;
`;

const ModalBlock = styled.div`
	box-shadow: 2px 2px 4px grey;
	width: 300px;
	margin: 0 auto;
	padding: 20px;
	background-color: white;
`;

const ModalTitle = styled.h1`
	margin: 0;
	margin-bottom: 15px;
	font-size: 20px;
`;

const ModalContent = styled.div``;

const ButtonBlock = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 15px;
`;

const ModalBtnStyle = css`
	width: 50px;
	height: 25px;
	margin-right: 5px;
	font-size: 14px;
	font-weight: 500;
`;

const CancelBtn = styled(Button)`
	${ModalBtnStyle}

	background-color:#E6E6E6;
	color: gray;

	&:hover {
		background-color: #f2f2f2;
	}
`;

const ConfirmBtn = styled(Button)`
	${ModalBtnStyle}
`;

const Modal = ({
	visible,
	titleText,
	contentText,
	cancelText = '취소',
	confirmText = '확인',
	onCancel,
	onConfirm,
}) => {
	if (!visible) return null;
	return (
		<ModalBackBlock>
			<ModalBlock>
				<ModalTitle>{titleText}</ModalTitle>
				<ModalContent>
					<div>{contentText}</div>
					<ButtonBlock>
						<CancelBtn onClick={onCancel}>{cancelText}</CancelBtn>
						<ConfirmBtn onClick={onConfirm}>{confirmText}</ConfirmBtn>
					</ButtonBlock>
				</ModalContent>
			</ModalBlock>
		</ModalBackBlock>
	);
};

export default Modal;
