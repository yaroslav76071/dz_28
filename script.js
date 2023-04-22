const App = () => {
  //block 1 =>
  let [block1Text, setblock1Text] = React.useState('Заголовок в блоке???')
  let [classBlock1, setClassBlock1] = React.useState('block1')
  //block 2 =>
  let [block2Text, setblock2Text] = React.useState('элемент списка???')
  let [classBlock2, setClassBlock2] = React.useState('block2')
  //block 3 =>
  let [block3Text, setblock3Text] = React.useState('Просто блок с текстом???')
  let [classBlock3, setClassBlock3] = React.useState('block3')

  const h1Click = () => {
    setblock1Text('Заголовок в блоке!!!')
    setclassBlock1('block1-click')
  }
  const liClick = () => {
    setblock2Text('элемент списка!!!')
    setclassBlock2('block2-click')
  }
  const blockClick = () => {
    setblock3Text('Просто блок с текстом!!!')
    setclassBlock3('block3-click')
  }
  return (
    <div className="app">
      <div class="wrapper">
        <div className={classBlock1}><h1 onClick={h1Click}>{block1Text}</h1></div>
        <div className={classBlock2}>
          <li onClick={liClick}>{block2Text}</li>
          <li onClick={liClick}>{block2Text}</li>
          <li onClick={liClick}>{block2Text}</li>
        </div>
        <div className={classBlock3} onClick={blockClick}>{block3Text}</div>
      </div>
    </div>
  )
}

const container = document.getElementById("app")
const root = ReactDOM.createRoot(container)
root.render(<App />)