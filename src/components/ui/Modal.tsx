import modalCSS from './modal.module.css'
import RoundBtn from '@/components/ui/RoundBtn'
import Overlay from './Overlay'

export default function Modal(props) {

    const handleClose = (e) => {
        if (e.target === e.currentTarget) 
            props.toggle()
    }

    return (
        <Overlay zIndex={50} onClick={handleClose}>
            <div className={modalCSS.modal}>
                <div className={modalCSS.header}>
                    <h1>{props.title}</h1>
                    <div className={modalCSS.closeBTN}>
                        <RoundBtn icon="close" onClick={props.toggle}/>
                    </div>
                </div>
                <div className={modalCSS.body}>
                    {props.children}
                </div>
            </div>
        </Overlay>
    )
}
