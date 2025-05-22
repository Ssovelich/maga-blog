// import styles from './about.module.css';

export default function ArticlePage({ params }: Params) {
  const { articleName } = params;
  return <>This is article: {articleName}</>;
}
