import React, { useEffect, useCallback } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';

import { addPosts } from '~/actions';
import { PostWrapper } from './PostWrapper';

export const Feed = () => {
  const mapState = useCallback(
    state => ({
      posts: Object.values(state.posts).sort(
        (a, b) => (a.timestamp - b.timestamp) * -1
      )
    }),
    []
  );
  const dispatch = useDispatch();
  const { posts } = useMappedState(mapState);

  useEffect(() => {
    let didCancel = false;

    const fetchPosts = async () => {
      const postsRef = window.firebase.database().ref('posts/');
      const posts = await postsRef.once('value');
      if (!didCancel) dispatch(addPosts(posts.val()));
    };

    fetchPosts();
    return () => {
      didCancel = true;
    };
  }, []);

  return (
    <div className="h-full w-full">
      <div className="px-8 py-6 max-w-500 m-auto">
        {posts &&
          posts.length > 0 &&
          posts.map((post, index) => <PostWrapper key={post.id} post={post} />)}
      </div>
    </div>
  );
};
