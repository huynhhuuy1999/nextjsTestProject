import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'

const PostCreatePage: NextPage<{ message: string }> = ({ message }) => {
  const route = useRouter()
  const goToPostidPage = () => {
    route.push({
      pathname: '/posts/[abc]',
      query: {
        abc: 456,
      },
    })
  }
  const goBack = () => {
    route.back()
  }
  // console.log('message', message)
  return (
    <div>
      <h1>Page create post</h1>
      <button onClick={goToPostidPage}>Go to postid page</button>
      <button onClick={goBack}>Go back</button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      message: 'Next.js is awesome',
    },
  }
}

export default PostCreatePage
