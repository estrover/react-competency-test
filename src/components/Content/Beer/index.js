import React from 'react'

const Beer = ({ beer }) => {
  const { alcohol, blg, brand, hop, ibu, id, malts, name, style, uid, yeast } = beer
  return (
    <div style={{ alignSelf: 'center' }}>
      <p>UID: {uid}</p>
      <p>ID: {id}</p>
      <p>Brand: {brand}</p>
      <p>Name: {name}</p>
      <p>Style: {style}</p>
      <p>Malts: {malts}</p>
      <p>Hop: {hop}</p>
      <p>Alcohol: {alcohol}</p>
      <p>Blg: {blg}</p>
      <p>IBU: {ibu}</p>
      <p>Yeast: {yeast}</p>
    </div>
  )
}

export default Beer