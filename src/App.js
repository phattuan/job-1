/* eslint-disable react/jsx-pascal-case */

import Ifras_Chill from "./components/Ifras_Chill";

const solieu = [
  {
    'name': 'server',
    'so': 9.344,
    'chart_solieu':'70, 100',
    'img':'image/server.png'
  },
  {
    'name': 'pc',
    'so': 37.236,
    'chart_solieu':'55, 100',
    'img':'image/pc.png'
  },
  {
    'name': 'website',
    'so': 456,
    'chart_solieu':'80, 100',
    'img':'image/web.png'
  },
  {
    'name': 'application',
    'so': 15.8455,
    'chart_solieu':'100, 100',
    'img':'image/application.png'
  },
  {
    'name': 'network device',
    'so': 140,
    'chart_solieu':'30, 100',
    'img':'image/networking.png'
  },
  {
    'name': 'subcriber',
    'so': '11',
    'donvi':'M',
    'chart_solieu':'45, 100',
    'img':'image/subscriber.png'
  },
  {
    'name': 'mobile',
    'so': '90',
    'donvi':'M',
    'chart_solieu':'60, 100',
    'img':'image/mobile.png'
  }];

const add_chill_ifras = solieu.map((element) => { 
  return <Ifras_Chill name={element.name} so={element.so} donvi={element.donvi}  chart_solieu={element.chart_solieu} image={element.img} />
})



function App() {
  return (
    <div className="App">
      <div className="container_ifras">
        {add_chill_ifras}
      </div>
    </div>
  );
}



export default App;
