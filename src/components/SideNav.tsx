import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';

type sideNavProps = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setOption: React.Dispatch<React.SetStateAction<string>>
}

export const SideNav = ({ open, setOpen, setOption }: sideNavProps) => {


    const toggle = () => {
        setOpen(false)
    }

    const selected = (event: any) => {
        setOption(event.target.className)
    }

    return (
        <>
            <div className='sideNav'>
                <div className='top'>
                    <span className='toggle' onClick={toggle}><ClearIcon /></span>
                    <div className='navText'>
                        Somthing
                    </div>
                </div>
                <div className="option one" onClick={selected}>
                    option one
                </div>
                <div className="option two" onClick={selected}>
                    option two
                </div>
                <div className="option three" onClick={selected}>
                    option three
                </div>
                <div className="option four" onClick={selected}>
                    option four
                </div >
                <div className="option five" onClick={selected}>
                    option five
                </div >
                <div className="option six" onClick={selected}>
                    option six
                </div >
                <div className="option seven" onClick={selected}>
                    option seven
                </div >
                <div className="option eight" onClick={selected}>
                    option eight
                </div >
            </div >
        </>
    )
}
