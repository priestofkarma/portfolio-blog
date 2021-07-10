import React, { useState } from 'react'

const TagList = ({ query, onTagChange }) => {
  const [activeTag, setActiveTag] = useState("")


  function onClickTag(e) {
    onTagChange(e.target.getAttribute("tagvalue"))
    setActiveTag(activeTag => e.target.getAttribute("tagvalue"))
  }

  function clearFilter() {
    onTagChange(null)
    setActiveTag(activeTag => null)
  }

  // clear button
  const ClearFilterBtn = () => (
    <button
      className="unfilter"
      onClick={clearFilter}
    >celar filter</button>
  )

  // buttons
  const FilterButton = ({ tagValue }) => {

    return (
      <button
        className={tagValue.fieldValue === activeTag ? "active-tag" : ""}
        tagvalue={tagValue.fieldValue}
        onClick={onClickTag}
        onKeyDown={onClickTag}
      >
        {tagValue.fieldValue} ({tagValue.totalCount})
      </button>
    )
  }


  return (
    <div className="tag-list">
      {query.map(tag => {
        return (
          <FilterButton key={tag.fieldValue} tagValue={tag} />
        )
      })}
      {activeTag ? <ClearFilterBtn /> : null}
    </div>
  )
}

export default TagList