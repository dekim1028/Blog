import React, { useEffect } from 'react';
import PostView from '../../components/view/PostView';
import { useSelector, useDispatch } from 'react-redux';
import { viewPost } from '../../modules/view';
import { withRouter } from 'react-router-dom';
import ViewActionButton from '../../components/view/ViewActionButton';
import { setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/posts';

const PostViewContainer = ({ match, history }) => {
	const { postId } = match.params;
	const dispatch = useDispatch();
	const { post, error, loading } = useSelector(({ view, loading }) => ({
		post: view.post,
		error: view.error,
		loading: loading['view/VIEW_POST'],
	}));

	useEffect(() => {
		dispatch(viewPost(postId));
	}, [dispatch, postId]);

	const onUpdate = () => {
		dispatch(setOriginalPost(post));
		history.push('/write');
	};

	const onRemove = async () => {
		try {
			await removePost(postId);
			alert('포스트가 삭제되었습니다.');
			history.push('/');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<PostView
			post={post}
			error={error}
			loading={loading}
			actionButton={
				<ViewActionButton onUpdate={onUpdate} onRemove={onRemove} />
			}
		/>
	);
};

export default withRouter(PostViewContainer);
