import './index.css'

function Exercicio2() {
	const HandleOnclick = () => {
      alert('Clicked!')
	}
	return <button className="btn" onClick={HandleOnclick}>Click me</button>
}

export default Exercicio2
