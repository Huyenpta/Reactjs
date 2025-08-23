import logo from './logo.svg';
import './App.css';
import './components/Demo';
import Demo from './components/Demo';
import './components/Catalog';
import Catalog from './components/Catalog';

function App() {
  const sv1={
    name: "Nguyễn Văn An",
    tel: "098752423",
    email:"annv@gmail.com",
    address: "13 Trịnh Văn Bô"
  };
  const sv2={
    name: "Nguyễn Ánh Tuyết",
    tel: "0985254526",
    email:"tuyetna@gmail.com",
    address: "65 Phạm Thận Duật"
  };
  const cats = [{
    name: "Fashion",
    count: 12
  },
  {
    name: "Watch",
    count: 3
  }]
  return (
    <div className="App">
      <Demo data={sv1}/>
      <Demo data={sv2}/>
      <Catalog cat={cats[0]}/>
      <Catalog cat={cats[1]}/>
      {
        cats.map((e,i)=>{ //element ---- i: index
          return <Catalog cat={e} key={i}/>
        })
      }
    </div>
  );
}

export default App;
