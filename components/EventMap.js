import Image from 'next/image'
import { useState, useEffect } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default function EventMap({ evt }) {
  const [lat, setLat] = useState(evt.latitude)
  const [lng, setLng] = useState(evt.longitude)
  const [loading, setLoading] = useState(true)
  const [viewport, setViewport] = useState({
    // lat: 0,
    // lng: 0,
    width: '80%',
    height: '350px',
    zoom: 16,
  })

  useEffect(() => {
    if (lat === 0 || lng === 0) return
    setLat(lat)
    setLng(lng)
    setViewport({ ...viewport, latitude: lat, longitude: lng })
    setLoading(false)
    // console.log('useEffect: lat', lat, 'lng', lng)
  }, [])

  if (loading) return false

  // console.log('Viewport', viewport)

  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
      onViewportChange={(vp) => setViewport(vp)}
    >
      <Marker key={evt.id} latitude={lat} longitude={lng}>
        <Image src='/images/pin.svg' width={30} height={30} />
      </Marker>
    </ReactMapGl>
  )
}
