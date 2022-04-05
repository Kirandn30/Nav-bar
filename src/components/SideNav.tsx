import React from 'react'
import { useNavigate } from 'react-router-dom'

type sideNavProps = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SideNav = ({ open, setOpen }: sideNavProps) => {

    const navigate = useNavigate()

    const toggle = () => {
        setOpen(false)
    }

    return (
        <>
            <div className='sideNav'>
                <div className='top'>
                    <span className='toggle' onClick={toggle}>X</span>
                    <div className='navText'>
                        Somthing
                    </div>
                </div>
                <div className="option one" onClick={() => navigate("/option1")}>
                    option one
                </div>
                <div className="option two" onClick={() => navigate("/option2")}>
                    option two
                </div>
                <div className="option three" onClick={() => navigate("/option3")}>
                    option three
                </div>
                <div className="option four" onClick={() => navigate("/option4")}>
                    option four
                </div>
                <div className="option five" onClick={() => navigate("/option5")}>
                    option five
                </div>
                <div className="option six" onClick={() => navigate("/option6")}>
                    option six
                </div>
                <div className="option seven" onClick={() => navigate("/option7")}>
                    option seven
                </div>
                <div className="option eight" onClick={() => navigate("/option8")}>
                    option eight
                </div>
            </div>
        </>
    )
}
