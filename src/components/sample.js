// const [count, setCount] = useState([])
//   const [userCount, setUserCount] = useState([])


//   const appendNumber = () => {
//     const newNum = Math.floor(Math.random() * 4)

//     setCount([...count, newNum])
//   }

//   useEffect(() => {
//     checkEquality()
//   }, [userCount])

//   const checkEquality = () => {
//     let equal = true;
//     console.log('duhg')
//     for (let i = 0; i < userCount.length; i++) {
//       console.log(count[i], 'count')
//       console.log(userCount[i], 'usecount')
//       if (count[i] == userCount[i] && i !== count.length - 1) {
//         console.log('wow')
//         equal = true;
//       } else if (count[i] == userCount[i] && i == count.length - 1) {
//         alert('Nexzt Level')
//         setUserCount([])
//       } else if (count[i] !== userCount[i] && i !== count.length - 1) {
//         alert('Not Equal')
//         setUserCount([])
//       } else {
//         console.log('nah')
//         equal = false;
//         alert('NOT EQUAL')
//         setCount([])
//         setUserCount([])
//       }
//     }
//   }


//   const numClick = (e) => {
//     console.log('herw', e.target.innerText)
//     setUserCount([...userCount, Number(e.target.innerText)])
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello Epic
//         <Button color='primary'> REACT </Button>
//         <button onClick={() => appendNumber()}>addNum</button>
//         {count.length ? count.map(ele => ele) : <span>EMPTY</span>}

//         <div>
//           <button onClick={(e) => numClick(e)}>0</button>
//           <button onClick={(e) => numClick(e)}>1</button>
//           <button onClick={(e) => numClick(e)}>2</button>
//           <button onClick={(e) => numClick(e)}>3</button>
//         </div>

//         {userCount.length ? userCount.map(ele => ele) : <span>EMPTY</span>}


//       </header>
//     </div>
//   );