import React, { useRef } from 'react';
import styled from 'styled-components';
import Quill from 'quill';
import { useEffect } from 'react';
import 'quill/dist/quill.bubble.css';

const EditorBlock = styled.div`
	width: 100%;
	padding: 80px 0 20px;
`;

const TitleInput = styled.input`
	width: 100%;
	border: none;
	outline: none;
	border-bottom: 1px solid #d8d8d8;
	font-size: 30px;
	padding: 10px 0;
	font-weight: bold;
`;

const QuillBlock = styled.div`
	margin: 20px 0;

	.ql-editor {
		padding: 0;
		height: 450px;
		line-height: 1.5;
		font-size: 16px;
	}

	.ql-editor.ql-blank::before {
		left: 0px;
	}
`;

const Editor = ({ title, body, onChange }) => {
	const quillElement = useRef(null);
	const quillInstance = useRef(null);

	useEffect(() => {
		quillInstance.current = new Quill(quillElement.current, {
			theme: 'bubble',
			placeholder: '내용을 입력하세요...',
			modules: {
				toolbar: [
					[{ header: '1' }, { header: '2' }],
					['bold', 'italic', 'underline', 'strike'],
					[{ list: 'ordered' }, { list: 'bullet' }],
					['blockquot', 'code-block', 'link', 'image'],
				],
			},
		});

		const quill = quillInstance.current;
		quill.on('text-change', (delta, oldDelta, source) => {
			if (source === 'user') {
				onChange({ key: 'body', value: quill.root.innerHTML });
			}
		});
	}, [onChange]);

	const mounted = useRef(false);
	useEffect(() => {
		if (mounted.current) return;
		mounted.current = true;
		quillInstance.current.root.innerHTML = body;
	}, [body]);

	const onChangeTitle = (e) => {
		onChange({ key: 'title', value: e.target.value });
	};

	return (
		<EditorBlock>
			<TitleInput
				type="text"
				placeholder="제목을 입력하세요."
				name="title"
				onChange={onChangeTitle}
				value={title}
			/>
			<QuillBlock ref={quillElement} />
		</EditorBlock>
	);
};

export default Editor;
