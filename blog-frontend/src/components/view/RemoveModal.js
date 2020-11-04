import React from 'react';
import Modal from '../common/Modal';

const RemoveModal = ({visible, onConfirm, onCancel}) => {
    return (
        <Modal
            visible={visible}
            titleText="포스트 삭제"
            contentText="포스트를 정말 삭제하시겠습니까?"
            confirmText="삭제"
            onCancel={onCancel}
            onConfirm={onConfirm}
        />
    );
};

export default RemoveModal;