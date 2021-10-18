import React, { Component } from 'react'
import Navbar from 'components/Navbar/Navbar'
import ContactForm from 'components/ContactForm/ContactForm'
import DropDown from 'components/DropDownMenu/DropDown'
import SkillCard from 'components/Cards/SkillCard'
import Footer from 'components/Footer/Footer'

export default class ContactPage extends Component {

    constructor(){
        super()
        this.dropDown = React.createRef();
        this.state={
            nav_status: false,
        }
    }

    pull_out_dropdown = async () => {
        let dropDown= this.dropDown.current
        

        this.setState({
            nav_status: !this.state.nav_status
        })

        if(this.state.nav_status == true){
            dropDown.style.height = '0'
        }
        else{
            dropDown.style.height = '92vh'
            dropDown.style.backgroundColor = 'white'
        }

    }
    render() {
        return (
            <div className="page-wrapper">
                <Navbar dropdown={this.pull_out_dropdown}/>

                <div className="dropdown-menu" ref={this.dropDown}>
                    <DropDown />
                </div>


                <div className="content-wrapper" >
                  

                    <div className="section-2" style={{marginTop: '-0.5em'}}>
                         <ContactForm />
                    </div>

                    <div className="section-2">
                    <SkillCard img1={"https://i.imgur.com/RiLBaNc.png"} img2={"https://i.imgur.com/w05WNrp.png"} img3={"https://i.imgur.com/F97pQA0.png"} img4={"https://i.imgur.com/kaBe4fY.png"} img5={"https://i.imgur.com/D5UaqJo.png"} img6={"https://i.imgur.com/t6GJPzJ.png"} title={"Connect with me"}  color={"black"}  title1={"LinkedIn"} title2={"Youtube"} title3={"Instagram"}  title4={"Twitter"} title5={"Facebook"} title6={"TikTok"}/>
                    </div>

                    <div className="section-2">
                         <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

