import React, { useContext, Fragment } from 'react';
import { Context } from './../context/context';

export const Filter = () => {
    const { state, dispatch } = useContext(Context);
    const collapse = state.config.toggleFilter;

    return (
        <Fragment>
            <div className="filter-box" style={collapse ? { width: '300px' } : { width: '50px' }}>

                <div className="filter-buttons">
                    <button onClick={() => dispatch({ type: 'TOGGLE_FILTER', toggle: !collapse })} >{collapse ? <i className="fas fa-chevron-left"></i> : <i className="fas fa-chevron-right"></i>}</button>
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
            {collapse && 
            <div className="filter-box-mobile">
                <h3>Filter</h3>
                <form className="form">
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
                    
                    <div className="form-group">
                        <input type="brand" className="form-control" id="brand" placeholder="Zvoľte značku" />
                    </div>
                    <div className="form-group">
                        <input type="model" className="form-control" id="model" placeholder="Zvoľte model" />
                    </div>

                    <div className="form-group">
                        <input type="brand" className="form-control" id="brand" placeholder="Zvoľte značku" />
                    </div>
                    <div className="form-group">
                        <input type="model" className="form-control" id="model" placeholder="Zvoľte model" />
                    </div>

                </form>

                <div className="filter-mobile-buttons">
                    <button type="submit"><i aria-hidden className="fas fa-search"></i></button>
                    <button onClick={() => dispatch({ type: 'TOGGLE_FILTER', toggle: !collapse })} ><i aria-hidden class="fas fa-chevron-up"></i></button>
                </div>
            </div>
            }
        </Fragment>
    );
}