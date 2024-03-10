// import './App.css'

import { APIProvider, AdvancedMarker } from '@vis.gl/react-google-maps'

import trees from '../src/api/data'
import GoogleMapCustome from './component/Map'
import { Libraries, useLoadScript } from '@react-google-maps/api'

const libraries: Libraries = ['places']

function App() {
  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAz2ugDz1s73XajkGNiBsw86_3z6mH-RtM',
    libraries: libraries,
    version: '3.53'
  })

  return isLoaded ? (
    <div>
      <GoogleMapCustome />
    </div>
  ) : (
    // <APIProvider apiKey={'AIzaSyAz2ugDz1s73XajkGNiBsw86_3z6mH-RtM'}>
    //   <div style={{ height: '100vh', width: '100%' }}>
    //     <GoogleMapCustome />
    //     {/* <Map mapId={'b0d6bda2b6b19f6c'}>

    //       <Markers points={trees} /></Map> */}
    //   </div>
    // </APIProvider>
    <></>
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
