import React, { useState } from 'react'

const TagList = ({ query, onTagChange }) => {
  const [activeTag, setActiveTag] = useState(null)


  function onClickTag(e) {
    let target = e.target;
    if (target.tagName === 'BUTTON') {
      onTagChange(e.target.getAttribute("tagvalue"))
      setActiveTag(activeTag => e.target.getAttribute("tagvalue"))
      if (target.getAttribute("tagvalue") == null) {
        onTagChange(null)
        setActiveTag(activeTag => null)
      }
    }
  }

  function clearFilter() {
    onTagChange(null)
    setActiveTag(activeTag => null)
  }

  // buttons
  const FilterButton = ({ tagValue }) => {
    return (
      <button
        className={tagValue.fieldValue === activeTag ? "active-tag" : ""}
        tagvalue={tagValue.fieldValue}
        onClick={onClickTag}
        onKeyDown={onClickTag}
      >
        {tagValue.fieldValue} <span><b>{tagValue.totalCount}</b></span>
      </button>
    )
  }

  return (
    <>
      <div className="h4">Фильтр по тегу:</div>
      <div className="tag-list">
        <button
          className={`unfilter ${activeTag === null ? "active-tag" : ""}`}
          onClick={clearFilter}
        >
          All
        </button>

        {query.map(tag => {
          return (
            <FilterButton key={tag.fieldValue} tagValue={tag} />
          )
        })}
      </div>
    </>
  )
}

export default TagList