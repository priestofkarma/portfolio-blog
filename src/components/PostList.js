import React from 'react'
import PostListItem from './PostListItem'
import SectionCaption from '../components/SectionCaption'

const PostList = ({ title, query, postType, tagNameFilter, linkText }) => {

  return (
    <div className={`${postType}-list-container posts-list-container`}>
      {title && <SectionCaption title={title} linkTo={`/${postType}`} linkText={linkText} />}
      <ul className="list">
        {query.edges.map(function ({ node }, index) {
          const tags = node.frontmatter.tags

          if (tagNameFilter) {
            return tags.filter(tag => tag === tagNameFilter)
              .map(() => <PostListItem nodeObj={node} postType={postType} cardGradient={index + 1} key={`${postType}ListItem${index}`} />)
          } else {
            return <PostListItem nodeObj={node} postType={postType} cardGradient={index + 1} key={`${postType}ListItem${index}`} />
          }
        })}
      </ul>
    </div>
  )
}

export default PostList
