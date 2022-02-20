import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

const POST = [{ id: '2' }]

const PostIdPage: NextPage<{ postid: number }> = ({ postid }) => {
  const router = useRouter()
  return (
    <div>
      <h1>Page id post stash 2</h1>
      <p>query:{JSON.stringify(router.query)}</p>
      <p>query: {router.query.postid}</p>
    </div>
  )
}
export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  // Get the paths we want to pre-render based on posts
  //   const paths = posts.map((post) => ({
  //     params: { id: post.id },
  //   }))
  return {
    paths: [{ params: { postid: '1' } }, { params: { postid: '2' } }],
    fallback: true, // false or 'blocking'
  }
}
export const getStaticProps: GetStaticProps = ({ params }) => {
  return {
    props: {
      postid: params,
    },
  }
}

export default PostIdPage
