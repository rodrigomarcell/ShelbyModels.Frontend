import React, { useRef } from 'react'
import { cilChevronLeft, cilChevronRight } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const mockStories = [
  { id: 1, name: 'Ana Silva', color: '#FF6B6B' },
  { id: 2, name: 'Julia Santos', color: '#4ECDC4' },
  { id: 3, name: 'Carol Lima', color: '#45B7D1' },
  { id: 4, name: 'Mariana Costa', color: '#96CEB4' },
  { id: 5, name: 'Patricia Luz', color: '#FFEEAD' },
  { id: 6, name: 'Beatriz Rocha', color: '#D4A5A5' },
  { id: 7, name: 'Laura Mendes', color: '#9B59B6' },
  { id: 8, name: 'Fernanda Dias', color: '#3498DB' },
  { id: 9, name: 'Camila Nunes', color: '#2ECC71' },
  { id: 10, name: 'Sofia Castro', color: '#F1C40F' }
]

const StoryItem = ({ name, color }) => {
  return (
    <div className="story-item">
      <div className="story-avatar">
        <div style={{ background: color }} />
      </div>
      <div className="story-name">
        {name}
      </div>
    </div>
  )
}

const StoriesBar = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const container = scrollRef.current
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="stories-bar">
      <button
        className="nav-button prev"
        onClick={() => scroll('left')}
        aria-label="Previous stories"
      >
        <CIcon icon={cilChevronLeft} />
      </button>

      <div className="stories-container">
        <div className="stories-scroll" ref={scrollRef}>
          {mockStories.map((story) => (
            <StoryItem
              key={story.id}
              name={story.name}
              color={story.color}
            />
          ))}
        </div>
      </div>

      <button
        className="nav-button next"
        onClick={() => scroll('right')}
        aria-label="Next stories"
      >
        <CIcon icon={cilChevronRight} />
      </button>
    </div>
  )
}

export default StoriesBar
