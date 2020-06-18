import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTSlider from './BTSlider'
import BTSmartPhone from './BTSmartPhone'
import BTLapTop from './BTLapTop'
import BTPromotion from './BTPromotion'

export default class BaiTapDanLayOut extends Component {
    render() {
        return (
            <div>
                <BTHeader></BTHeader>
                <BTSlider></BTSlider>
                <BTSmartPhone></BTSmartPhone>
                <BTLapTop></BTLapTop>
                <BTPromotion></BTPromotion>
            </div>
        )
    }
}
