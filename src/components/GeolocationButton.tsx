'use client'

import { useState } from 'react'
import { Button } from "../components/ui/button"

export default function GeolocationButton() {
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null)
  const [error, setError] = useState<string | null>(null)

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords)
        setError(null)
      },
      () => {
        setError('Unable to retrieve your location')
      }
    )
  }

  return (
    <div className="flex flex-col items-center">
      <Button onClick={getLocation} className="mb-4">
        位置情報を取得
      </Button>
      {location && (
        <div className="text-center">
          <p>緯度: {location.latitude}</p>
          <p>経度: {location.longitude}</p>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}