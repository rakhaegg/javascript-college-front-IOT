
import { extend } from 'leaflet'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import CardTim from './CardTim'
import pic from './image/pict.jpg'


class DaftarTim extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        const ListTim = [
            {
                name: "Rakha Elang Gunawan",
                image: pic
            },
            {
                name: "Arin Kistia",
                image: pic
            },
            {
                name: "Irsyad ",
                image: pic
            }
        ]

        return (

            <div>
                <body>
                <div className="container">
                    <div className='row'>
                        {ListTim.map(item => {

                            return <CardTim pic={item.image} name={item.name} />
                        })}
                    </div>
                </div>
                </body>
            </div>
            
        )
    }

}

export default DaftarTim