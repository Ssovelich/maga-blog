import { getAllArticles } from './(server)/api';
import { ArticlePreview } from './ArticlePreview';
import { AppLink } from './shared/components/app-link';

const ARTICLES_PER_PAGE = 10;

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const page = Number.parseInt(searchParams?.page || '1', 10);
  const allArticles = await getAllArticles();
  const articles = allArticles.slice(
    (page - 1) * ARTICLES_PER_PAGE,
    page * ARTICLES_PER_PAGE
  );

  const nextPageUrl = {
    search: new URLSearchParams({
      page: (page + 1).toString(),
    }).toString(),
  };

  return (
    <>
      <h1>Blog, page: {page}</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.name}>
            <ArticlePreview name={article.name} text={article.header} />
          </li>
        ))}
      </ul>

      <AppLink href={nextPageUrl}>Next</AppLink>
    </>
  );
}
