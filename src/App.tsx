// import './App.css'

import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps'

import trees from '../src/api/data'
function App() {
  return (
    <APIProvider apiKey={'AIzaSyAz2ugDz1s73XajkGNiBsw86_3z6mH-RtM'}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map center={{ lat: 43.64, lng: -79.41 }} zoom={10} mapId={'b0d6bda2b6b19f6c'}>
          <Markers points={trees} />
        </Map>
      </div>
    </APIProvider>
  )
}

type Point = google.maps.LatLngLiteral & { key: string }
type Props = { points: Point[] }
const Markers = ({ points }: Props) => {
  return (
    <>
      {points.map((point) => (
        <AdvancedMarker position={point} key={point.key}>
          <span style={{ fontSize: '2rem' }}>1</span>
        </AdvancedMarker>
      ))}
    </>
  )
}
export default App
