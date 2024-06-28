import './ApartmentInfos.scss';

function ApartmentInfos() {
    return (
        <div className="apartment-header">
            <div className='apartment-info'>
                <h1 >Crazy loft on the canal Saint Martin</h1>
                <h2 >Paris, ile de France</h2>  
                    <div className='apartment-tags'>
                        <span>Cozy</span>
                        <span>Canal</span>
                        <span>Paris 10</span>
                    </div> 
            </div>
            <div className='apartment-details__owner'>
                <div className="apartment-details">
                <h3><span>Alexandre</span><span>Dumas</span></h3>
            <div className='apartment-details__badge'></div>
            </div>
                <div className="apartment-stars">
                    <span className='star-on'>★</span>
                    <span className='star-on'>★</span>
                    <span className='star-on'>★</span>
                    <span className='star-off'>★</span>
                    <span className='star-off'>★</span>
                </div>
            </div>
        </div>

    )
}

export default ApartmentInfos