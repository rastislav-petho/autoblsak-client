import React, { useState, Fragment } from 'react';

export const Filter = () => {
    const [collapse, setCollapse] = useState(true);
    return (
        <div className="filter-box" style={collapse ? { width: '16%' } : { width: '50px' }}>
            
            <div className="filter-buttons">
                <button onClick={() => setCollapse(!collapse)} >{collapse ? <i class="fas fa-chevron-left"></i> : <i class="fas fa-chevron-right"></i>}</button>
                <button><i aria-hidden className="fas fa-search"></i></button>
            </div>
            
            {collapse && 
            <Fragment>
            <h3>Filter</h3>
            <form>
                <div className="form-group">
                    <select className="form-control" name="brand">
                        <option>Zvoľte značku</option>
                    </select>
                </div>
                <div className="form-group">
                    <select className="form-control" name="model">
                        <option>Zvoľte model</option>
                    </select>
                </div>
                <div className="form-group">
                    <select className="form-control" name="coupe">
                        <option>Karoséria</option>
                    </select>
                </div>
                <div className="form-group">
                    <select className="form-control" name="fuel">
                        <option>Palivo</option>
                    </select>
                </div>
                <div className="form-group">
                    <select className="form-control" name="transmision">
                        <option>Prevodovka</option>
                    </select>
                </div>
                <div className="form-group">
                    <select className="form-control" name="color">
                        <option>Farba</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="brand" className="form-control" id="brand" placeholder="Zvoľte značku" />
                </div>
                <div className="form-group">
                    <input type="model" className="form-control" id="model" placeholder="Zvoľte model" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                </div>
                
            </form>
            </Fragment>
        }
        </div>

    );
}