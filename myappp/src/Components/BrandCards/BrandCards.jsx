import React from "react";
import "bootstrap/js/dist/carousel"

const BrandCards = () => {

    return (
        <div className="py-2 mb-3">
            <div
                className="container d-flex align-content-center align-items-center justify-content-evenly row-gap-3 flex-wrap">
                <div className="card" style={{width: "18rem"}}>
                    <img
                        src="https://images-static.nykaa.com/uploads/6bf02da7-be47-4de1-90e3-0379fb18660a.jpg?tr=w-600,cm-pad_resize"
                        className="card-img-top" alt="..."/>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img
                        src="https://images-static.nykaa.com/creatives/6181294d-8ed8-44a0-a4b7-d95676c00998/default.png?tr=w-600,cm-pad_resize"
                        className="card-img-top" alt="..."/>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img
                        src="https://images-static.nykaa.com/creatives/743d338d-57e0-4032-93de-4ccd6a510187/default.jpg?tr=w-600,cm-pad_resize"
                        className="card-img-top" alt="..."/>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img
                        src="https://images-static.nykaa.com/creatives/f7ece3a9-ae66-4f88-8c60-14822ecbbac7/default.jpg?tr=w-600,cm-pad_resize"
                        className="card-img-top" alt="..."/>
                </div>
            </div>
        </div>
    )
}

export default BrandCards;