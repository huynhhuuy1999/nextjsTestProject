import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

const PostPage: NextPage<IPostPage> = ({ title }) => {
  return (
    <div>
      <h1>Page index post</h1>
      <Link href="/posts/create">
        <a>Go to create post page</a>
      </Link>
      <p>{title}</p>
    </div>
  )
}

interface IPostPage {
  title: string
}

export const getStaticProps: GetStaticProps<IPostPage> = async (context) => {
  console.log(context)
  return {
    props: {
      title: 'this is my title',
    },
  }
}

export default PostPage
