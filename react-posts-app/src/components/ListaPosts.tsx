import type { Post } from '../types'

interface Props {
    posts: Post[]
}

export const ListaPosts = ({ posts }: Props) => {
  return (
    <div>
      {posts.map((p) => (
        <div key={p.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title text-capitalize">{p.title}</h5>
            <p className="card-text">{p.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
