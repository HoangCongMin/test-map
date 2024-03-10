import React, { useRef, useState } from 'react'
import { GoogleMap, InfoWindow, InfoWindowF, MarkerF } from '@react-google-maps/api'

const markers = [
  {
    id: 1,
    name: 'Chicago, Illinois',
    position: { lat: 41.881832, lng: -87.623177 }
  },
  {
    id: 2,
    name: 'Denver, Colorado',
    position: { lat: 39.739235, lng: -104.99025 }
  }
  // {
  //   id: 2,
  //   name: 'Denver, Colorado',
  //   position: { lat: 39.739235, lng: -104.99025 }
  // }
  // {
  //   id: 3,
  //   name: 'Los Angeles, California',
  //   position: { lat: 34.052235, lng: -118.243683 }
  // },
  // {
  //   id: 4,
  //   name: 'New York, New York',
  //   position: { lat: 40.712776, lng: -74.005974 }
  // }
]

function GoogleMapCustome() {
  const [activeMarker, setActiveMarker] = useState(null)
  const [hoverMarker, setHoverMarker] = useState(null)
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>()
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null)

  const handleActiveMarker = (marker: any) => {
    if (marker === activeMarker) {
      return
    }
    setActiveMarker(marker)
  }

  const handleOnLoad = (map: any) => {
    map.setZoom(20)
    map.setCenter(new google.maps.LatLng(39.739235, -104.99025))
    setMapRef(map)
  }

  const handleMouseOverMarker = (marker: any) => {
    clearTimeout(hoverTimer.current)
    setHoverMarker(marker)
  }

  const handleMouseOutMarker = () => {
    hoverTimer.current = setTimeout(() => {
      setHoverMarker(null)
    }, 0)
  }

  const markerGIS = (
    data: string
  ) => ` <svg width='30' height='30' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
 <g clipPath='url(#clip0_9893_12585)'>
   <path
     d='M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z'
     stroke='#f24e1e'
     strokeWidth='2'
     strokeLinecap='round'
     strokeLinejoin='round'
   />
   <path
     d='M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z'
     stroke='#f24e1e'
     strokeWidth='2'
     strokeLinecap='round'
     strokeLinejoin='round'
   />
 </g>
 <defs>
   <clipPath id='clip0_9893_12585'>
     <rect width='12' height='12' fill='white' />
     <text>${data}<text>
   </clipPath>
 </defs>
</svg>`

  const IconGis = () => ({
    url: 'data:image/svg+xml;charset=utf-8, ' + encodeURIComponent(markerGIS('1')),
    size: new google.maps.Size(30, 30),
    scaledSize: new google.maps.Size(30, 30),
    anchor: new google.maps.Point(15, 40)
  })

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      center={{ lat: 41.881832, lng: -87.623177 }}
      mapContainerStyle={{ width: '80vw', height: '80vh' }}
    >
      {/* <div></div> */}
      {markers.map(({ id, name, position }) => (
        <MarkerF
          key={id}
          onMouseOver={handleMouseOverMarker}
          onMouseOut={handleMouseOutMarker}
          position={position}
          onClick={() => handleActiveMarker(id)}
          icon={IconGis()}
        >
          {/* {activeMarker === id ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null} */}
        </MarkerF>
      ))}

      {hoverMarker && (
        <InfoWindowF
          options={{ pixelOffset: new google.maps.Size(0, -40) }}
          position={new window.google.maps.LatLng(hoverMarker.latLng.lat(), hoverMarker.latLng.lng())}
        >
          <div>123</div>
        </InfoWindowF>
      )}
    </GoogleMap>
  )
}

export default GoogleMapCustome
