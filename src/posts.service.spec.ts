import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    // реализуйте тест-кейс
    expect(postsService.create(post)).toMatchObject({
      id: expect.any(String),
      text: post.text,
      date: expect.any(String),
    });
  });

  it('should find a post', () => {
    // реализуйте тест-кейс
    const currentPost = postsService.create(post);
    const foundPost = postsService.find(currentPost.id);
    expect(foundPost).toMatchObject({
      id: currentPost.id,
      text: post.text,
      date: expect.any(String),
    });
  });
});