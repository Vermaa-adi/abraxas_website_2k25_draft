import React from 'react';
import Navbar from '../Navbar';
import '../../styles/event/events.css';
import { useState } from 'react';
import escape_room from '../../assets/images/events/escape_room.png'
import physics_carnival from '../../assets/images/events/physics_carnival.jpg'
import guest_lecture_ranjan_chopra from '../../assets/images/events/guest_lecture_ranjan_chopra.jpg'
import threed_printing from '../../assets/images/events/threed_printing.jpg'
import threed from '../../assets/images/events/threed.jpg'
import guest from '../../assets/images/events/guest.jpg'
import { motion } from 'framer-motion'
import carnival from '../../assets/images/events/carnival.jpg'
import escape from '../../assets/images/events/escape.jpg'


const Events = () => {
    const [isEvent, setEvent] = useState("workshop");
    const myStyle = { color: "white", marginBottom: "2.5rem" };

    function eventHandle() {
        setEvent("events");
        document.getElementsByClassName("evtBtn")[0].style.boxShadow = "2px 3px #fff";
        document.getElementsByClassName("eventPageTitle")[0].style.boxShadow = "0px 0px";
    }

    function workshopHandle() {
        setEvent("workshop");
        document.getElementsByClassName("eventPageTitle")[0].style.boxShadow = "2px 3px #fff";
        document.getElementsByClassName("evtBtn")[0].style.boxShadow = "0px 0px";
    }

    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);

    function handleFlip() {
        if (!isAnimated) {
            setIsFlipped(!isFlipped);
            setIsAnimated(true);
        }
    }

    return (
        <div>
            <div className="tempNav">
                <Navbar />
            </div>
            <div className="workShop">
                <button className='eventPageTitle text-xl' onClick={workshopHandle}>Work Shop</button>
                <button className='evtBtn text-xl' onClick={eventHandle}>Events</button>
            </div>

            <div className='eventsCard flex h-lvh mt-20'>
                {isEvent !== "workshop" ? <>


                    <div>
                        <div className='flip-card  w-[500px] h-[550px] rounded-md  cursor-pointer' onClick={handleFlip}>
                            <motion.div
                                className='flip-card-inner w-[100%] h-[100%]'
                                initial={false}
                                animate={{ rotateY: isFlipped ? 180 : 360 }}
                                transition={{ duration: 0.6, animationDirection: "normal" }}
                                onAnimationComplete={() => setIsAnimated(false)}
                            >
                                <div
                                    className='flip-card-front w-[100%] h-[100%] bg-contain bg-no-repeat text-white rounded p-4'
                                    style={{ backgroundImage: `url(${physics_carnival})` }}>
                                </div>

                                <div
                                    className='flip-card-back w-[100%] h-[100%]  bg-contain bg-no-repeat text-white rounded p-4'
                                    style={{ backgroundImage: `url(${carnival})` }}>
                                </div>

                            </motion.div>
                        </div>
                    </div>

                    <div>
                        <div className='flip-card  w-[500px] h-[550px] rounded-md    cursor-pointer' onClick={handleFlip}>
                            <motion.div
                                className='flip-card-inner w-[100%] h-[100%]'
                                initial={false}
                                animate={{ rotateY: isFlipped ? 180 : 360 }}
                                transition={{ duration: 0.6, animationDirection: "normal" }}
                                onAnimationComplete={() => setIsAnimated(false)}
                            >
                                <div
                                    className='flip-card-front w-[100%] h-[100%] bg-contain bg-no-repeat text-white rounded p-4'
                                    style={{ backgroundImage: `url(${escape_room})` }}>
                                </div>

                                <div
                                    className='flip-card-back w-[100%] h-[100%]  bg-contain bg-no-repeat text-white rounded p-4'
                                    style={{ backgroundImage: `url(${escape})` }}>
                                </div>

                            </motion.div>
                        </div>
                    </div>



                </>

                    :
                    <><div>
                        <div className='flip-card  w-[500px] h-[550px] rounded-md    cursor-pointer' onClick={handleFlip}>
                            <motion.div
                                className='flip-card-inner w-[100%] h-[100%]'
                                initial={false}
                                animate={{ rotateY: isFlipped ? 180 : 360 }}
                                transition={{ duration: 0.6, animationDirection: "normal" }}
                                onAnimationComplete={() => setIsAnimated(false)}
                            >
                                <div
                                    className='flip-card-front w-[100%] h-[100%] bg-contain bg-no-repeat text-white rounded p-4'
                                    style={{ backgroundImage: `url(${threed_printing})` }}>
                                </div>

                                <div
                                    className='flip-card-back w-[100%] h-[100%]  bg-contain bg-no-repeat text-white rounded p-4'
                                    style={{ backgroundImage: `url(${threed})` }}>
                                </div>

                            </motion.div>
                        </div>
                    </div>

                        <div>
                            <div className='flip-card  w-[500px] h-[550px] rounded-md    cursor-pointer' onClick={handleFlip}>
                                <motion.div
                                    className='flip-card-inner w-[100%] h-[100%]'
                                    initial={false}
                                    animate={{ rotateY: isFlipped ? 180 : 360 }}
                                    transition={{ duration: 0.6, animationDirection: "normal" }}
                                    onAnimationComplete={() => setIsAnimated(false)}
                                >
                                    <div
                                        className='flip-card-front w-[100%] h-[100%] bg-contain bg-no-repeat text-white rounded p-4'
                                        style={{ backgroundImage: `url(${guest_lecture_ranjan_chopra})` }}>
                                    </div>

                                    <div
                                        className='flip-card-back w-[100%] h-[100%]  bg-contain bg-no-repeat text-white rounded p-4'
                                        style={{ backgroundImage: `url(${guest})` }}>
                                    </div>

                                </motion.div>
                            </div>
                        </div>
                    </>}
            </div>


        </div >
    )
}

export default Events;