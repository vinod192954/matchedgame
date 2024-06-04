import './index.css'

const TabItem = props => {
  const {Tab, clickTabItem, isActive} = props
  const {tabId, displayText} = Tab
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const tabClass = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-list-items">
      <button
        className={`tab-button ${tabClass}`}
        onClick={onClickTabItem}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
