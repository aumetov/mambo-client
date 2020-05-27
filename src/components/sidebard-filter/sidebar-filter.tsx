import React, { Component } from 'react'
import './sidebar-filter.scss'
import 'react-input-range/lib/css/index.css'
import InputRange from 'react-input-range';

export default class SidebarFilter extends Component {
    render() {
        return (
            <div className='sidebar-filter-container'>
                <div className='filters'>
                    <div className='categories-filter'>
                        <p className='filter-title'>Категории</p>
                        <p className='category'>Футболки</p>
                        <p className='category'>Брюки</p>
                        <p className='category'>Рубашки</p>
                        <p className='category'>Платья</p>
                        <p className='category'>Свитера</p>
                        <p className='category'>Толстовки</p>
                        <p className='category'>Куртки</p>
                    </div>

                    <div className='sex-filter'>
                        <p className='filter-title'>Пол</p>
                        <div className='sex-checkboxes'>
                            <input type="checkbox" id="male" name="male" value=""/>
                            <label>Мужской</label>

                            <input type="checkbox" id="female" name="female" value=""/>
                            <label>Женский</label>
                        </div>
                    </div>

                    <div className='size-filter'>
                        <p className='filter-title'>Размеры</p>
                        <div className='sizes'>
                            <div className='size'/>
                            <div className='size'/>
                            <div className='size'/>
                            <div className='size'/>
                            <div className='size'/>
                            <div className='size'/>
                            <div className='size'/>
                            <div className='size'/>
                        </div>
                    </div>

                    <div className='color-filter'>
                        <p className='filter-title'>Цвета</p>
                        <div className='colors'>
                            <div className='color'/>
                            <div className='color'/>
                            <div className='color'/>
                            <div className='color'/>
                            <div className='color'/>
                            <div className='color'/>
                            <div className='color'/>
                            <div className='color'/>
                            <div className='color'/>
                            <div className='color'/>
                        </div>
                    </div>

                    <div className='price-filter'>
                        <p className='filter-title'>Цена</p>
                        <InputRange
                            maxValue={100}
                            minValue={0}
                            formatLabel={value => `${value} с`}
                            value={{min:0, max:20}}
                            onChange={value => console.log(value)}
                            onChangeComplete={value => console.log(value)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
