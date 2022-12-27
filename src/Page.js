function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const api = {
  load: {},
  update: {},
  delete: {},
  sync: {},
  search: {},
};

const posts = [
  {
    id: 1,
    customer: {}, // api.search.customer('1234')
    title: 'Переустановка ОС',
    ticket: {},
    content: '10 АРМ',
  },
  { id: 2, title: 'Установка', content: 'React можно установить из npm.' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Blog posts={posts} />);
