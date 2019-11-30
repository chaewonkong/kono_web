/* global kakao */
import React, { useEffect, useState } from "react"
import { konoAPI } from "../api"
import { IKonoList } from '../shared-interfaces'

const Map: React.FC = () => {


    // Set Map to state
    const [map, setMap] = useState()

    // Set konoList to state
    const [konoList, setKonoList] = useState()

    useEffect(() => {
        // Set Kakao Map
        let [x, y] = [127.0507571, 37.5030042]
        getKonoList(x, y)

        if (window.kakao) {
            let options = { //지도를 생성할 때 필요한 기본 옵션
                center: new window.kakao.maps.LatLng(y, x), //지도의 중심좌표.
                // center: new window.kakao.maps.LatLng(127.0507571, 37.5030042),
                level: 3//지도의 레벨(확대, 축소 정도)
            };

            let container = document.getElementById('map')

            let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
            // if (container) map.relayout()
            setMap(map)
        }

    }, [])

    const getKonoList = async (x: number, y: number): Promise<void> => {
        let data = await konoAPI.getKonoList(x, y)
        setKonoList(data)
    }
    return (
        <div id="map" style={mapStyle}>

        </div>
    )
}

const mapStyle = {
    width: "100%",
    height: "100%",
}

export default Map