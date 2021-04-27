import React, { Component, useState } from "react";

import ReactConsole from "@webscopeio/react-console";

class App extends Component {
    render() {
        const welcome = `What's up, my comrade? I don't know how you found my site, but im glad you here!
    
Who am I? I'm little programmer, beginner guitarist, and happy student.

You can find me here:

.-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.
|                                         |
|  <a target='blank' href='https://vk.com/looney756'>VK</a> <a target='blank' href='https://rslnk.ru/discord'>Discord</a> <a target='blank' href='https://github.com/looney756'>GitHub</a> <a target='blank' href='https://instagram.com/looneyrevice'>Inst</a> <a target='blank' href='https://t.me/looney756'>Telegram</a> <a target='blank' href='https://steamcommunity.com/id/looney756/'>Steam</a>  |
|                                         |
'-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'

Here are some cool commands for you:

<b>settings</b>       My rainbow six siege settings

<b>uptime</b>         Check my host machine uptime

<b>destroy</b>        Destroy my site


Enjoy! #rock4ever

`;
        return (
            <div>
                <ReactConsole
                    autoFocus
                    welcomeMessage={welcome}
                    commands={{
                        echo: {
                            description: "Echo",
                            fn: (...args) => {
                                return new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        resolve(`${args.join(" ")}`);
                                    }, 0);
                                });
                            },
                        },
                        test: {
                            description: "Test",
                            fn: (...args) => {
                                return new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        resolve("Hello world");
                                    }, 0);
                                });
                            },
                        },
                        destroy: {
                            description: "Rickroll",
                            fn: (...args) => {
                                return new Promise((resolve, reject) => {
                                    // eslint-disable-next-line no-restricted-globals
                                    location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                                });
                            },
                        },
                        uptime: {
                            description: "Uptime",
                            fn: (...args) => {
                                return new Promise((resolve, reject) => {
                                    resolve('<a href="https://uptime.rslnk.ru/" target="_blank">Click here</a>');
                                });
                            },
                        },
                        settings: {
                            description: "R6",
                            fn: (...args) => {
                                return new Promise((resolve, reject) => {
                                    resolve("Sens: H: 11 V: 11 ADS: 32 / 42 / 46 / 48\n\nDisplay: 1280x1024 75hz / 16:10 / FOV 90 / All low/off");
                                });
                            },
                        },
                    }}
                    wrapperStyle={{ height: `97vh`, overflow: "hidden" }}
                    lineStyle={{ fontSize: `14px` }}
                    promptStyle={{ fontSize: `14px` }}
                    inputStyle={{ fontSize: `14px` }}
                    noCommandFound={(...str) => {
                        return new Promise((res, rej) => {
                            res("Command not found.");
                        });
                    }}
                    onSanitizeOutputLine={(str) => {
                        if (str.includes("<")) {
                            if (str.includes("#rock4ever") || str.includes("uptime.rslnk.ru")) {
                                return str;
                            }
                            return "$ Are u dumbass? Did u really just tried to XSS?";
                        }
                        return str;
                    }}
                />
            </div>
        );
    }
}
export default App;
