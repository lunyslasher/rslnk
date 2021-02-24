import React from "react";
export const HomePage = () => {
    return (
        <div className="container" style={{ margin: `10vh 5% auto`, fontFamily: `Lato`, minWidth: `90%` }}>
            <div className="row" style={{ justifyContent: `space-around` }}>
                <div className="col s4" style={{ padding: `15px`, background: `#333`, borderRadius: `25px`, border: `10px solid #222222` }}>
                    <h5>What's up, dear pathfinder?</h5>
                    <p className="grey-text darken-4">
                        Who am I? I'm just student from cold Omsk, Russia. Love to play R6, listening rock and programming.
                    </p>
                </div>
                <div className="col s4" style={{ padding: `15px`, background: `#333`, borderRadius: `25px`, border: `10px solid #222222` }}>
                    <h5>Rainbow Six Siege Settings</h5>
                    <p className="grey-text darken-4">
                        Display: 1920x1080 / 16:10 / FOV 90 / All low/off
                        <br /> Sensitivity: 13 16 ADS 38 / 46 / 54 / 58
                    </p>
                </div>
                <div className="col s4" style={{ padding: `15px`, background: `#333`, borderRadius: `25px`, border: `10px solid #222222` }}>
                    <h5>You can find me here</h5>
                    <div class="social vk">
                        <a href="https://vk.com/looney756" target="_blank">
                            <i class="fa fa-discord fa-2x"></i>
                        </a>
                    </div>
                    <div class="social github">
                        <a href="https://github.com/looney756" target="_blank">
                            <i class="fa fa-github fa-2x"></i>
                        </a>
                    </div>
                    <div class="social instagram">
                        <a href="https://instagram.com/looneyrevice" target="_blank">
                            <i class="fa fa-instagram fa-2x"></i>
                        </a>
                    </div>
                    <div class="social telegram">
                        <a href="https://t.me/looney756" target="_blank">
                            <i class="fa fa-paper-plane fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
